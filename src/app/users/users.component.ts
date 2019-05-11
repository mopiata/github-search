import { Component, OnInit, Input } from '@angular/core';
import { User } from "../user";
import { Repo } from "../repo";
import { GitsearchServiceService } from "../gitsearch-service.service";
import { MyHighlightDirective } from "../my-highlight.directive";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() searchString:string;
  
  user: User;
  repos: Repo[] = [];
  
  getUserRepos(searchString) {
    this.gitSearch.userRepos(searchString)
      .subscribe(data => this.repos = data);
  }

  constructor(private gitSearch: GitsearchServiceService) { }

  ngOnInit() {
    
  }

}
