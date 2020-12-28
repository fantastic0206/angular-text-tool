import { Injectable, EventEmitter } from "@angular/core";
import { AppRepository } from "../repositories/app.repository";
const CLIENT_ID = "248281649517-s7k5n7e0p5mjd7649prqhvia92m6rv39.apps.googleusercontent.com";
const API_KEY = "AIzaSyBBtPpfWoLZGZ8s_vTQQ31zmS1dfZ94Afs";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = [
  'https://www.googleapis.com/auth/drive.install',
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive.metadata.readonly'
].join(' ');
// var SCOPES: any = 'https://www.googleapis.com/auth/drive.apps.readonly https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.readonly';



// https://www.googleapis.com/auth/drive.appfolder Permission
// https://www.googleapis.com/auth/drive.apps.readonly 
// https://www.googleapis.com/auth/drive.metadata 
// https://www.googleapis.com/auth/drive   
// https://www.googleapis.com/auth/drive.metadata.readonly  
// https://www.googleapis.com/auth/drive.readonly
// https://www.googleapis.com/auth/drive.file
// https://www.googleapis.com/auth/drive.appdata
@Injectable()
export class GapiSession {
  googleAuth: gapi.auth2.GoogleAuth;

  constructor(
    private appRepository: AppRepository

  ) {
  }

  initClient() {
    return new Promise((resolve, reject) => {
      gapi.load('client:auth2', () => {
        return gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        }).then(() => {
          this.googleAuth = gapi.auth2.getAuthInstance();
          gapi.load('picker', { callback: resolve });
        });
      });
    });

  }
  get isSignedIn(): boolean {
    return this.googleAuth.isSignedIn.get();
  }

  signInWithToken(data) {
    gapi.auth.setToken(data);

  }

  signIn() {
    return this.googleAuth.signIn({
      prompt: 'select_account'
    }).then((googleUser: gapi.auth2.GoogleUser) => {
      this.appRepository.User.add(googleUser.getBasicProfile());
    });
  }

  signOut(): void {
    this.googleAuth.signOut();
    localStorage.removeItem('fileData');
    localStorage.clear();
  }
}
