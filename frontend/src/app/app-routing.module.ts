import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  {
    path:'books',
    component: BookListComponent
  },
  {
    path:'books/:id',
    component: BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
