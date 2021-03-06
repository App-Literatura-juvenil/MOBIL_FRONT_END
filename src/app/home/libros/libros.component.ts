import { Component, Input, OnInit } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { AuthorServiceService } from 'src/app/services/author-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss'],
})
export class LibrosComponent implements OnInit {

  @Input() idAuthor;
  public listBooks = [];
  constructor(private bookService: BookServiceService, private route: ActivatedRoute,
  private router: Router) { }

  public libro: any;

  ngOnInit() {
    this.findBooks();
    this.goTolibro();
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
  goTolibro(){
    this.route.paramMap.subscribe(params =>{       
      if (params.has("idAuthor")){
        console.log(params.get("idAuthor"));
        this.idAuthor = params.get("idAuthor");
        this.findBooks();
      }
    });
  }

  selectItem(book){
    console.log(book);
    let selectedId = parseInt(book.idBook)
    this.router.navigate(["/capitulos",selectedId]);
   }

   selectItemQuestion(item){
    console.log(item)
    this.router.navigate(['pregunta',item.idBook]);
  }

}
