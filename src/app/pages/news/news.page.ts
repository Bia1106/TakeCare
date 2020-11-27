import { NewsServiceService } from './../../providers/news-service.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private newsService: NewsServiceService) {
    this.loadNews();
    
   }

  loadNews() {
    this.newsService.getNews('everything?q=coronavirus&ortBy=publishedAt').subscribe(news => {
      this.articles = news['articles'];
    })
  }

  ngOnInit() {
  }

}
