import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../user";

import { GitsearchServiceService } from "../gitsearch-service.service";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @ViewChild('searchForm') formValues;
  
  private searchString = 'mopiata';

  users:User[];

  constructor(private gitSearch:GitsearchServiceService) { }

  ngOnInit() {
    
  }

  submitSearch() {
    console.log(this.gitSearch.userRequest(this.searchString));
    // this.users
    this.formValues.resetForm();
  }
}
