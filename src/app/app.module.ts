import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from "@angular/forms";
import { SearchFormComponent } from "./search-form/search-form.component";
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from "@angular/common/http";
import { GitsearchServiceService } from "./gitsearch-service.service";
import { HomeComponent } from './home/home.component';
import { UserAdapter } from "./user";
import { RepoAdapter } from "./repo";
import { DateCountPipe } from './date-count.pipe';
import { MyHighlightDirective } from './my-highlight.directive';
import { RoutingModule } from "./routing/routing.module";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchFormComponent,
    FooterComponent,
    HomeComponent,
    DateCountPipe,
    MyHighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
  ],
  providers: [GitsearchServiceService, UserAdapter, RepoAdapter],
  bootstrap: [AppComponent]
})
export class AppModule { }
