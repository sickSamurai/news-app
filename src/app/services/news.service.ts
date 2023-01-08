import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Article } from '../models/Article'
import { SearchData } from '../models/SearchData'

type NewsResponse = {
  articles: Article[]
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseURL = 'https://newsapi.org/v2/top-headlines'
  apiKey = '6e0d32293bd34d97a2d72a8bfdb7f93c'

  requestNews({ country, category }: SearchData) {
    const url = `${this.baseURL}?country=${country}&category=${category}&apiKey=${this.apiKey}`
    return this.httpClient.get<NewsResponse>(url)
  }

  constructor(private httpClient: HttpClient) {}
}
