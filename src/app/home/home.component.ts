import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { GitsearchServiceService } from "../gitsearch-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  myProfile="mopiata";

  constructor(private gitSearch:GitsearchServiceService) {

   }

  ngOnInit() {
    this.gitSearch.userRequest(this.myProfile);
    this.user = this.gitSearch.user;
    console.log(this.user);
  }

}
