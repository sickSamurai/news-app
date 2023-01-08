import { Component, Input } from '@angular/core'
import { Article } from 'src/app/models/Article'

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  @Input() news: Article[]

  newsExists = () => this.news.length > 0

  constructor() {
    this.news = []
  }
}
