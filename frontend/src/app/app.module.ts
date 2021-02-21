import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// navigation
import { NavigationComponent } from './components/navigation/navigation.component';

// books
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';
import { BookService } from './services/book.service';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
