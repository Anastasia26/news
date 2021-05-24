import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {News} from "../news-item.model";
import {NewsService} from "../news.service";
import {Subscription} from "rxjs";
import {faEye, faComment} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit, OnDestroy {
  private routeSub!: Subscription;
  news!: News[];
  faEye = faEye;
  faComment = faComment;

  constructor(private newsService: NewsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.newsService.getProducts(params['id'])
        .subscribe((news: News[]) => {
          this.news = news.filter(x => x.ID === params.id);
        });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
