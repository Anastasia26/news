import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {News} from './news-item.model';

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) {
  }

  getProducts(id?: number) {
    return this.http.get<News[]>('assets/news.json');
  }
}
