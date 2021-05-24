import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MdbModule} from "mdb-angular-ui-kit";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {NewsPageComponent} from './news-page/news-page.component';
import {NewsListComponent} from './news-list/news-list.component';
import {NewsListAddComponent} from './news-list-add/news-list-add.component';
import {NewsSliderComponent} from './news-slider/news-slider.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NewsArticleComponent} from './news-article/news-article.component';

import {NewsService} from "./news.service";



@NgModule({
  declarations: [
    AppComponent,
    NewsPageComponent,
    NewsListComponent,
    NewsListAddComponent,
    NewsSliderComponent,
    NotFoundComponent,
    NewsArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    MdbModule
  ],
  exports: [RouterModule],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
