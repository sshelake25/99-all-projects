import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myHttp: HttpClient) { } //get /post

  getUserList() { // Observable // String
   return 'I am from service';
    //return type ? Observable ==> .subcribe( (dt) => { } )
    //return this.myHttp.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
  }

  getUserListFromApi() { //Observable
   return this.myHttp.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
  }

}
