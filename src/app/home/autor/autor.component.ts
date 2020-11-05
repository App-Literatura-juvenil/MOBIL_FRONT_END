import { Component, OnInit } from '@angular/core';
import { AuthorServiceService } from '../../services/author-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss'],
})
export class AutorComponent implements OnInit {

  public listAuthors = [];

  constructor(private authorservices: AuthorServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.findAuthor();
  }

  findAuthor(){
    this.authorservices.findAllAuthors().subscribe( (res: any) => {
      this.listAuthors = res.data;
    });
  }

  selectItem(author){
   console.log(author);
   let selectedId = parseInt(author.idAuthor)
   this.router.navigate(["/autores",selectedId,'biografia']);

 
  }

 }




