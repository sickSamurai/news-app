import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { NewsFormComponent } from './components/news-form/news-form.component'
import { NewsListComponent } from './components/news-list/news-list.component'
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { NewsCardComponent } from './components/news-list/news-card/news-card.component';
import { AlertComponent } from './shared/alert/alert.component'

@NgModule({
  declarations: [AppComponent, NewsFormComponent, SpinnerComponent, NavbarComponent, NewsListComponent, NewsCardComponent, AlertComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
