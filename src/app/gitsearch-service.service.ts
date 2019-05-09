import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User, UserAdapter } from "./user";
import { Repo } from "./repo";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GitsearchServiceService {
  private searchString='mopiata';
  profSearchUrl = 'https://api.github.com/users/' + this.searchString + '?access_token=' + environment.accessKey
  
  constructor(
    private http:HttpClient,
    private adapter: UserAdapter,
    ) { }

  userRequest(searchString): Observable<User[]>{
    const url=this.profSearchUrl;
  
    return this.http.get(url).pipe(
      // Adapt each item in the raw data array
      map((data:any[])=> data.map(item => this.adapter.adapt(item))),
    );    
  }

  repoRequest(searchString){

  }
}
