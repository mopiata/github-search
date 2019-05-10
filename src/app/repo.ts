import { Adapter } from "./adapter";
import { Injectable } from "@angular/core";

export class Repo {
  constructor(public name:string, public owner:string, public repoUrl:string, 
    public description:string){
  }
}

export class RepoAdapter implements Adapter<Repo>{
  adapt(item: any): Repo {
    return new Repo(
      item.name,
      item.full_name,
      item.html_url,
      item.description,     
    );
  }
}