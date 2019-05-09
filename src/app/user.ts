export class User {
  constructor(public username: string, public profPic: string, 
    public githubProfileUrl:string, public repositoriesUrl:string, 
    public noOfRepos:number, public joinDate:Date, public lastActiveDate:Date){
  }
}
