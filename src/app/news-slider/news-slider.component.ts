import {Component, OnInit} from '@angular/core';
import {NewsService} from "../news.service";
import {faEye, faComment} from '@fortawesome/free-solid-svg-icons';
import {News} from "../news-item.model";

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.scss']
})
export class NewsSliderComponent implements OnInit {
  lastNews!: News[];
  faEye = faEye;
  faComment = faComment;

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.newsService.getProducts().subscribe((news: News[]) => {
      this.lastNews = news.slice(Math.max(news.length - 3, 0));
    });
  }

}
