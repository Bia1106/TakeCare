import { NewsServiceService } from './../../providers/news-service.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../providers/storage.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  providers:[
    NewsServiceService 
  ]
})
export class NewsPage implements OnInit {
  articles: any;
  private today: number = Date.now();
  private searchedItem:any;
  public username: string;
  constructor(private newsService: NewsServiceService, private info:StorageService) {
    this.loadNews();
    
   }

  loadNews() {
    this.newsService.getNews('everything?q=coronavirus&ortBy=publishedAt').subscribe(news => {
      this.articles = news['articles'];
    })
  }

  ngOnInit() {
    this.info.get().then((nome:string) => {
      this.username = nome;
    })
  }

}
