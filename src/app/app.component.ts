import { Component } from '@angular/core'

import { Article } from './models/Article'
import { SearchData } from './models/SearchData'
import { NewsService } from './services/news.service'

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string
  news: Article[]
  isLoading: boolean
  errorMessage: string

  resetError = () => (this.errorMessage = '')
  errorExists = () => this.errorMessage != ''
  newsExists = () => this.news.length > 0

  updateSearchData(searchData: SearchData) {
    try {
      this.isLoading = true
      this.newsService.requestNews(searchData).subscribe(response => {
        this.news = response.articles
        this.isLoading = false
      })
    } catch (err) {
      this.errorMessage = 'Hubo un error con tu consulta, lo sentimos'
      this.isLoading = false
    }
  }

  constructor(private newsService: NewsService) {
    this.title = 'Buscador de Noticias'
    this.news = []
    this.isLoading = false
    this.errorMessage = ''
  }
}
