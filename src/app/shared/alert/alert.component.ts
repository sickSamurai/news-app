import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() message: string
  @Input() isOpen: boolean
  @Output() onClose: EventEmitter<null> = new EventEmitter()

  constructor() {
    this.message = ''
    this.isOpen = false
  }
}
