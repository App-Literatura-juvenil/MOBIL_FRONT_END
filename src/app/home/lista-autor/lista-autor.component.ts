import { Component, OnInit } from '@angular/core';
import { AuthorServiceService } from '../../services/author-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-autor',
  templateUrl: './lista-autor.component.html',
  styleUrls: ['./lista-autor.component.scss'],
})
export class ListaAutorComponent implements OnInit {

  public listAuthors = [];

  constructor(private authorservices: AuthorServiceService,private router:Router) { }

  ngOnInit() {
    this.findAuthor();
  }

  findAuthor(){
    this.authorservices.findAllAuthors().subscribe( (res: any) => {
      console.log(res);
      this.listAuthors = res.data;
    });
  }

  selectItem(author){
   console.log(author);
   let selectedId = parseInt(author.idAuthor)
   this.router.navigate(["/libros",selectedId]);
 
  }

}
