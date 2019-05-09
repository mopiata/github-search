import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @ViewChild('searchForm') formValues;
  private searchString;

  submitSearch(){
    console.log('Hi');
    this.formValues.resetForm();
  }

  constructor() { }

  ngOnInit() {
  }

}
