import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user";
import { Repo } from "./repo";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GitsearchServiceService {
  private searchString='mopiata';
  profSearchUrl = 'https://api.github.com/users/' + this.searchString + '?access_token=' + environment.accessKey
  
  constructor(private http:HttpClient) { }

  userRequest(searchString): Observable<User[]>{
    const url=this.profSearchUrl;
    
  }

  repoRequest(searchString){

  }
}
