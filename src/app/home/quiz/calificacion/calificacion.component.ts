import { Component, Input, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';

import { Question } from 'src/app/home/models/question.model';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.scss'],
})
export class CalificacionComponent implements OnInit {
  @Input()
  conteoHijo: number;

  @Input() idBook : number;
  @Input() nameBook : string;
  llaveria: number;
  nameBuk: string;
  idL:number ;
  questionsList : Question[];

  public listBooks= [];
  constructor(private bookService: BookServiceService) { }
  
  ngOnInit() {
    this.findBooks();
    
  }

  findBooks() {
    this.bookService.findAllBooks().subscribe( (res: any) => {
        //console.log(res);
        this.listBooks = res.data;
        console.log(" del servicio");
        //console.log(this.listBooks);
        //console.log(this.idBook+" id del libro");
        for(let list of this.listBooks){
          //console.log(list.nameBook);
          if(list.idBook==this.idBook){
            console.log("entra for");
            this.nameBuk=list.nameBook;
            console.log(this.nameBuk);
          }
        }
      });
  }




}
