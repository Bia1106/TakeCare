import { HttpClient } from '@angular/common/http';
import { newsConfig } from './../credentials_news';
import { Injectable } from '@angular/core';

const api_url = newsConfig.api_url;
const api_key = newsConfig.api_key;
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) { }

  getNews(url) {
    return this.http.get(`${api_url}/${url}&apiKey=${api_key}`);
  }
}
