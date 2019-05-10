import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../user";
import { Repo } from "../repo"

import { GitsearchServiceService } from "../gitsearch-service.service";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @ViewChild('searchForm') formValues;
  
  private searchString = "";

  user:User;
  repos:Repo[];

  constructor(private gitSearch:GitsearchServiceService) { }

  ngOnInit() {
    
  }

  submitSearch() {
    this.gitSearch.userRequest(this.searchString.trim());
    this.user=this.gitSearch.user;
    console.log(this.user);
    this.formValues.resetForm();
  }
}
