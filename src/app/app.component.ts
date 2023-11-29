import { Component, Inject } from '@angular/core';
import { Book } from './books.model';
import { Observable } from 'rxjs';
import { GoogleBooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ksiegarnia';

  public books: Observable<Book[]>;
  constructor(
    @Inject(GoogleBooksService) private bookService: GoogleBooksService
  ) {
    this.books = this.bookService.searchBooks('Mickiewicz');
  }
}
