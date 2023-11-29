import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from './books.model';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  private url = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) {}

  searchBooks(searchTerm: string): Observable<Book[]> {
    return this.http.get<any>(`${this.url}'${searchTerm}`).pipe(
      map((response) => {
        return response['items'].map(
          (book: { volumeInfo: { title: string; description: string } }) => {
            return {
              title: book.volumeInfo.title,
              description: book.volumeInfo.description,
            };
          }
        );
      })
    );
  }
}
