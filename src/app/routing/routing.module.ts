import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { SearchFormComponent } from "../search-form/search-form.component";
import { HomeComponent } from "../home/home.component";
import { ReposComponent } from "../repos/repos.component";

//Defining Routes
const routes:Routes=[
  { path: '', component: HomeComponent },  
  { path: 'searchusers', component: SearchFormComponent },
  { path: 'searchrepos', component: ReposComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
