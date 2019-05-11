import { Component, OnInit } from '@angular/core';
import { GitsearchServiceService } from "../gitsearch-service.service";
import { Repo } from "../repo";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  searchString:string;
  repos:Repo[];

  constructor(private gitService:GitsearchServiceService) { }

  submitSearch(){
    this.gitService.reposSearch(this.searchString)
      .subscribe(data => this.repos=data );
  }
  ngOnInit() {
  }

}
