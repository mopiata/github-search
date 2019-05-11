import { Component, OnInit, Input } from '@angular/core';
import { User } from "../user";
import { Repo } from "../repo";
import { GitsearchServiceService } from "../gitsearch-service.service";
import { MyHighlightDirective } from "../my-highlight.directive";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  repos:Repo[]=[];
  myProfile="mopiata";
  
  

  constructor(private gitSearch:GitsearchServiceService) {}

  ngOnInit() {
    this.viewUsers(this.myProfile)
    
  }

  getUserRepos(user: string) {
    this.gitSearch.userRepos(user)
      .subscribe(data => this.repos = data);
  }
  viewUsers(searchItem) {
    this.getUserRepos(searchItem);
    this.gitSearch.userRequest(searchItem);
    this.user = this.gitSearch.user;

    console.log(this.user);
  }

}
