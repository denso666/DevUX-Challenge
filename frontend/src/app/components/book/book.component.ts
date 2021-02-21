import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from 'src/app/services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book:Book = new Book;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.bookService.getBook(id)
      .subscribe( res => {
        this.book = Object.values(res)[0];
      });
    }
  }
}
