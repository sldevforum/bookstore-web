import { Component, inject } from '@angular/core';
import { BookInterface } from '../../interfaces/book';
import { HttpService } from '../../http.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, RouterLink],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css',
})
export class BooksListComponent {
  router = inject(Router);
  snackBar = inject(MatSnackBar);
  booksList: BookInterface[] = [];
  httpService = inject(HttpService);
  displayedColumns: string[] = [
    'id',
    'title',
    'author',
    'description',
    'price',
    'actions',
  ];
  ngOnInit() {
    this.httpService.getAllBooks().subscribe((data) => {
      this.booksList = data;
      console.log(this.booksList);
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
  getBookFromServer() {
    this.httpService.getAllBooks().subscribe((result) => {
      this.booksList = result;
      console.log(this.booksList);
    });
  }
  edit(id: number) {
    console.log(id);
    this.router.navigateByUrl('/book/' + id);
  }
  delete(id: number) {
    this.httpService.deleteBook(id).subscribe(() => {
      this.openSnackBar('Book Deleted Successfully', 'Close');
      console.log('deleted');
      // this.bookList=this.bookList.filter(x=>x.id!=id);
      this.getBookFromServer();
    });
  }
}
