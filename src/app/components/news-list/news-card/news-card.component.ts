import { Component, Input } from '@angular/core'

import { Article } from '../../../models/Article'

@Component({
  selector: 'news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
  @Input() newsItem: Article

  constructor() {
    this.newsItem = {} as Article
  }
}
