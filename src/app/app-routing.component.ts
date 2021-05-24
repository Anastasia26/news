import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NewsPageComponent} from "./news-page/news-page.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {NewsArticleComponent} from "./news-article/news-article.component";

const routes: Routes = [
  {
    path: '',
    component: NewsPageComponent
  },
  {
    path: 'article/:id',
    component: NewsArticleComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
