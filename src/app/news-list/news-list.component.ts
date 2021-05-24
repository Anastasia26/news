import {Component, OnInit} from '@angular/core';
import {faEye, faComment} from '@fortawesome/free-solid-svg-icons';
import {NewsService} from "../news.service";
import {News} from "../news-item.model";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  faEye = faEye;
  faComment = faComment;
  news!: News[];

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.newsService.getProducts().subscribe((news: News[]) => {
      this.news = news;
    });
  }

  onAdd($event: any) {
    const news = {
      ID: Math.floor(Math.random()),
      title: $event.title,
      description: $event.description,
      date: Date.now(),
      commentsCount: 0,
      viewCount: 0,
      imageSmall: "https://mdbootstrap.com/img/new/slides/041.jpg",
    }
    this.news.push(news)
  }
}
