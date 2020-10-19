import { Component, Input, OnInit } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss'],
})
export class LibrosComponent implements OnInit {

  @Input() idAuthor;
  public listBooks = [];
  constructor(private bookService: BookServiceService) { }

  ngOnInit() {
    this.findBooks();
  }

  findBooks() {
    if (this.idAuthor) {
      this.bookService.findByIdAuthorBooks(this.idAuthor).subscribe( (res: any) => {
        console.log(res);
        this.listBooks = res.data;
      });
    } else {
      this.bookService.findAllBooks().subscribe( (res: any) => {
        console.log(res);
        this.listBooks = res.data;
      });
    }
  }
}
