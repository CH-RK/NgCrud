import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Http, Headers,Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:Http) {   }
  login(login){
    var headers = new Headers();
    debugger;
    headers.append('Content-Type','application/x-www-form-urlencoded');
      return this.http.post("http://localhost:8080/traffic/rest/user/authenticate",login,{headers : headers});
  }
  getuserd(){
    return this.http.get("http://localhost:8080/traffic/rest/admin/getUsers/1/10");
  }
  getadmins(){
      return this.http.get("http://localhost:8080/traffic/rest/admin/getAdmins/1/10");
  }
}
