import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
    {id:1,name:"The red planet",author:"Carl Sagan",publication_date:"01-02-1999"},
    {id:2,name:"Antropologia del Cerebro",author:"denso",publication_date:"01-02-1999"},
    {id:3,name:"Teoria de relatividad",author:"Shagen Hacyan",publication_date:"01-02-1999"},
    {id:4,name:"Maxium",author:"Felipe Jimenez",publication_date:"01-02-1999"}
  ];
  _url: string = 'http://localhost:8000/books';

  constructor(private http: HttpClient) { }
  getBooks() {
    let header: HttpHeaders = new HttpHeaders()
      .set('Type-Contetn','application/json');
    
    return this.http.get(this._url, {headers:header});
  }
}
