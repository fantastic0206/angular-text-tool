import { BooksModalComponent } from './../books-modal/books-modal.component';
import {
  AfterViewInit,
  HostListener,
  Component,
  ViewChild
} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { FileRepository } from './../../../infrastructure/repositories/file.repository';
import {ShortcutInput, AllowIn} from 'ng-keyboard-shortcuts';
import { GapiSession } from 'src/infrastructure/sessions/gapi.session';
import { uniq, last } from 'lodash';
import { MatSnackBar } from '@angular/material';
import {MatDialog} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import {DialogService} from './../../services/dialog.service';
import {DialogData} from './../../shared/dialog-data';
import {Title} from "@angular/platform-browser";
import {EpubService} from "../../shared/services/epub.service";
import {EpubViewerComponent} from "../../shared/viewer/epubViewer.component";
import {isMobile} from "../../shared/utils/helper";

const Token = 16908545;

class RedoUndo<T> {
  past: T[] = [];
  future: T[] = [];
}

const redoUndo = new RedoUndo();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('epubViewer', {static: false})
  epubViewer: EpubViewerComponent;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.keyCode == 188) {
      event.preventDefault();
      this.bookMarkLineBWD()
    }
    if (event.ctrlKey && event.keyCode == 190) {
      event.preventDefault();
      this.bookMarkLineFWD();
    }
  }
  public isMobile: boolean = isMobile()
  public epub: any = null;
  public isSave: boolean = false;
  public isLoggedIn: boolean;
  public user: gapi.auth2.BasicProfile;
  public fileSaveTime: any;
  public data: any = '';
  public fileId;
  public code;
  public isHtml: any = 'null';
  public authInstance: gapi.auth2.GoogleAuth;
  public editor: any;
  public evalution: boolean = false;
  public minisidebar: boolean = false;
  public loading: boolean = false;
  public loading2: boolean = false;
  public title = 'untitled';
  public thememode: boolean = true;
  public color = '#808080';
  public infoBar: boolean = false;
  public wrapdata: boolean = false;
  public readonly: boolean = false;
  public cusurPointer: any;
  public usersaveTime: string = '';
  public index: any = 0;
  public fontSize;
  public fontSizeArray = [8, 10, 12, 14, 16, 20, 30, 45];
  public homeSelected = true;
  public epubMode = false;
  public extraSelected;
  public listenSelected;
  public getElementsByClassName;
  public resp;
  public shortlink: any;

  shortcuts: ShortcutInput[] = [];
  public editorOptions: any;
  public infoData: any = {
    lineNumber: 0,
    column: 0
  }
  public editorLineInfo: any = {
    fileId: '',
    userId: '',
    lineNumber: 1,
    column: 1
  }

  public bookmarksLIne: any = []
  public selection: any = 0;
  public totalLine;
  public totalChar: any = 0;
  public selectedLine: any = 0;
  public tabCount: any = 0;
  public wordCount: any = 0;

  constructor(
    private aroute: ActivatedRoute,
    private titleService: Title,
    private epubService: EpubService,
    private fileRepository: FileRepository,
    public gapiSession: GapiSession,
    private router: Router,
    private snackBar: MatSnackBar,
    // private http: HttpClient,
    public dialog: MatDialog,
    private http: HttpClient,
    private dialogService: DialogService
  ) {
    if (this.router.url == '/editor') {
      let data = localStorage.getItem('editor');
      if (data) {
        sessionStorage.clear();
        localStorage.removeItem('editor');
      }
      setTimeout(function() {
        document.getElementById("save_svg").style.display = "none";
        document.getElementById("undo_img").style.display = "none";
        document.getElementById("redo_img").style.display = "none";
        document.getElementById("wrap_img").style.display = "none";
        document.getElementById("search_img").style.display = "none";
        document.getElementById("increase_img").style.display = "none";
        document.getElementById("decrease_img").style.display = "none";
        document.getElementById("epub_img").style.display = "none";
      }, 200);
      setTimeout(function() {
        document.getElementById("save_svg").style.display = "block";
        document.getElementById("save_img").style.display = "none";
      }, 4500);
      setTimeout(function() {
        document.getElementById("undo_svg").style.display = "none";
        document.getElementById("undo_img").style.display = "block";
      }, 6500);
      setTimeout(function() {
        document.getElementById("redo_svg").style.display = "none";
        document.getElementById("redo_img").style.display = "block";
        document.getElementById("undo_svg").style.display = "block";
        document.getElementById("undo_img").style.display = "none";
      }, 8500);
      setTimeout(function() {
        document.getElementById("wrap_svg").style.display = "none";
        document.getElementById("wrap_img").style.display = "block";
        document.getElementById("redo_svg").style.display = "block";
        document.getElementById("redo_img").style.display = "none";
      }, 10500);
      setTimeout(function() {
        document.getElementById("search_svg").style.display = "none";
        document.getElementById("search_img").style.display = "block";
        document.getElementById("wrap_svg").style.display = "block";
        document.getElementById("wrap_img").style.display = "none";
      }, 12500);
      setTimeout(function() {
        document.getElementById("increase_svg").style.display = "none";
        document.getElementById("increase_img").style.display = "block";
        document.getElementById("search_svg").style.display = "block";
        document.getElementById("search_img").style.display = "none";
      }, 14500);
      setTimeout(function() {
        document.getElementById("decrease_svg").style.display = "none";
        document.getElementById("decrease_img").style.display = "block";
        document.getElementById("increase_svg").style.display = "block";
        document.getElementById("increase_img").style.display = "none";
      }, 16500);
      setTimeout(function() {
        document.getElementById("epub_svg").style.display = "none";
        document.getElementById("epub_img").style.display = "block";
        document.getElementById("decrease_svg").style.display = "block";
        document.getElementById("decrease_img").style.display = "none";
      }, 18500);
      setTimeout(function() {
        document.getElementById("epub_svg").style.display = "block";
        document.getElementById("epub_img").style.display = "none";
      }, 20500);
    }

    this.isLoggedIn = this.gapiSession.isSignedIn;
    if (this.isLoggedIn) {
      let data = JSON.parse(localStorage.getItem('users'));
      if (data) {
        let data2 = data.slice(-1);
        this.editorLineInfo.userId = data2[0].Id;
      }
    }
    if (!this.evalution) {
      this.editorOptions = {
        theme: 'vs-light',
        fontSize: 16,
        wordBasedSuggestions: false,
        minimap: {
          enabled: false
        },
      }
    } else {
      this.editorOptions = {
        theme: 'vs-dark',
        fontSize: 16,
        wordBasedSuggestions: false,
        minimap: {
          enabled: false
        },
      }
    }
  }

  /**
   * Read Only Mode
   */
  readOnly() {
    if (!this.readonly) {
      this.readonly = true;
      let newEditorOptions = {
        readOnly: true
      }
      this.editorOptions = { ...this.editorOptions, ...newEditorOptions };
      this.fileSaveTime  = 'Read Only';
    } else {
      this.readonly = false;
      let newEditorOptions = {
        readOnly: false
      }
      this.editorOptions = { ...this.editorOptions, ...newEditorOptions };
      this.fileSaveTime  = '';
    }
  }

  /**
   * Word Wrapping
   */
  wrapData() {
    const {lineNumber} = this.editor.getPosition();
    if (!this.wrapdata) {
      this.wrapdata = true;
      let newEditorOptions = {
        wordWrap: 'on',
        wrappingIndent: 'same',
      }
      this.editorOptions = { ...this.editorOptions, ...newEditorOptions };
    } else {
      this.wrapdata = false;
      let newEditorOptions = {
        wordWrap: 'off',
        wrappingIndent: 'none',
      }
      this.editorOptions = { ...this.editorOptions, ...newEditorOptions };
    }

    setTimeout(() => {
      this.editor.setPosition({ column: 1, lineNumber });
      this.editor.revealLine(lineNumber)
    })
  }

  /**
    * Save Font Size
    */
  saveFont(size) {
    if (this.isLoggedIn) {
      let data = JSON.parse(localStorage.getItem('users'));
      if (data) {
        let data2 = data.slice(-1);
        let userId = data2[0].Id;
        this.fileRepository.insertFontSize(userId, size).toPromise();
      }
    }
  }

  /**
  * Save Template
  */
  saveTemplate(theme) {
    if (this.isLoggedIn) {
      let data = JSON.parse(localStorage.getItem('users'));
      if (data) {
        let data2 = data.slice(-1);
        let userId = data2[0].Id;
        this.fileRepository.insertTheme(userId, theme).toPromise();
      }
    }
  }

  /**
   * toggle editor side bar
   */
  removeMinibar() {
    if (this.minisidebar == false) {
      this.minisidebar = true;
      let newEditorOptions = {
        minimap: {
          enabled: true
        }
      }
      this.editorOptions = { ...this.editorOptions, ...newEditorOptions };
    } else {
      this.minisidebar = false;
      let newEditorOptions = {
        minimap: {
          enabled: false
        }
      }
      this.editorOptions = { ...this.editorOptions, ...newEditorOptions };
    }
  }

  /**
   * Change theme
   * @param editor
   */
  changeThemeMode() {
    this.thememode = !this.thememode;
    this.fileRepository.checkThemeMode();
    var toolbar = document.getElementsByClassName('mat-toolbar')[0];
    if (this.thememode) {
      toolbar.classList.remove("proper");
      let newEditorOptions = {
        theme: 'vs-light',
      }
      this.editorOptions = { ...this.editorOptions, ...newEditorOptions };
      this.saveTemplate('vs-light');
    } else {
      toolbar.classList.add("proper");
      let newEditorOptions = {
        theme: 'vs-dark',
      }
      this.editorOptions = { ...this.editorOptions, ...newEditorOptions };
      this.saveTemplate('vs-dark');
    }
    this.gettingFileBookmark();
    this.addClassCurrentLine();
  }

  changeBookmark() {
    this.epubService.placeBookmark()
  }

  async onInitEditor(editor) {
    localStorage.setItem('bookmarks', '');
    // localStorage.setItem('currentLine', '')

    this.editor = editor;
    this.slashLine();
    //adding menu item for link context menu
    this.followLink(editor);

    if(this.isHtml == 'txt'){
       this.addDash(this.editor);
    }
    this.editor.onDidChangeCursorPosition(e => {
      this.manageInfo();
      this.addClassCurrentLine();
    });
  }

  onMouseHover(event) {
  }

  /***
   * Auto add dash on new line
   */
  addDash(editor) {
    editor.onDidType(text => {
      const bulletText = '-';

      const insertBullet = (pos) => {
        const range = new monaco.Range(pos.lineNumber, pos.column, pos.lineNumber, pos.column);
        editor.executeEdits('new-bullets', [{ identifier: 'new-bullet', range, text: bulletText, forceMoveMarkers: true }])
      }

      if (text === '\n') {
        const model = editor.getModel();
        const position = editor.getPosition();
        const prevLine = model.getLineContent(position.lineNumber - 1);
        prevLine.trim().indexOf(bulletText) === 0 && insertBullet(position);
      }
    });
  }

  /***
   * Slash - make line color green for plaintext
   */
  slashLine() {
    monaco.languages.setMonarchTokensProvider('plaintext', {
      tokenizer: {
        whitespace: [
          [/[ \t\r\n]+/, ''],
          [/^\/.*$/, 'comment'],
        ],
      },
    });
  }

  /***
  * Adding menu attribute to link context menu
  */

  followLink(editor) {


    monaco.languages.setLanguageConfiguration('plaintext', {
      // Allow http:// to be part of a word.
      wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\=\+\{\}\\\|\;\'\"\,\<\>\?\s]+)/g,
    })

  var linkCondition = editor.createContextKey('linkCondition',false );

    editor.addAction({
      // An unique identifier of the contributed action.
      id: 'link-context-id',

      // A label of the action that will be presented to the user.
      label: 'Follow the link',

      // A precondition for this action.
      precondition: 'linkCondition',

      // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
      keybindingContext: null,

      contextMenuGroupId: 'navigation',

      contextMenuOrder: 1.5,

      // Method that will be executed when the action is triggered.
      // @param editor The editor instance is passed in as a convinience
      run: function (ed) {
        window.open(editor.getModel().getWordAtPosition(ed.getPosition()).word, '_blank');
        return null;
      }
    });

    const contextmenu = editor.getContribution('editor.contrib.contextmenu')
    const realMethod = contextmenu._onContextMenu;
    contextmenu._onContextMenu = function (e) {
      // console.log(e.target.element.className);
      var a = e.target.element.className;
      if (a.includes('detected-link')) {
        linkCondition.set(true);
      } else {
        linkCondition.set(false);
      }
      realMethod.apply(contextmenu, arguments);
    };
  }

  /**
   * Redirect to proper editor
   */
  propereditor() {
    let url = this.router.createUrlTree(['/proper'])
    window.open(url.toString(), '_blank')
  }

  /**
   * Manage the redo and undo history
   * @param event
   */
  onKeydown(event) {
    redoUndo.past = [...redoUndo.past, this.data];
  }

  /** Manage editor info */
  manageInfo() {
    if (this.editor) {
      this.fileRepository.onMoveCursorOnNotepage();
      this.cusurPointer = this.editor.getPosition();
      this.infoData = { ...this.editor.getPosition(), ...this.editor.getSelection() };
      let selectedText: string = this.editor.getModel().getValueInRange(this.editor.getSelection());
      let data1 = this.editor.getModel().getLineContent(this.editor.getPosition().lineNumber);
      let arr_str2 = data1.match(/^[\s]*/g);
      let count3 = arr_str2[0].length;
      if (count3 >= 4) {
        let tabs: any = count3 / 4;
        this.tabCount = parseInt(tabs);
      } else {
        this.tabCount = 0;
      }
      this.selection = selectedText.length;
      let dataline = selectedText.split(/\r\n|\r|\n/);
      if (this.selection > 0) {
        this.selectedLine = dataline.length;
      }
      this.totalLine = this.editor.getModel().getLineCount();
      this.wordCount = this.countWords(this.data);
      let withoutSpace = this.data.replace(/ /g, "");
      this.totalChar = withoutSpace.length;
    }
  }

  /**
   * Get word count
   * @param str
   */
  countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    str = str.replace(/\n /, "\n");
    return str.split(' ').length;
  }

  /**
   * Toogle status bar
   */
  statusInfo() {
    this.infoBar = !this.infoBar;
  }

  /**
   * Undo content
   */
  undo() {
    if (redoUndo.past.length === 0) return;
    const lastState = last(redoUndo.past);
    redoUndo.past = redoUndo.past.slice(0, -1);
    redoUndo.future = [...redoUndo.future, this.data];
    this.data = lastState;
  }

  /**
   * Redo content
   */
  redo() {
    const lastState = last(redoUndo.future);
    if (!lastState) return;
    redoUndo.future = redoUndo.future.slice(0, -1);
    redoUndo.past = [...redoUndo.past, this.data];
    this.data = lastState;
  }

  /**
   * Editor find widget
   */
  find() {
    if (this.editor) {
      this.editor.trigger('', 'actions.find');
    }
  }

  /**
   * save file content
   * Short code Ctrl + s
   */
  ngAfterViewInit(): void {
    this.shortcuts.push(
      {
        key: "ctrl + s",
        preventDefault: true,
        allowIn: [AllowIn.Textarea, AllowIn.Input],
        command: e => this.save()
      },
      {
        key: "ctrl + b",
        preventDefault: true,
        allowIn: [AllowIn.Textarea, AllowIn.Input],
        command: e => this.bookMarkLine()
      },
    );

  }

  nextItem(): void {
    this.index = this.index + 1; // increase i by one
    this.index = this.index % this.bookmarksLIne.length; // if we've gone too high, start from `0` again
    return this.bookmarksLIne[this.index]; // give us back the item of where we are now
  }

  prevItem(): void {
    if (this.index === 0) { // i would become 0
      this.index = this.bookmarksLIne.length; // so put it at the other end of the array
    }
    this.index = this.index - 1; // decrease by
    return this.bookmarksLIne[this.index];
  }

  /**
   * Increase font size of the editor
   */
  sizeUp() {
    let defaultSize = this.editorOptions.fontSize;
    if (defaultSize && defaultSize < 45) {
      let currentArrayId = this.fontSizeArray.indexOf(defaultSize);
      let newFontSize = this.fontSizeArray[currentArrayId + 1];
      let newEditorOptions = { fontSize: newFontSize }
      this.editorOptions = { ...this.editorOptions, ...newEditorOptions };
      this.saveFont(newFontSize);
    }
    if (this.epubViewer) {
      this.epubViewer.setFont(`${this.editorOptions.fontSize}px`);
    }
  }

  /**
   * Descrease font size of the editor
   */
  sizeDown() {
    let defaultSize = this.editorOptions.fontSize;
    if (defaultSize && defaultSize > 8) {
      let currentArrayId = this.fontSizeArray.indexOf(defaultSize);
      let newFontSize = this.fontSizeArray[currentArrayId - 1];
      let newEditorOptions = { fontSize: newFontSize }
      this.editorOptions = { ...this.editorOptions, ...newEditorOptions };
      this.saveFont(newFontSize);
    }
    if (this.epubViewer) {
      this.epubViewer.setFont(`${this.editorOptions.fontSize}px`);
    }
  }

  // bookmark next
  bookMarkLineFWD() {
    this.editor.setPosition({ column: 1, lineNumber: this.nextItem() });
    this.editor.focus();
  }

  /**
   * Bookmark prev
   */
  bookMarkLineBWD() {
    this.editor.setPosition({ column: 1, lineNumber: this.prevItem() });
    this.editor.focus();
  }

  /**
   * Save line bookmark
   */
  bookMarkLine() {
    let position = this.editor.getPosition();
    if (!this.bookmarksLIne.includes(position.lineNumber)) {
      this.bookmarksLIne.push(position.lineNumber);
      this.bookmarksLIne.sort(function (a, b) { return a - b });
      this.fileRepository.postBookmark(position.lineNumber, this.fileId).toPromise();
      var decor = this.editor.deltaDecorations([], [
        { range: new monaco.Range(position.lineNumber, 1, position.lineNumber, 1), options: { isWholeLine: true, linesDecorationsClassName: 'bookmarkDecoration' } },
      ]);
      var bookmarks = localStorage.getItem('bookmarks');
      if (bookmarks == null || bookmarks == '') {
        decorations = {};
      } else {
        var decorations = JSON.parse(bookmarks);
      }
      var name = 'decor-' + position.lineNumber;
      decorations[name] = decor;

      localStorage.setItem('bookmarks', JSON.stringify(decorations));
    } else {
      var decorations = JSON.parse(localStorage.getItem('bookmarks'));
      var dec_id = decorations['decor-' + position.lineNumber];
      this.editor.deltaDecorations(dec_id, [{ range: new monaco.Range(position.lineNumber, 1, position.lineNumber, 1), options: {} }]);

      this.bookmarksLIne.splice(this.bookmarksLIne.indexOf(position.lineNumber), 1);
      this.fileRepository.deleteBookmark(this.fileId, position.lineNumber).toPromise();
    }
  }

  /**
   * Auto save Doc
   */
  callOnInterval() {
    if (this.evalution == false) {
      let element: HTMLElement = document.getElementById('saveFile') as HTMLElement;
      if (element) {
        element.click();
      }
      let d = new Date();
      let n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
      this.fileSaveTime = 'Auto-saved ' + n;
    }
  }

  /**
   * Open fresh editor
   * for create file
   */
  openNewEditor() {
    if (!this.isLoggedIn) {
      this.snackBar.open('User signin required', '', { duration: 3000, verticalPosition: 'bottom' });
      return
    }
    localStorage.setItem('editor', 'new');
    window.open('/editor', '_blank');
  }

  /**
   * Save the current line
   * @param position
   */
  saveCurrentLine(position) {
    this.editorLineInfo.lineNumber = position.lineNumber;
    this.editorLineInfo.column = position.column;
    this.editorLineInfo.fileId = this.fileId;
    let line = localStorage.getItem('currentLine');
    if (line != null && line != '') {
      let linenumbers = document.getElementsByClassName('line-numbers');
      let currentLineDiv = linenumbers[Number(line) - 1];
      if (currentLineDiv) {
        currentLineDiv.parentElement.classList.remove("currentLineDecoration")
      }
    }

    localStorage.setItem('currentLine', position.lineNumber);

    let linenumbers = document.getElementsByClassName('line-numbers');
    let currentLineDiv = linenumbers[position.lineNumber - 1];
    if (currentLineDiv) {
      currentLineDiv.parentElement.classList.add("currentLineDecoration");
    }

    this.fileRepository.postCurrentLIne(this.editorLineInfo).subscribe((res: any) => {
      if (res.data.error) {
        this.fileRepository.updateCurrentLIne(this.editorLineInfo).toPromise();
      }

    });
  }

  addClassCurrentLine() {
    let line = localStorage.getItem('currentLine');
    setTimeout(() => {
      if (line != null && line != '') {
        let linenumbers = document.getElementsByClassName('line-numbers');
        let currentLineDiv = linenumbers[Number(line) - 1];
        if (currentLineDiv) {
          currentLineDiv.parentElement.classList.add("currentLineDecoration");
        }
      }
    }, 10);
  }

  generateShortlink(){
    let fileData = sessionStorage.getItem('fileData');
    let fileId: any = sessionStorage.getItem('id');
    if(fileData == null && fileId != null){
      let obj: any = { "ids": [fileId]};
      let urlparams = JSON.stringify(obj);
      var somet = this.router.createUrlTree(['/editor'], { queryParams: { state: urlparams } });
      var link = 'https://urls.quickpad.io/yourls-api.php?action=shorturl&format=json&url=https://quickpad.io'+ somet;
      this.http.get(link).subscribe(data => {this.shortlink = data;});
    } else if(fileData != null){
      var somet = this.router.createUrlTree(['/editor'], { queryParams: { state: fileData } });
      var link = 'https://urls.quickpad.io/yourls-api.php?action=shorturl&format=json&url=https://quickpad.io'+ somet;
      this.http.get(link).subscribe(data => {this.shortlink = data; });
    }
  }

  /**
   * Create new drive file
   */
  async createNewTextFile(position) {
    await this.fileRepository.getfileNewtitle('new');
    let decodeHtml = this.decodeEntities(this.data);
    this.fileRepository.createDriveFIle(decodeHtml).subscribe((res: any) => {
      if (res) {
        this.getCreatedfile(res.id, position);
        sessionStorage.removeItem('parentid');
        sessionStorage.removeItem('newfiletitle');
        sessionStorage.removeItem('newfileExt');
      }
    });
    setTimeout(() => {
      this.loading2 = false;
    }, 10000);
  }

  /**
   * New file data
   * @param id
   */
  async getCreatedfile(id, position) {
    const res = await this.fileRepository.getFileById(id);
    const res2 = await this.fileRepository.getFileDetails(id);
    if (res) {
      // this.data = res.body;
      setTimeout(() => {
        this.loading2 = false;
      }, 100);
      sessionStorage.setItem('id', id);
      this.fileId = id;
      this.saveCurrentLine(position);
      this.fileRepository.getfileMetadata();
    }
    if (res2) {
      this.isHtml = res2.result.fileExtension;
      this.languageType(this.isHtml, position);
    }
  }

  /**
   * save google drive file data
   */
  async save() {
    setTimeout(() => {
      this.generateShortlink();
    }, 3000);


    await this.fileRepository.getfileNewtitle('checkTitle');
    if (!this.isSave) {
      return
    }
    let position = this.editor.getPosition();
    if (position) {
      setTimeout(() => {
        this.loading2 = true;
      }, 200);
      if (!this.isLoggedIn) {
        this.snackBar.open('User signin required', '', { duration: 3000, verticalPosition: 'bottom' });
        return
      }

      if (!this.fileId) { // If creating new file
        this.createNewTextFile(position);
        this.getfilesaveTime();
        return
      } else {
        this.editor.setPosition({ column: position.column, lineNumber: position.lineNumber });
        this.editor.focus();
        await this.fileRepository.getfileNewtitle('update');
      }

      const TYPES = ['html', 'css', 'php', 'md', 'txt', 'java', 'class', 'c', 'py', 'cpp', 'cs', 'vb', 'js', 'sql', 'r'];
      if (TYPES.includes(this.isHtml)) {
        let decodeHtml = this.decodeEntities(this.data);
        const data = await this.fileRepository.saveGoogleFile(this.fileId, decodeHtml);
        setTimeout(() => {
          this.loading2 = false;
        }, 1000);
      } else {
        const data = await this.fileRepository.saveGoogleExportFile(this.fileId, this.data);
        setTimeout(() => {
          this.loading2 = false;
        }, 1000);
      }
      this.saveCurrentLine(position);
      this.getfilesaveTime();
    }
  }

  /** get file save time */
  getfilesaveTime() {
    this.usersaveTime = '';
    let d = new Date();
    let n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
    this.fileSaveTime = 'Saved ' + n;
    this.color = '#808080';
    setTimeout(() => {
      this.usersaveTime = 'saveTime';
    }, 100);
  }

  getfileLineNumber(data) {
    this.usersaveTime = '';
    this.fileSaveTime = 'Loaded (#' + data + ')';
    this.color = '#808080';
    setTimeout(() => {
      this.usersaveTime = 'saveTime';
    }, 100);
  }

  gettingFileBookmark() {
    this.fileRepository.getBookmark(this.fileId).subscribe((res: any) => {
      if (res.data.Items && res.data.Items.length > 0) {
        setTimeout(() => {
          let decorations = {};
          res.data.Items.forEach(item => {
            let line = parseInt(item.LineNo);
            this.bookmarksLIne.push(line);
            var decor = this.editor.deltaDecorations([], [{ range: new monaco.Range(line, 1, line, 1), options: { isWholeLine: true, linesDecorationsClassName: 'bookmarkDecoration' } },]);
            var name = 'decor-' + line;
            decorations[name] = decor;
          });
          localStorage.setItem('bookmarks', JSON.stringify(decorations));
          this.bookmarksLIne.sort(function (a, b) { return a - b });
        }, 100);
      }
    });
  }

  async ngOnInit() {
    // this.openModal();
    /**
    * Auto save drive file
    */
    this.loading = true;
    setInterval(() => {
      this.callOnInterval();
    }, 300000);

   this.generateShortlink();
      if (this.aroute.snapshot.queryParams.state) {
      const param = this.aroute.snapshot.queryParams.state;
      let paramdata: any = JSON.parse(param);
      let fileid: any = sessionStorage.getItem('id');
      if (!paramdata.folderId && !fileid) {
        sessionStorage.setItem('fileData', param);
        sessionStorage.removeItem('id');
      } else {
        sessionStorage.setItem('fileData', param);
        sessionStorage.removeItem('id');
      }

    }

    if (!this.isLoggedIn) {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
      return;
    }
    let strorage = sessionStorage.getItem('fileData');
    let strorageid = sessionStorage.getItem('id');
    if (strorageid) {
      const res = await this.fileRepository.getFileById(strorageid);
      const res2 = await this.fileRepository.getFileDetails(strorageid);
      if (res) {
        this.fileId = strorageid;
        this.editorLineInfo.fileId = this.fileId;
        this.data = res.body;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
      if (res2) {
        this.isHtml = res2.result.fileExtension;
        this.languageType(this.isHtml, null);
      }
    }
    if (strorage) {
      const param = JSON.parse(strorage);

      /**
       * Api for get text document
       * Content
       */
      if (param.exportIds) {
        this.isHtml = 'null';
        this.fileId = param.exportIds[0];
        this.editorLineInfo.fileId = this.fileId;
        const res = await this.fileRepository.getFileByExportId(param.exportIds[0]);
        if (res) {
          this.data = res.body;
        }
      }

      /**
       * Api for get Other docs
       * Content
       */
      if (param.ids) {
        this.fileId = param.ids[0];
        this.editorLineInfo.fileId = this.fileId;
        const res = await this.fileRepository.getFileById(param.ids[0]);
        if (res) {
          this.data = res.body;
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        }

        /**
         * Api for check Document type
         */
        const details = await this.fileRepository.getFileDetails(param.ids[0]);
        if (details.result) {
          if (details.result.name) {
            let hascheckType = details.result.name.split(".");
            let hasMatch = hascheckType[hascheckType.length - 1];
            if (hasMatch) {
              this.isHtml = hasMatch;
              this.languageType(this.isHtml, null);
            }
          }
        }
      }
      if (param.folderId) {
        if (strorageid) {
          const res = await this.fileRepository.getFileById(strorageid);
          const res2 = await this.fileRepository.getFileDetails(strorageid);
          if (res) {
            this.fileId = strorageid;
            this.editorLineInfo.fileId = this.fileId;
            this.data = res.body;
          }
          if (res2) {
            this.isHtml = res2.result.fileExtension;
            this.languageType(this.isHtml, null);
          }
        } else {
          sessionStorage.setItem('parentid', param.folderId);
        }
      }
    }

    /** Check current line of editor */
    this.fileRepository.getCurrentLIne(this.editorLineInfo).subscribe((res: any) => {
      if (res.data.error) {
        this.editorLineInfo.lineNumber = 1;
      } else {
        this.editorLineInfo.lineNumber = parseInt(res.data.LineNo);
        this.getfileLineNumber(res.data.LineNo);
      }
      if(res.data.LineNo != null && res.data.LineNo != ''){
        setTimeout(() => {
          let linenumbers = document.getElementsByClassName('line-numbers');
          let currentLineDiv = linenumbers[parseInt(res.data.LineNo) - 1];
          if (currentLineDiv) {
            currentLineDiv.parentElement.classList.add("currentLineDecoration");
          }
          localStorage.setItem('currentLine', res.data.LineNo);
          this.editor.setPosition({ column: this.editorLineInfo.column, lineNumber: this.editorLineInfo.lineNumber });
          this.editor.focus();
        }, 1000);
      }
    });

    this.gettingFileBookmark();

    /** Get font size for current user */
    this.fileRepository.getFontSize(this.editorLineInfo.userId).subscribe((res: any) => {
      if (!res.data.error) {
        const newEditorOptions = {
          fontSize: parseInt(res.data.FontSize),
        }
        this.editorOptions = { ...this.editorOptions, ...newEditorOptions };
      }
    });

    /** Get theme for current user */
    this.fileRepository.getTheme(this.editorLineInfo.userId).subscribe((res: any) => {
      if (!res.data.error) {
        const toolbar = document.getElementsByClassName('mat-toolbar')[0];
        if (res.data.Theme === 'vs-dark') {
          this.thememode = false;
          toolbar.classList.add("proper");
        } else {
          this.thememode = true;
          toolbar.classList.remove("proper");
        }
        const newEditorOptions = {
          theme: res.data.Theme,
        }
        this.editorOptions = { ...this.editorOptions, ...newEditorOptions };
      }

    });

    setTimeout(() => {
      this.loading = false;
    }, 3000);

    /**
     * Focus on Editor *********************************
     */
    this.fileRepository.movetoNotepad.subscribe((res: any) => {
      this.save();
    });
    this.fileRepository.getFileTitle.subscribe((res: any) => {
      if (res === 'Focus') {
        let position = this.editor.getPosition();
        setTimeout(() => {
          this.editor.setPosition({ column: position.column, lineNumber: position.lineNumber });
          this.editor.focus();
        }, 200);
      }
    });

    this.fileRepository.checkFileTitle.subscribe((res: any) => {
      this.isSave = true;
    });

    this.fileRepository.getfileExt.subscribe((res: any) => {
      let isHtmlExt = res.replace(".", "");
      if (this.isHtml !== isHtmlExt) {
        this.isHtml = isHtmlExt;
        this.languageType(this.isHtml, null);
      }

    });

  }

  /**
   * Set language type for editor
   * @param ext
   */
  languageType(ext, position) {
    let editorOption = { language: 'text/html' };
    if (ext === 'css') {
      editorOption = { language: 'text/css' };
    } else if (ext === 'js') {
      editorOption = { language: 'text/javascript' };
    } else if (ext === 'php') {
      editorOption = { language: 'php' };
    } else if (ext === 'java') {
      editorOption = { language: 'java' };
    } else if (ext === 'md') {
      editorOption = { language: 'markdown' };
    } else if (ext === 'sql') {
      editorOption = { language: 'sql' };
    } else if (ext === 'r') {
      editorOption = { language: 'r' };
    } else if (ext === 'vb') {
      editorOption = { language: 'vb' };
    } else if (ext === 'cs') {
      editorOption = { language: 'text/x-c' };
    } else if (ext === 'c') {
      editorOption = { language: 'c' };
    } else if (ext === 'cpp') {
      editorOption = { language: 'cpp' };
    } else if (ext === 'py') {
      editorOption = { language: 'python' };
    } else if (ext === 'class') {
      editorOption = { language: 'class' };
    } else if (ext === 'txt') {
      editorOption = { language: 'text/plain' };
    }

    this.editorOptions = { ...this.editorOptions, ...editorOption };

    if (position) {
      setTimeout(() => {
        this.editor.setPosition({ column: position.column, lineNumber: position.lineNumber });
        this.editor.focus();
      }, 200);
    }

  }

  /***
 * Decode html entities
 */
  decodeEntities(str) {
    const element = document.createElement('div');
    if (str && typeof str === 'string') {
      str = str.replace(/<\s*\/?br\s*[\/]?>/gi, '\n');
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }
    return str;
  }

  home(): void {
    this.homeSelected = true;
    this.extraSelected = false;
    this.listenSelected = false;
  }

  extra(): void {
    this.homeSelected = false;
    this.extraSelected = true;
    this.listenSelected = false;
  }

  listen(): void {
    this.homeSelected = false;
    this.extraSelected = false;
    this.listenSelected = true;
  }
  public openModal(){

    const dialogRef = this.dialog.open(BooksModalComponent,{
      // height: '90%',
      // width: '70%',
      panelClass: 'my-dialog',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog() {
    if(!this.shortlink || this.shortlink == '') {
      alert('Please save the document before generating URL');
      return false;
    }
    const dialogData: DialogData = {
      title: 'Here is your link',
      link: this.shortlink.shorturl,
      showOKBtn: true,
      showCancelBtn: true
    };

    const dialogRef = this.dialogService.openDialog(
      dialogData, {disableClose: true}
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User clicked OK');
      } else {
        console.log('User clicked Cancel');
      }
    });
  }

  private mapLineToPageNumber(lineNumber: number) {
    let lengthTillPosition = 0
    const lines = this.editor.getModel().getLinesContent()

    for (let idx = 0 ; idx < lines.length; idx ++) {
      if (idx <= lineNumber)  {
        lengthTillPosition += lines[idx].length;
      } else {
        break;
      }
    }

    return Math.ceil(lengthTillPosition / 1024);
  }

  onEpubReady() {
    this.epubViewer.setFont(`${this.editorOptions.fontSize}px`);
  }

  onEpubClose({page, searchText, bookmarks}) {
    setTimeout(() => {
      let lengthTillPosition = 0, lineNumber = 1;
      const lines = this.editor.getModel().getLinesContent();
      for (let idx = 0 ; idx < lines.length; idx ++) {
        if (lengthTillPosition < (page-1)*1024) {
          lengthTillPosition += lines[idx].length;
        } else {
          lineNumber = idx + 1;
          break;
        }
      }
      if (searchText) {
        const matches = this.editor.getModel().findMatches(searchText)
        if (matches.length > 0) {
          lineNumber = matches.map(m => m.range.startLineNumber).reduce((prev, curr) => {
            return (Math.abs(curr - lineNumber) < Math.abs(prev - lineNumber) ? curr : prev);
          });
        }
      }

      bookmarks.map(bm => {
        const matches = this.editor.getModel().findMatches(bm)
        if (matches.length > 0) {
          lineNumber = matches.map(m => m.range.startLineNumber).reduce((prev, curr) => {
            return (Math.abs(curr - lineNumber) < Math.abs(prev - lineNumber) ? curr : prev);
          });
          this.fileRepository.postBookmark(lineNumber, this.fileId).subscribe(() => {
            this.gettingFileBookmark();
          });
        }
      })

      this.editor.focus();
      this.editor.setPosition({ column: 1, lineNumber });
      this.gettingFileBookmark();
      this.editor.revealRangeAtTop({startColumn: 1, startLineNumber: lineNumber, endColumn: 1, endLineNumber: lineNumber})
    }, 200);
  }

  switchMode() {
    this.epubMode = !this.epubMode;
    if (this.epubMode) {
      const {lineNumber} = this.editor.getPosition()
      const decorators = []
      let lengthTillPosition = 0
      const lines = this.editor.getModel().getLinesContent()
      lines.map((line, idx) => {
        const tokens = this.editor.getModel().getLineTokens(idx + 1);
        if (tokens._tokens[1] === Token) {
          decorators.push(idx);
        }
        if (idx <= lineNumber)  {
          lengthTillPosition += line.length;
        }
      });
      this.fileRepository.getBookmark(this.fileId).subscribe((res: any) => {
        const bookmarks = [];
        if (res.data.Items && res.data.Items.length > 0) {
          res.data.Items.map(item => {
            let line = parseInt(item.LineNo);
            if (!bookmarks.find(bm => bm.lineNumber === line-1)) {
              bookmarks.push({
                lineNumber: line,
                lineContent: lines[line-1]
              });
            }
          });
        }
        this.epubService.generate(this.titleService.getTitle(), this.data, decorators, bookmarks, Math.ceil(lengthTillPosition / 1024), lines[lineNumber]);
      })
    }
  }
}
