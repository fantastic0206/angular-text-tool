import { GapiSession } from './../../../infrastructure/sessions/gapi.session';
import { FileRepository } from 'src/infrastructure/repositories/file.repository';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ɵConsole, Renderer2, ChangeDetectorRef } from "@angular/core";
import { BreadCrumbSession } from 'src/infrastructure/sessions/breadcrumb.session';
import { ShortcutInput, ShortcutEventOutput, KeyboardShortcutsComponent, AllowIn } from "ng-keyboard-shortcuts";
import { MatSnackBar } from '@angular/material/snack-bar';
import { cleanSession } from 'selenium-webdriver/safari';
import {Title} from "@angular/platform-browser";
import {MatDialog, MatDialogConfig} from "@angular/material";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu', { static: false }) menu: ElementRef;
  @ViewChild('filetitle', { static: false }) filetitle: ElementRef;
  @ViewChild('ext', { static: false }) ext: ElementRef;
  @ViewChild('fileExt', { static: false }) fileExt: ElementRef;

  public isLoggedIn: boolean;
  public user: gapi.auth2.BasicProfile;
  public title: any = 'Untitled';
  public title1: any = 'Untitled';
  public fileType = '.txt';
  public fileType1 = '.txt';
  public username;
  public filePath;
  public listfiles = null;
  public menuToggele: boolean = false;
  public projectTitle: any = '';
  public parentId: any;
  public currentFile: any;
  public loaderNew: boolean = false;
  public loaderFile: boolean = false;
  public changeFileName: any;
  public modelFIleName: boolean = false;
  public modelFIleExt: boolean = false;
  public newfileTitle: any = '';
  public pagehome: boolean = false;
  shortcuts: ShortcutInput[] = [];
  public evalution: boolean = false;
  public themeMode: boolean = false;
  public authorise: boolean = false;
  public attribute: any = 6;
  public inputClass: any = false;

  mySubscription: any;

  constructor(
    private titleService:Title,
    private gapiSession: GapiSession,
    private fileRepository: FileRepository,
    private aroute: ActivatedRoute,
    private BreadCrumbSession: BreadCrumbSession,
    private router: Router,
    private renderer: Renderer2,
    private _snackBar: MatSnackBar,
    public cdRef: ChangeDetectorRef
  ) {

    if (this.router.url.includes('/editor')) {
      let data = localStorage.getItem('editor');
      if (data) {
        sessionStorage.clear();
        localStorage.removeItem('editor');
      }
    } else {
      this.title = '';
      this.fileType = '';
      this.pagehome = true;
      this.evalution = false;
    }

  }


  /**
   * Tab shortcode
   * for open folder list
   */
  tabshortCode() {
    if (this.modelFIleName) {
      this.modelFIleName = !this.modelFIleName;
      this.fileExt.nativeElement.dispatchEvent(new MouseEvent('click'));

    } else if (this.modelFIleExt) {
      this.modelFIleExt = !this.modelFIleExt;
      let element: HTMLElement = document.getElementById('folderList') as HTMLElement;
      element.click();

    }
  }

  /**
   * Initialize the app once the view is loaded and configure editor
   * shortcuts commands and create metadata of file
   */
  async ngAfterViewInit() {

    // Set tab title on init
        setTimeout(() => {
        this.titleService.setTitle((document.getElementById("drivefileTitleId").innerText));
    }, 2000);

    let data = sessionStorage.getItem('fileData');
    this.shortcuts.push(
      {
        key: "tab",
        preventDefault: true,
        allowIn: [AllowIn.Textarea, AllowIn.Input],
        command: e => this.tabshortCode()
      },
      {
        key: "enter",
        preventDefault: false,
        allowIn: [AllowIn.Textarea, AllowIn.Input],
        command: e => this.moveToNotepad()
      },
      {
        key: "ctrl + o",
        preventDefault: true,
        allowIn: [AllowIn.Textarea, AllowIn.Input],
        command: e => this.fileRepository.getFile()
      }
    );

    if (!this.isLoggedIn) {
      this.authorise = true;
      this.cdRef.detectChanges();
    }

    this.fileRepository.createFileMeta.subscribe((res: any) => {
      this.getrootfiles();
      this.modelFIleName = false;
      this.modelFIleExt = false;
      this.menuToggele = false;
      this.listfiles = null;
      this.title = 'Untitled';
      this.fileType = 'txt';
      this.title1 = 'Untitled';
      this.fileType1 = 'txt';
      this.currentFile = '';
      this.filePath = '';
    });

    /**
     * Newly file details
     */
    let strorageid = sessionStorage.getItem('id');
    if (strorageid) {
      this.getDriveFiledetail(strorageid);
    }
  }

  /**
   * Close Model
   */
  closeModel() {
    sessionStorage.removeItem('fileData');
    window.open('http://hi.quickpad.io',"_self");
  }

  /**
   * Get root folder and files of user google drive
   */
  async getrootfiles() {
    this.listfiles = await this.fileRepository.getFiles('root');
    this.fileRepository.getFolderTitle('root').then((res) => {
      this.projectTitle = res;
    });
    this.parentId = 'root';
  }

  /**
   * Show menu and list of files/folders in dropdown
   */
  async showMenuList() {
    if (this.fileType1) {
      this.fileType = this.fileType1
    } else {
      this.fileType1 = this.fileType
    }
    if (this.title1) {
      this.title = this.title1;
    } else {
      this.title1 = this.title;
    }
    this.modelFIleName = false;
    this.modelFIleExt = false;
    this.loaderFile = true;
    this.menuToggele = true;
    this.fileRepository.getFolderTitle(this.parentId).then((res) => {
      this.projectTitle = res;
    });
    this.listfiles = await this.fileRepository.getFiles(this.parentId);
    setTimeout(() => {
      this.loaderFile = false;
    }, 500);
  }

  /**
   * Hide menu list and files
   */
  async hideMenu() {
    this.menuToggele = false;
    this.fileRepository.getFolderTitle(this.parentId).then((res) => {
      this.projectTitle = res;
    });
    this.listfiles = await this.fileRepository.getFiles(this.parentId);
  }

  /**
   * Setup google file link, which can be used to lookup in googledrive
   */
  drivefileUrl() {
    if (this.parentId) {
      window.open('https://drive.google.com/drive/folders/' + this.parentId, "_blank");
    } else {
      window.open('https://drive.google.com/drive/my-drive', "_blank");
    }
  }

  /**
   * Navigate to home page
   */
  homePage() {
    window.open('http://hi.quickpad.io', "_blank");
  }

  /*** Emit to notepad */
  moveToNotepad() {
    if (this.modelFIleName) {
      if (this.title1) {
        this.title = this.title1;
      } else {
        this.title1 = this.title;
      }
      this.modelFIleName = false;
      if(this.title == 'Untitled'){
       this.fileRepository.getfileNewtitle('Focus');
      }else{
      this.fileRepository.movecursorToNoTepad();
      }
    }
    if (this.modelFIleExt) {
      if (this.fileType1) {
        this.fileType = this.fileType1;
      } else {
        this.fileType1 = this.fileType;
      }
      this.modelFIleExt = false;
      if(this.title == 'Untitled'){
        this.fileRepository.getfileNewtitle('Focus');
       }else{
       this.fileRepository.movecursorToNoTepad();
       }
    }

  }

  /**
   * Change file title model show hide
   */

  changeFile(data) {
    this.menuToggele = false;
    this.modelFIleExt = false;
    this.inputClass = false;
    this.modelFIleName = !this.modelFIleName;
    setTimeout(() => {
      const inputElem = <HTMLInputElement> this.menu.nativeElement;
      inputElem.focus();
      inputElem.setSelectionRange(0,99999);
      let hide = document.getElementById("hide");
      let txt = document.getElementById("txt");
      this.resize(hide, txt);
    }, 10);
  }

  /**
   * Set title of application
   * @param event 
   */
  changeWidthTitle(event) {
    this.inputClass = true;
    let hide = document.getElementById("hide");
    let txt = document.getElementById("txt");
    this.resize(hide, txt);

    // Set tab title on change
    this.titleService.setTitle(document.getElementById("hide").innerText);
  }

  /**
   * Resize the file name textbox width
   * @param hide 
   * @param txt 
   */
  resize(hide, txt) {
    hide.textContent = txt.value;
    txt.style.width = hide.offsetWidth + "px";
  }

  /**
   * Change drive file extention
   */
  changeFileExt() {
    let width = this.fileExt.nativeElement.offsetWidth;
    if (this.title1) {
      this.title = this.title1;
    } else {
      this.title1 = this.title;
    }
    this.menuToggele = false;
    this.modelFIleName = false;
    this.modelFIleExt = !this.modelFIleExt;

    setTimeout(() => {
      const inputElem = <HTMLInputElement> this.ext.nativeElement;
      inputElem.select();
      this.renderer.setStyle(this.ext.nativeElement, 'width', `${width}px`)
    }, 100);
  }

  /**
   * Manage the file extension box width dynamically
   * @param event 
   */
  changeWidthEtx(event) {
    if (event.length == 1 && event != '.') {
      this.fileType1 = '.' + event;
    }
    let data = this.fileType1.length;
    let width = data * 9;
    this.renderer.setStyle(this.ext.nativeElement, 'width', `${width}px`)
  }

  /**
   * Update file title
   * @param title 
   * @param txt 
   */
  changeFileTile(title, txt) {
    this.modelFIleName = !this.modelFIleName;
    let name = title + '.' + txt;
    if (this.currentFile) {
      this.fileRepository.updatefiletitle(name, this.currentFile).then((res: any) => {
        if (res) {
          let hascheckType = res.name.split(".");
          this.title = hascheckType[0];
        }
      });
    } else {
      sessionStorage.setItem('newfiletitle', name);
    }
  }

  /**
   * Get parent Folders
   * @param id 
   */
  async backToParent(id) {
    this.loaderFile = true;
    if (id) {
      this.listfiles = await this.fileRepository.getFiles(id);
      this.fileRepository.getFolderTitle(id).then((res) => {
        this.projectTitle = res;
      });
    }
    setTimeout(() => {
      this.loaderFile = false;
    }, 500);
  }

  /**
   * Move google drive file to other folder
   * @param parentId 
   */
  async moveFile(parentId) {
    if (this.currentFile) {
      this.menuToggele = !this.menuToggele;
      this.loaderFile = true;
      this.parentId = parentId;
      this.fileRepository.moveDriveFile(parentId, this.currentFile).then(async (res: boolean) => {
        this.listfiles = await this.fileRepository.getFiles(parentId);
      });
      setTimeout(() => {
        this.loaderFile = false;
      }, 500);
    } else {
      this.parentId = parentId;
      sessionStorage.setItem('parentid', parentId);
      this.menuToggele = !this.menuToggele;
    }
  }

  /**
   * ngOnInit *******************************************************
   */

  async ngOnInit() {
    const MIMETYPES = ['html', 'css', 'php', 'md', 'txt', 'java', 'class', 'c', 'py', 'cpp', 'cs', 'vb', 'js', 'sql', 'r'];
    this.fileRepository.openFileFromDrive.subscribe((res: any) => {
      if (res.docs) {
        let hascheckType = res.docs[0].name.split(".");
        if (hascheckType[1] && MIMETYPES.includes(hascheckType[1])) {
          let obj: any = { "ids": [res.docs[0].id]};
          let params = JSON.stringify(obj);
          this.router.navigate(['/editor'], { queryParams: { state: params } });
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }else{
          this._snackBar.open('File format is not supported', '', { duration: 1500, verticalPosition: 'top', horizontalPosition: 'center' });
        }
      }
    });

    this.fileRepository.onNotepad.subscribe((res: any) => { 
      if (this.modelFIleName) {
        if (this.title1) {
          this.title = this.title1;
        } else {
          this.title1 = this.title;
        }
      }
      if (this.modelFIleExt) {
        if (this.fileType1) {
          this.fileType = this.fileType1;
        } else {
          this.fileType1 = this.fileType;
        }
      }
      this.modelFIleExt = false;
      this.modelFIleName = false;
      this.menuToggele = false;
    });

    this.isLoggedIn = this.gapiSession.isSignedIn;

    if (this.isLoggedIn) { // if user logged in
      this.user = this.gapiSession.googleAuth.currentUser.get().getBasicProfile();
      let strorage = sessionStorage.getItem('fileData');
      let strorageid = sessionStorage.getItem('id');
      if (strorage) {
        const param = JSON.parse(strorage);
        if (param.exportIds) {
          const details = await this.fileRepository.getFileDetails(param.exportIds[0]);
          if (details.result) {
            this.title = details.result.name;
          }
        }
        if (param.ids) {
          this.currentFile = param.ids;
          const details = await this.fileRepository.getFileDetails(param.ids[0]);
          if (details.result) {
            if (details.result.parents) {
              this.parentId = details.result.parents[0];
              this.filePath = details.result.parents[0];

              this.fileRepository.getFolderTitle(details.result.parents[0]).then((res) => {
                this.projectTitle = res;
              });

              this.listfiles = await this.fileRepository.getFiles(details.result.parents[0]);
            }
            let hascheckType = details.result.name.split(".");
            this.title = hascheckType[0];
            this.title1 = hascheckType[0];
            let hasMatch = hascheckType[hascheckType.length - 1];
            if (hasMatch) {
              this.fileType = '.' + hasMatch;
              this.fileType1 = '.' + hasMatch;
            }
          }
        } if (param.folderId) {
          this.parentId = param.folderId;
          this.filePath = param.folderId;

          this.fileRepository.getFolderTitle(param.folderId).then((res) => {
            this.projectTitle = res;
          });
          this.listfiles = await this.fileRepository.getFiles(param.folderId);
        }

      }
      if (strorageid) {
        this.currentFile = strorageid;
      }

      if (!strorageid && !strorage) {
        this.getrootfiles();
        sessionStorage.removeItem('parentid');
      }

      this.fileRepository.getFileTitle.subscribe((res: any) => {
        if (res == 'update') {
          if (this.fileType1.length >= 2) {
            this.fileType = this.fileType1;
            this.modelFIleExt = false;
          }
          if (this.title1.length >= 1) {
            this.title = this.title1;
            this.modelFIleName = false;
          }
          this.fileRepository.currentExt(this.fileType);
          this.fileRepository.updatefiletitle(this.title + this.fileType, this.currentFile).then((res: any) => {
            if (res) {
              this.modelFIleName = false;
              let hascheckType = res.name.split(".");
              this.title = hascheckType[0];
              this.title1 = hascheckType[0];
            }
          });
        } if(res == 'new') {
          this.loaderNew = true;
          if (this.fileType1.length >= 2) {
            this.fileType = this.fileType1;
            this.modelFIleExt = false;
          }
          if (this.title1.length >= 1) {
            this.title = this.title1;
            this.modelFIleName = false;
          }
          this.modelFIleName = false;
          sessionStorage.setItem('newfiletitle', this.title);
          sessionStorage.setItem('newfileExt', this.fileType);
        }
        if(res == 'checkTitle') {
          if (this.fileType1.length >= 2) {
            this.fileType = this.fileType1;
            this.modelFIleExt = false;
          }
          if (this.title1.length >= 1) {
            this.title = this.title1;
            this.modelFIleName = false;
          }
          this.modelFIleName = false;
          if(this.title != 'Untitled'){
            this.fileRepository.fileTitleStaus();
          }else{
            setTimeout(() => {
              this.filetitle.nativeElement.dispatchEvent(new MouseEvent('click'));
            }, 100);
          }
        }
      });

      /*****************************************************    */

      this.fileRepository.getFileMeta.subscribe((res: any) => {
        let strorageid = sessionStorage.getItem('id');
        this.getDriveFiledetail(strorageid);
        this.currentFile = strorageid;
      });

      this.fileRepository.changeThemeMode.subscribe((res: any) => {
        this.themeMode = !this.themeMode;
      });

    } else {
      return;
    }

    if (this.aroute.snapshot.routeConfig.path == '') {
      this.title = '';
      this.fileType = '';
      this.title1 = '';
      this.fileType1 = '';
    }
  }
 
  /**
   * New drive file details
   * @param data 
   */
  async getDriveFiledetail(data) {
    const details = await this.fileRepository.getFileDetails(data);
    if (details.result) {
      this.parentId = details.result.parents[0];
      this.filePath = details.result.parents[0];
      this.fileRepository.getFolderTitle(details.result.parents[0]).then((res) => {
        this.projectTitle = res;
        this.loaderNew = false;
      });
      this.listfiles = await this.fileRepository.getFiles(details.result.parents[0]);
      let hascheckType = details.result.name.split(".");
      this.title = hascheckType[0];
      this.title1 = hascheckType[0];
      // if (this.filetitle && this.title == 'Untitled') {
      //   setTimeout(() => {
      //     this.filetitle.nativeElement.dispatchEvent(new MouseEvent('click'));
      //   }, 100);
      // }
      let hasMatch = hascheckType[hascheckType.length - 1];
      if (hasMatch) {
        this.fileType = '.' + hasMatch;
        this.fileType1 = '.' + hasMatch;
      }
      this.loaderNew = false;
    }
  }

  /**
   * Sign in with google api
   */
  login() {
    this.gapiSession.signIn().then(res => {
      location.assign('/editor');
    });
  }

  /**
   * Swicth account from one google account to another
   */
  switchAccount() {
    this.gapiSession.signIn().then(res => {
      localStorage.setItem('editor', 'new');
      sessionStorage.removeItem('parentid');
      sessionStorage.removeItem('newfiletitle');
      sessionStorage.removeItem('newfileExt');
      location.assign('/editor');
    });

  }

  /**
   * User logout
   */
  logout() {
    this.gapiSession.signOut();
    location.assign('/');
    sessionStorage.clear();
  }

}

