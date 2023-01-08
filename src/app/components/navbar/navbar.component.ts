import { Component, Input } from '@angular/core'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() title: string

  constructor() {
    this.title = ''
  }
}
