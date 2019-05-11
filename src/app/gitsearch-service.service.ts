import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";
import { User, UserAdapter } from "./user";
import { Repo, RepoAdapter } from "./repo";
import { environment } from "../environments/environment";
import { stringify } from '@angular/core/src/util';
import { ReplaceSource } from 'webpack-sources';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GitsearchServiceService {

  user:User;
  repos:Repo[];
  // repo: Repo;
  
  
  constructor(
    private http:HttpClient,
    private adapter: UserAdapter,
    private repoAdapter: RepoAdapter,
    ) { 
      this.user=new User("","","","","",0,new Date(),new Date());
      this.repos=[];
    }

  userRequest(searchString){
      interface ApiResponse{
        name:string;
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
            this.user.name=response.name;
            this.user.username=response.login;
            this.user.profPic=response.avatar_url;
            this.user.githubProfileUrl=response.html_url;
            this.user.repositoriesUrl=response.repos_url;
            this.user.noOfRepos=response.public_repos;
            this.user.joinDate=response.created_at;
            this.user.lastActiveDate=response.updated_at;

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

    userRepos1(searchString){
      const url = "https://api.github.com/users/" + searchString +"/repos?access_token=" + environment.accessKey;
      
      interface ApiResponse{
        
        name: string;
        full_name:string;
        html_url: string;
        description: string;  
      }

      let promise = new Promise((resolve, reject) => {

        this.http.get<ApiResponse[]>(url)
          .toPromise()
          .then(response => {

            this.repos = response.map((res)=>{
                return new Repo(
                  res.name,
                  res.full_name,
                  res.html_url,
                  res.description
              );
            })
            return this.repos;
            resolve()
          },

            error => {
              console.log("There's no such user");
              reject(error)
            }
          )
      })
      return promise;
    }

  userRepos(searchString): Observable<Repo[]> {
    const url = "https://api.github.com/users/" + searchString + "/repos?access_token=" + environment.accessKey;

    return this.http.get(url)
      .pipe(
        map((data:any[])=>data.map(item => this.repoAdapter.adapt(item)))
      );
  }
}
  // this.repos = response.map((res) => {
  //   this.repo.name = res.name;
  //   this.repo.owner = res.full_name;
  //   this.repo.repoUrl = res.html_url;
  //   this.repo.description = res.description;
  // })

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