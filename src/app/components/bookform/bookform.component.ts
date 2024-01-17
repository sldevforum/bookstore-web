import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookInterface } from '../../interfaces/book';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bookform',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './bookform.component.html',
  styleUrl: './bookform.component.css',
})
export class BookformComponent {
  formBuilder = inject(FormBuilder);
  httpService = inject(HttpService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  snackBar = inject(MatSnackBar);
  bookForm = this.formBuilder.group({
    id: [0, [Validators.required]],
    title: ['', [Validators.required]],
    author: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: [0, [Validators.required]],
  });
  bookID!: number;
  isEdit = false;
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
  ngOnInit() {
    this.bookID = this.route.snapshot.params['id'];
    if (this.bookID) {
      this.isEdit = true;
      this.httpService.getBook(this.bookID).subscribe((data) => {
        console.log(data);
        this.bookForm.patchValue(data);
      });
    }
  }
  save() {
    console.log('this.bookForm.value');
    console.log(this.bookForm.value);
    const book: BookInterface = {
      id: this.bookForm.value.id!,
      title: this.bookForm.value.title!,
      author: this.bookForm.value.author!,
      description: this.bookForm.value.description!,
      price: this.bookForm.value.price!,
    };

    if (this.isEdit) {
      this.httpService.updateBook(this.bookID, book).subscribe(() => {
        console.log('success');
        this.openSnackBar('Book Updated Successfully', 'Close');
        this.router.navigateByUrl('/');
      });
    } else {
      this.httpService.createBook(book).subscribe(() => {
        console.log('success');
        this.openSnackBar('Book Created Successfully', 'Close');
        this.router.navigateByUrl('/');
      });
    }
  }
}
