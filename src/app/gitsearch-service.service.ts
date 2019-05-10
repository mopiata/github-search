import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { map } from "rxjs/operators";
import { User, UserAdapter } from "./user";
import { Repo } from "./repo";
import { environment } from "../environments/environment";
import { stringify } from '@angular/core/src/util';

@Injectable({
  providedIn: 'root'
})
export class GitsearchServiceService {

  user:User;
  repos:Repo[];
  
  constructor(
    private http:HttpClient,
    private adapter: UserAdapter,
    ) { 
      this.user=new User("","","","",0,new Date(),new Date());
    }

  userRequest(searchString){
      interface ApiResponse{
        login:string;
        avatar_url: string;
        html_url: string;
        repos_url: string;
        public_repos: number;
        created_at: Date;
        updated_at: Date;
      }

      let promise=new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>('https://api.github.com/users/'+ searchString +'?access_token=' + environment.accessKey)
          .toPromise().then(response=>{
            this.user.username=response.login
            this.user.profPic=response.avatar_url
            this.user.githubProfileUrl=response.html_url
            this.user.repositoriesUrl=response.repos_url
            this.user.noOfRepos=response.public_repos
            this.user.joinDate=response.created_at
            this.user.lastActiveDate=response.updated_at

            resolve()
          },

          error=>{
            console.log("There's no such user");
            reject(error)
          }
        )
      })
      return promise;
    }

  // repoRequest(searchString){
  //   // constructor(public name: string, public owner: string, public repoUrl: string,
  //   //   public description: string){
  //   // }
  //   interface ApiResponse{
  //     items.name:string;
  //     items.owner.login:string;
  //     items.html_url: string;
  //     items.description: string;  
  //   }

  //   let promise=new Promise((resolve,reject)=>{

  //   }
  //   )

  // }
}



  //-------------------------------------------------------------------------------------------
  // userRequest(searchString): Observable<User[]>{ 
  //   const url = `https://api.github.com/users/${searchString} 
  //     ?access_token=${environment.accessKey}`;

  //   return this.http.get(url)
  //     .pipe(
  //       // Adapt each item in the raw data array
  //       map((data:any[])=> data.map(item => this.adapter.adapt(item))),
  //     );    
  // }
    //-------------------------------------------------------------------------------------------
  // list(): Observable<any> { 
  //   return this.http.get('https://api.github.com/users/mopiata?access_token=' + environment.accessKey);
  // }