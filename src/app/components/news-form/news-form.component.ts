import { Component, EventEmitter, Output } from '@angular/core'

import { AppCategories } from '../../database/categories'
import { AppCountries } from '../../database/countries'
import { SearchData } from '../../models/SearchData'
import { SelectOption } from '../../models/SelectOption'

@Component({
  selector: 'news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent {
  @Output() newsSearching = new EventEmitter<SearchData>()
  categories: SelectOption[]
  countries: SelectOption[]
  selectedCategory: string
  selectedCountry: string

  searchNews() {
    const searchData = new SearchData(this.selectedCategory, this.selectedCountry)
    this.newsSearching.emit(searchData)
  }

  constructor() {
    this.selectedCategory = 'general'
    this.selectedCountry = 'co'
    this.categories = AppCategories
    this.countries = AppCountries
  }
}
