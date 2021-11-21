import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() book: any
  @Input() loading: boolean = false

  constructor() { }

  getAuthorName(names?: string[] | null) {
    if (!names) {
      return ''
    }

    if (names.length) {
      return names.join(',')
    }

    return ''
  }
}
