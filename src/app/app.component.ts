import { Component } from '@angular/core';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books: any = []
  searching: boolean = false
  timerStarted: boolean = false
  skeletonCards = Array(12).fill(1)

  constructor(private booksService: BooksService) {

  }

  onSearchClick(searchTerm: string) {
    this.searching = true;
    this.timerStarted = true;

    setTimeout(() => {
      this.timerStarted = false
    }, 3000)

    this.booksService.getBooks(searchTerm).subscribe(({ body }: any) => {
      this.books = body?.items;
      this.searching = false;
    })
  }

}
