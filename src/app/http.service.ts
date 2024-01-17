import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BookInterface } from './interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiURL = 'https://studentapidemo.azurewebsites.net';
  http = inject(HttpClient);
  constructor() {}

  getAllBooks() {
    return this.http.get<BookInterface[]>(this.apiURL + '/books');
  }

  createBook(book: BookInterface) {
    return this.http.post(this.apiURL + '/books', book);
  }

  getBook(bookID: number) {
    return this.http.get<BookInterface>(this.apiURL + '/books/' + bookID);
  }

  updateBook(bookID: number, book: BookInterface) {
    return this.http.put<BookInterface>(this.apiURL + '/books/' + bookID, book);
  }

  deleteBook(bookID: number) {
    return this.http.delete(this.apiURL + '/books/' + bookID);
  }
}
