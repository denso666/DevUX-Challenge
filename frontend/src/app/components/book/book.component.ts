import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book:Book = new Book;

  constructor() { }

  ngOnInit(): void {
  }
  view(): void {
    console.log('view');
  }
}
