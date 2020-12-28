import { Injectable } from "@angular/core";
import { User } from "../../models/user";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const TABLE_USER = "users"

declare var gapi: any;

@Injectable()
export class UserRepository {
  constructor(
    private http: HttpClient
  ) {

  }

  add(profile: gapi.auth2.BasicProfile) {
    let users = this.getAll();

    const foundIndex = users.findIndex(user => user.Id === profile.getId());

    if (foundIndex >= 0)
      users.splice(foundIndex, 1);

    users.push(User.fromBasicProfile(profile));
    this.save(users);
  }

  getAll(): User[] {
    var data = localStorage.getItem(TABLE_USER);
    if (data) {
      return <User[]>(JSON.parse(data));
    }
    else
      return [];
  }

  /**
   * Save the localstorage
   * @param users 
   */
  save(users: User[]) {
    localStorage.setItem(TABLE_USER, JSON.stringify(users));
  }

  /**
   * Hubspot Auth
   * Login
   */
  userAcessToken(data) {

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post("https://oauth2.googleapis.com/token", data, options);
  }

}