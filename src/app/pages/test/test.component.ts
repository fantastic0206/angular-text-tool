import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public FileId: any = '';
  public UserId: any = '';
  public LineNo: any = '';


  constructor(private http: Http){
  }

  ngOnInit() {
    
  }

  PostCurrentLineTable(event) {
    this.http.post('http://quickpad.io:3000/postCurrentLineTable', {
      "FileId": this.FileId,
      "UserId": this.UserId,
      "LineNo": this.LineNo
    }).subscribe(data => {
        console.log(data.json());
    },  error => {
        console.log("Oooops!");
    });
  }

  changeFildId(event) {
    this.FileId = event
  }

  changeUserId(event) {
    this.UserId = event
  }

  changeLineNo(event) {
    this.LineNo = event
  }

}
