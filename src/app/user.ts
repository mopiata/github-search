import { Adapter } from "./adapter";
import { Injectable } from "@angular/core";

export class User {
  constructor(public name:string,public username: string, public profPic: string, 
    public githubProfileUrl:string, public repositoriesUrl:string, 
    public noOfRepos:number, public joinDate:Date, public lastActiveDate:Date){
  }
}

export class UserAdapter implements Adapter<User>{
  adapt(item: any): User{
    return new User(
      item.name,
      item.login,
      item.avatar_url,
      item.html_url,
      item.repos_url,
      item.public_repos,
      new Date(item.created_at),
      new Date(item.updated_at),
    ); 
  }
}