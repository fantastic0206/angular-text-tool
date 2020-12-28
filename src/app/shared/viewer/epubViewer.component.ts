import {
  Component,
  EventEmitter,
  Input, NgZone,
  OnDestroy, OnInit,
  Output,
  ViewEncapsulation
} from "@angular/core";
import {EpubBookmark, EpubService} from "../services/epub.service";
import {environment} from "../../../environments/environment";
import {Subscription} from "rxjs";
import {isMobile} from "../utils/helper";

declare const ePub: any;

@Component({
  selector: 'epub-viewer',
  template: `<ng-container>
    <div id="viewer" [style.padding]="!isMobile ? padding : 0" #viewer></div>
    <a *ngIf="!isMobile" href="javascript:void(0)" class="arrow prev" (click)="previousPage()">‹</a>
    <a *ngIf="!isMobile" href="javascript:void(0)" class="arrow next" (click)="nextPage()">›</a>
    <span *ngIf="!isMobile" class="page">Page {{location?.start?.displayed?.page}}</span>
    <progress-bar *ngIf="percentage !== 100" [value]="percentage" [label]="status">
    </progress-bar>
  </ng-container>`,
  styleUrls: ['./epubViewer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EpubViewerComponent implements OnInit, OnDestroy {
  epub: any = null;
  rendition: any = null;
  location: any = null;

  @Input()
  padding: string = null;

  @Output('onDocumentReady')
  onDocumentReady: EventEmitter<void> = new EventEmitter<void>();

  @Output('onDocumentClose')
  onDocumentClose: EventEmitter<{page: number, searchText: string, bookmarks: string[]}> = new EventEmitter<{page: number, searchText: string, bookmarks: string[]}>();

  status: string;
  percentage: number;

  private epubSub: Subscription;
  private placeBookmarkSub: Subscription;

  private bookmarks: EpubBookmark[];
  private newBookmarks: string[] = [];
  private searchText: string;
  private totalPages: number;
  private searchDone: boolean;
  private nextSearch: boolean;

  isMobile: boolean = isMobile()

  constructor(private zone: NgZone, private epubService: EpubService) {}

  ngOnInit() {
    this.epubSub = this.epubService.epub.subscribe(eb => {
      this.zone.run(() => {
        if (eb.status === 'processing') {
          this.status = eb.data.msg;
          this.percentage = eb.data.percentage;
        }
        if (eb.status === 'success') {
          this.initEpub(`${environment.fileInfoUrl}${eb.data.url}`, eb.data.page, eb.data.lineContent, eb.data.bookmarkLines)
        }
      })
    })

    this.placeBookmarkSub = this.epubService.placeBookmarkEvent.subscribe(() => {
      if (this.location) {
        const locationCfi = this.location.start.cfi;
        const text = this.rendition.getRange(locationCfi).startContainer.data
        const spineItem = this.rendition.book.spine.get(locationCfi);
        spineItem.find(text).map(s => {
          if (s.excerpt === text) {
            this.rendition.annotations.mark(s.cfi);
            if (!this.newBookmarks.includes(text)) {
              this.newBookmarks.push(text)
            }
          }
        })
      }
    })
  }

  initEpub(link, page, lineContent, bookmarks) {
    this.epub = ePub(link)
    this.bookmarks = bookmarks
    let options: any = {}
    if (!this.isMobile) {
      options = {
        width: "100%",
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 230,
        spread: "always"
      }
    } else {
      options = {
        width: "100%",
        manager: "continuous",
        flow: "scrolled"
      }
    }
    this.rendition = this.epub.renderTo('viewer', options);
    this.epub.ready.then(() => {
      this.status = "Pages computing...."
      return this.epub.locations.generate(1024)
    }).then(locations => {
      this.onDocumentReady.next();
      this.searchDone = false
      this.nextSearch = false
      this.totalPages = locations.length
      this.status = "Rendering..."
      this.percentage = 75;
      if (this.totalPages > 1) {
        const cfi = this.epub.locations.cfiFromPercentage(page / this.totalPages);
        this.rendition.display(cfi);
      } else {
        this.rendition.display(1);
      }
    });

    this.rendition.on("layout", (layout) => {
      let viewer = document.getElementById("viewer");
      if (layout.spread) {
        viewer.classList.remove('single');
      } else {
        viewer.classList.add('single');
      }
    });

    this.rendition.on("rendered", () => {
    });

    this.rendition.on("selected", (cfiRange) => {
    });

    this.rendition.on("relocated", (location) => {
      this.location = location
      const range = this.rendition.getRange(location.start.cfi)
      if (range) {
        this.searchText = this.rendition.getRange(location.start.cfi).startContainer.data
      }
      if (!this.searchDone) {
        this.status = "Navigating..."
        this.percentage = 90
        this.gotoPageByLineContent(lineContent)
      }
      this.placeBookmarks()
    });
  }

  private makeRangeCfi(a, b) {
    const CFI = new ePub.CFI()
    const start = CFI.parse(a), end = CFI.parse(b)
    const cfi = {
      range: true,
      base: start.base,
      path: {
        steps: [],
        terminal: null
      },
      start: start.path,
      end: end.path
    }
    const len = cfi.start.steps.length
    for (let i = 0; i < len; i++) {
      if (CFI.equalStep(cfi.start.steps[i], cfi.end.steps[i])) {
        if (i === len - 1) {
          if (cfi.start.terminal === cfi.end.terminal) {
            cfi.path.steps.push(cfi.start.steps[i]);
            cfi.range = false;
          }
        } else {
          cfi.path.steps.push(cfi.start.steps[i]);
        }
      } else {
        break;
      }
    }
    cfi.start.steps = cfi.start.steps.slice(cfi.path.steps.length)
    cfi.end.steps = cfi.end.steps.slice(cfi.path.steps.length)

    return 'epubcfi(' + CFI.segmentString(cfi.base)
      + '!' + CFI.segmentString(cfi.path)
      + ',' + CFI.segmentString(cfi.start)
      + ',' + CFI.segmentString(cfi.end)
      + ')';
  }

  private gotoPageByLineContent(searchContent) {
    const [a, b] = [this.location.start.cfi, this.location.end.cfi]
    const range = this.rendition.getRange(this.makeRangeCfi(a, b))
    if (range && range.toString().includes(searchContent)) {
      this.percentage = 100
      this.searchDone = true
    } else if (range && !this.nextSearch) {
      this.nextPage()
      this.nextSearch = true
    } else {
      this.percentage = 100
      this.searchDone = true
    }
  }

  private placeBookmarks() {
    if (this.location) {
      const locationCfi = this.location.start.cfi;
      const spineItem = this.rendition.book.spine.get(locationCfi);
      this.bookmarks.forEach(bm => {
        if (bm.lineContent) {
          spineItem.find(bm.lineContent).map(s => {
            let excerpt = s.excerpt
            if (excerpt.indexOf('...') === 0) {
              excerpt = excerpt.substring(3)
            }
            if (excerpt.indexOf('...') === (excerpt.length - 3)) {
              excerpt = excerpt.substring(0, excerpt.length - 3)
            }
            if (bm.lineContent.includes(excerpt)) {
              this.rendition.annotations.mark(s.cfi)
            } else {
              this.rendition.annotations.remove(s.cfi, 'mark')
            }
          })
        }
      })
    }
  }

  nextPage() {
    this.epub.package.metadata.direction === "rtl" ? this.rendition.prev() : this.rendition.next();
  }

  previousPage() {
    if (this.location.start.percentage > 0) {
      this.epub.package.metadata.direction === "rtl" ? this.rendition.next() : this.rendition.prev();
    }
  }

  setFont(font: string) {
    this.rendition.themes.fontSize(font);
  }

  ngOnDestroy() {
    this.epubSub.unsubscribe()
    this.placeBookmarkSub.unsubscribe()

    if (this.location) {
      this.onDocumentClose.next({page: this.location.start.location, searchText: this.searchText, bookmarks: this.newBookmarks})
    }

    if (this.epub) {
      this.epub.destroy()
    }
  }
}

