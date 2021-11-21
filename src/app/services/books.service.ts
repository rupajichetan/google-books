import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BOOKS_SERVER = 'https://www.googleapis.com/books';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(term: string) {
    return this.http
      .get(`${BOOKS_SERVER}/v1/volumes?q=${term}&maxResults=12`, { observe: 'response' })
  }
}
