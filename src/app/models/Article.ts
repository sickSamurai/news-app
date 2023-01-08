export class Article {
  source: { id: string; name: string }
  author: string | null
  title: string
  description: string
  url: string
  urlToImage: string | null

  constructor() {
    this.source = { id: '', name: '' }
    this.author = null
    this.title = ''
    this.description = ''
    this.url = ''
    this.urlToImage = null
  }
}
