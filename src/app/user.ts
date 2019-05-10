import { Adapter } from "./adapter";
import { Injectable } from "@angular/core";

export class User {
  constructor(public username: string, public profPic: string, 
    public githubProfileUrl:string, public repositoriesUrl:string, 
    public noOfRepos:number, public joinDate:Date, public lastActiveDate:Date){
  }
}

export class UserAdapter implements Adapter<User>{
  adapt(item: any): User{
    return new User(
      item.login,
      item.avatar_url,
      item.html_url,
      item.repos_url,
      item.public_repos,
      item.created_at,
      item.updated_at,
    ); 
  }
}