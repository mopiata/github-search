import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { Repo } from "../repo";
import { GitsearchServiceService } from "../gitsearch-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  repos:Repo[];
  myProfile="mopiata";

  constructor(private gitSearch:GitsearchServiceService) {

   }

  ngOnInit() {
    this.gitSearch.userRequest(this.myProfile);
    this.user = this.gitSearch.user;

    this.gitSearch.userRepos(this.myProfile);
    this.repos=this.gitSearch.repos;
    console.log(this.user);
    console.log(this.repos);
  }

}
