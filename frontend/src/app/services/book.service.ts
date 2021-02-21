import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  _url: string = 'http://localhost:8000/books';

  constructor(private http: HttpClient) { }

  getBooks() {
    let header: HttpHeaders = new HttpHeaders()
      .set('Type-Contetn','application/json');
    
    return this.http.get(this._url, {headers:header});
  }
  getBook(id: string) {
    let header: HttpHeaders = new HttpHeaders()
      .set('Type-Contetn','application/json');
    
    return this.http.get(this._url+`/${id}`, {headers:header});
  }
}
