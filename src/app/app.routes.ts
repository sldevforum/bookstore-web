import { Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookformComponent } from './components/bookform/bookform.component';

export const routes: Routes = [
  {
    path: '',
    component: BooksListComponent,
  },
  {
    path: 'books',
    component: BooksListComponent,
  },
  {
    path: 'create',
    component: BookformComponent,
  },
  {
    path: 'book/:id',
    component: BookformComponent,
  },
];
