import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Socket} from "ngx-socket-io";
import {Subscription} from "rxjs";

export class EpubStatus {
  status: string;
  data: any;
  page: number;
  error: any;
}

export class EpubBookmark {
  lineNumber?: number;
  lineContent: string;
}

@Injectable()
export class EpubService {
  epub = this.socket.fromEvent<EpubStatus>('epub');

  placeBookmarkEvent = new EventEmitter();

  constructor(private http: HttpClient, private socket: Socket) { }

  generate(title: string, content: string, decorators: any[], bookmarkLines: any[], page: number, lineContent: string) {
    this.socket.emit('generateEpub', {title, content, decorators, bookmarkLines, page, lineContent});
  }

  placeBookmark() {
    this.placeBookmarkEvent.emit()
  }
}
