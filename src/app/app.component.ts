import { Component } from '@angular/core';
import { AppContext } from '../infrastructure/app.context';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quickPad';
  constructor(
    public matIconRegistry: MatIconRegistry,
    public domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "save",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/save.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "search",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/search.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "undo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/undo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "redo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/redo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "wrap",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/wrap.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "close",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/close.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "info",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/ellipsis.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "nightmode",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/moon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "daymode",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/sun.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "folder",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/folder.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "folder1",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/folder1.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "decrease",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/decrease.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "increase",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/increase.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "link",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/link.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "txt",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/txt.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "epub",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/epub.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "bookmark",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/bookmark.svg")
    );
  }
}
