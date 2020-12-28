import { Injectable, ɵConsole, EventEmitter } from "@angular/core";
import { FileInfo, MIME_TYPE_FOLDER } from "../../models/fileInfo";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
declare var UploaderForGoogleDrive;
declare var gapi;
declare var google;

@Injectable()
export class FileRepository {

  driveupload = environment.DRIVEUPLOAD;
  fileInfo = environment.fileInfoUrl;
  createFileMeta = new EventEmitter();
  checkFileTitle = new EventEmitter();
  getFileMeta = new EventEmitter();
  getFileTitle = new EventEmitter();
  getTitle = new EventEmitter();
  movetoNotepad = new EventEmitter();
  movetoFileName = new EventEmitter();
  changeThemeMode = new EventEmitter();
  getfileExt = new EventEmitter();
  openFileFromDrive = new EventEmitter();
  onNotepad = new EventEmitter();
  appId = '248281649517';
  API_KEY = "AIzaSyBBtPpfWoLZGZ8s_vTQQ31zmS1dfZ94Afs";
  fileId = '';
  option : any;

  constructor(
    private http: HttpClient
  ) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :  '*"'
    });
  this.option = { headers: headers };
   }




  /**
   * POST CURRENT LINE
   * @param field 
   */
  postCurrentLIne(field) {
    let line = field.lineNumber.toString();
    let data = {
      FileId : field.fileId,
      UserId : field.userId,
      LineNo : line
    }
    return this.http.post<Boolean>(this.fileInfo + 'postCurrentLineTable', data).pipe(
      map((user: any) => {
        return user;
      })
    );
  }

  /**
   * GET CURRENT LINE
   * @param data 
   */

  getCurrentLIne(field) {
    let data = {
      FileId : field.fileId,
      UserId : field.userId
    }
    return this.http.post<Boolean>(this.fileInfo + 'getCurrentLineTable', data).pipe(
      map((user: any) => {
        return user;
      })
    );
  }

  /**
   * Update the file current line
   * @param field 
   */
  updateCurrentLIne(field) {
    let line = field.lineNumber.toString();
    let data = {
      FileId : field.fileId,
      UserId : field.userId,
      LineNo : line
    }
    return this.http.post<Boolean>(this.fileInfo + 'updateCurrentLineTable', data).pipe(
      map((user: any) => {
        return user;
      })
    );
  }


  /**
   * Make api call to Bookmark 
   * @param lines 
   * @param id 
   */
  postBookmark(lines, id) {
    let line = lines.toString();
    let data = {
      FileId : id,
      LineNo : line
    }
    return this.http.post<Boolean>(this.fileInfo + 'postBookMarkTable', data).pipe(
      map((user: any) => {
        return user;
      })
    );
  }

  /**
   * Get the bookmarks
   * @param data 
   */
  getBookmark(data){
    let file = {
      FileId : data
    }
    return this.http.post<Boolean>(this.fileInfo + 'getBookMarkTable', file).pipe(
      map((user: any) => {
        return user;
      })
    );
  }

  /**
   * Delete bookmark
   * @param fileId 
   * @param lineNo 
   */
  deleteBookmark(fileId, lineNo){
    let line = lineNo.toString();
    let files = {
      FileId : fileId,
      LineNo : line
    }
    return this.http.post<Boolean>(this.fileInfo + 'deleteBookMarkTable', files).pipe(
      map((user: any) => {
        return user;
      })
    );
  }

  /*
   Insert Font Size to DB
  */
  insertFontSize(userId, fontSize){
    let data = {
      UserId : userId,
      FontSize : fontSize
    }
    return this.http.post<Boolean>(this.fileInfo + 'sls-dev-updateFontSizeTable', data).pipe(
      map((user: any) => {
        return user;
      })
    );
  }


  /*
   Get Font Size from DB
  */
  getFontSize(userId){
    let data = {
      UserId : userId
    }
    return this.http.post<Boolean>(this.fileInfo + 'sls-dev-getFontSizeTable', data).pipe(
      map((user: any) => {
        return user;
      })
    );
  }

  /*
   Insert to DB
   */
  insertTheme(userId, theme){
    let data = {
      UserId : userId,
      Theme : theme
    }
    return this.http.post<Boolean>(this.fileInfo + 'sls-dev-updateThemeTable', data).pipe(
      map((user: any) => {
        return user;
      })
    );
  }

    /*
   Get Theme from DB
  */
  getTheme(userId){
    let data = {
      UserId : userId
    }
    return this.http.post<Boolean>(this.fileInfo + 'sls-dev-getThemeTable', data).pipe(
      map((user: any) => {
        return user;
      })
    );
  }

  /**
   * Get the current extension
   * @param data 
   */
  currentExt(data) {
    this.getfileExt.emit(data);
  }

  /**
   * Emit event create file meta subject
   */
  createMetadata() {
    this.createFileMeta.emit();
  }

  /**
   * Emit event on get file metadata
   */
  getfileMetadata() {
    this.getFileMeta.emit();
  }

  /**
   * Emit event to get file title
   * @param data 
   */
  getfileNewtitle(data) {
    this.getFileTitle.emit(data);
  }

  /**
   * Emit event to check theme mode
   */
  checkThemeMode() {
    this.changeThemeMode.emit();
  }
  /** Move to nodepad on enter */
  movecursorToNoTepad() {
    this.movetoNotepad.emit();
  }


  /** Move to nodepad on enter */
  movecursorFileName() {
    this.movetoFileName.emit();
  }

  /** on Move to nodepad on enter */
  onMoveCursorOnNotepage() {
    this.onNotepad.emit();
  }

  /**
   * Home check event emitter
   */
  isHomeComponent = new EventEmitter();

  /**
   * Emit event on check home component
   */
  checkHomeComponent() {
    this.isHomeComponent.emit();
  }

  /**
   * Emit event on file tile status
   */
  fileTitleStaus() {
    this.checkFileTitle.emit();
  }

  /**
   * Create a file to specific folder of drive
   * @param parentId 
   * @param folderName 
   */
  create(parentId: string, folderName: string) {
    var folder = {
      name: folderName,
      mimeType: MIME_TYPE_FOLDER,
      parents: [parentId]
    };
    return gapi.client.drive.files.create({
      resource: folder,
      fields: "id, name, mimeType, modifiedTime, size"
    }).then((res) => {
      return FileInfo.fromGoogleFile(res.result);
    });
  }

  /**
   * Delete the file
   * @param fileId 
   */
  delete(fileId: string) {
    return gapi.client.drive.files.delete({
      fileId: fileId
    });
  }

  /**
   * Get files with in a folder
   * @param folderId 
   */
  getFiles(folderId: string) {
    return gapi.client.drive.files.list({
      pageSize: 500,
      fields: "*",
      q: `'${folderId}' in parents and trashed = false`,
      orderBy: "folder",
    }).then((res) => {
      let files: FileInfo[] = [];
      res.result.files.forEach((file: any) => {
        if (file.mimeType == 'application/vnd.google-apps.folder') {
          files.push(FileInfo.fromGoogleFile(file))
        }
      });
      return files;
    });
  }

  /**
   * Move file between the folders
   */
  moveDriveFile(folderid, fileid) {
    return new Promise((resolve, reject) => {
      gapi.client.drive.files.get({
        fileId: fileid,
        fields: 'parents'
      }).then((res: any) => {
        var previous_parents = res.result.parents.join(',');
        gapi.client.drive.files.update({
          fileId: fileid,
          addParents: folderid,
          removeParents: previous_parents,
          fields: 'id, parents'
        }).then((response: any) => {
          resolve(true);
        });
      }, (err: any) => {
        reject(err);
      });
    });
  }


  /**
   * Update drive file title
   * @param title 
   * @param id 
   */
  updatefiletitle(title, id) {
    let body = {
      "name": title
    }
    let accessToken = gapi.auth.getToken().access_token;
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    });
    let options = { headers: headers };
    return this.http.patch(`https://www.googleapis.com/drive/v3/files/${id}?fields=*`, body, options).toPromise();
  }


  /**
   * Get parent Folder name
   * @param folderId 
   */
  async getFolderTitle(folderId: string) {
    let accessToken = gapi.auth.getToken().access_token;
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    });
    let options = { headers: headers };
    return this.http.get(`https://www.googleapis.com/drive/v3/files/${folderId}?fields=*`, options).toPromise();
  }

  /**
   * Get file from google drive
   */
  async getFile() {
    const view = new google.picker.View(google.picker.ViewId.DOCS);
    const picker = new google.picker.PickerBuilder()
      .enableFeature(google.picker.Feature.NAV_HIDDEN)
      .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
      .setAppId(this.appId)
      .setOAuthToken(gapi.auth.getToken().access_token)
      .addView(view)
      .addView(new google.picker.DocsUploadView())
      .setDeveloperKey(this.API_KEY)
      .setCallback((data) => { this.pickerCallback(data) })
      .build();
    picker.setVisible(true);
  }

  pickerCallback(data) {
    if (data.action == google.picker.Action.PICKED) {
      // sessionStorage.setItem('driveFiele', data);
      this.openFileFromDrive.emit(data);
      this.fileId = data.docs[0].id;
    }
  }


  /**
   * List all folder name
   */
  getparent() {
    return new Promise((resolve, reject) => {
      let data: any;
      let accessToken = gapi.auth.getToken().access_token;
      let headers = new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      });
      let options = { headers: headers };
      this.http.get("https://www.googleapis.com/drive/v2/files/root/children?q=mimeType%3D'application%2Fvnd.google-apps.folder'", options)
        .subscribe((res: any) => {
          if (res.items) {
            res.items.forEach(obj => {
              this.http.get(`https://www.googleapis.com/drive/v3/files/${obj.id}`, options).subscribe((res: any) => {
                data[data] = res;
              });
            });
          }

        });
      resolve(data);
    });

  }


  /**
   * get parent id
   * @param id 
   */
  getparentId(id) {
    let accessToken = gapi.auth.getToken().access_token;
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    });
    let options = { headers: headers };
    let data = this.http.get(`https://www.googleapis.com/drive/v3/files/${id}?fields=*`, options).toPromise();
  }

  /**
   * create new drive file
   * @param data 
   */
  createDriveFIle(data) {
    let title = 'Untitled';
    let fileext = '.txt';
    let parentid = 'root';
    let id = sessionStorage.getItem('parentid');
    let filename = sessionStorage.getItem('newfiletitle');
    let ext = sessionStorage.getItem('newfileExt');
    if (filename) {
      title = filename;
    }
    if (ext) {
      fileext = ext;
    }
    if (id) {
      parentid = id;
    }
    let file = new Blob([data], { type: 'text/plain' });
    let metadata = {
      'name': title + fileext,
      'mimeType': 'text/plain',
      'parents': [parentid]
    };
    let form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', file);
    let accessToken = gapi.auth.getToken().access_token;
    const headers: HttpHeaders = new HttpHeaders().append('Authorization', `Bearer ${accessToken}`);
    return this.http.post(`${this.driveupload}?uploadType=multipart&fields=id`, form, { headers });
  }

  /**
   * Get google drive file metadata
   * @param fileId 
   */
  getFileDetails(fileId: string) {
    return gapi.client.request({
      'path': 'https://www.googleapis.com/drive/v3/files/' + fileId,
      'params': { 'fields': "*" },
      'method': 'GET',
    });
  }

  /**
   * get google drive file content by id
   * @param fileId 
   */
  getFileById(fileId: string) {
    return gapi.client.drive.files.get({
      'fileId': fileId,
      'mimeType': 'text/plain',
      'alt': 'media'
    });
  }

  /**
   * get google drive file content by export id
   * @param fileId 
   */
  getFileByExportId(fileId: string) {
    return gapi.client.drive.files.export({
      'fileId': fileId,
      'mimeType': 'text/html'
    });
  }

  /**
   * plain text
   * Save export Content
   * @param fileId 
   * @param data 
   */
  saveGoogleExportFile(fileId, data) {
    var contentBlob = new Blob([data], {
      'type': 'text/html'
    });
    this.updateFileContent(fileId, contentBlob);
  }

  /**
   * Save google css File
   * @param fileId 
   * @param data 
   */
  saveGooglecssFile(fileId, data) {
    var contentBlob = new Blob([data], {
      'type': 'text/css'
    });
    this.updateFileContent(fileId, contentBlob);
  }

  /**
   * Save google doc other file
   * @param fileId 
   * @param data 
   */
  saveGoogleFile(fileId, data) {
    var contentBlob = new Blob([data], {
      'type': 'text/html'
    });
    this.updateFileContent(fileId, contentBlob);
  }

  /**
   * Update file content
   * @param fileId 
   * @param contentBlob 
   */
  updateFileContent(fileId, contentBlob) {
    let accessToken = gapi.auth.getToken().access_token;
    const headers: HttpHeaders = new HttpHeaders().append('Authorization', `Bearer ${accessToken}`);
    return this.http.patch(`${this.driveupload}/${fileId}?uploadType=media`, contentBlob, { headers })
      .subscribe((res: any) => {
        return res;
      });
  }

  /**
   * Get files shareable links
   * @param files 
   */
  getAllShareableLinks(files: FileInfo[]): any {
    var permission = {
      type: 'anyone',
      role: 'reader',
      allowFileDiscovery: false
    };
    let promises = [];
    files.forEach((file) => {
      if (!file.Shared) {
        promises.push(
          gapi.client.drive.permissions.create({
            resource: permission,
            fileId: file.Id
          }));
      }
    });

    return Promise.all(promises);
  }

  /**
   * Import file
   * @param parentId 
   * @param file 
   * @param onError 
   * @param onComplete 
   * @param onProgress 
   */
  importFile(parentId: string, file: FileInfo, onError: any, onComplete: any, onProgress: any) {
    var contentType = file.Blob.type || 'application/octet-stream';
    var metadata = {
      name: file.Blob.name,
      mimeType: contentType,
      parents: [parentId]
    };

    var uploader = new UploaderForGoogleDrive({
      file: file.Blob,
      token: gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token,
      metadata: metadata,
      onError: onError,
      onComplete: onComplete,
      onProgress: onProgress,
      params: {
        convert: false,
        ocr: false
      }

    });

    uploader.upload();
  }
  // importFile(parentId:string, name:string, blob:Blob) {
  //     const boundary = 'hintdesk';
  //     const delimiter = "\r\n--" + boundary + "\r\n";
  //     const close_delim = "\r\n--" + boundary + "--";

  //     var reader = new FileReader();
  //     reader.readAsBinaryString(blob);
  //     reader.onload = function (e) {
  //         var contentType = blob.type || 'application/octet-stream';
  //         var metadata = {
  //             name: name,
  //             mimeType: contentType,
  //             parents: [parentId]
  //         };

  //         var base64Data = btoa(reader.result.toString());
  //         var multipartRequestBody =
  //             delimiter +
  //             'Content-Type: application/json\r\n\r\n' +
  //             JSON.stringify(metadata) +
  //             delimiter +
  //             'Content-Type: ' + contentType + '\r\n' +
  //             'Content-Transfer-Encoding: base64\r\n' +
  //             '\r\n' +
  //             base64Data +
  //             close_delim;

  //         return gapi.client.request({
  //             'path': '/upload/drive/v3/files',
  //             'method': 'POST',
  //             'params': { 'uploadType': 'multipart' },
  //             'headers': {
  //                 'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
  //             },
  //             'body': multipartRequestBody
  //         });
  //     }
  // }
}
