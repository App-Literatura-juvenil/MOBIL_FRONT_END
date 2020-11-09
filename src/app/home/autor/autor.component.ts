import { Component, OnInit } from '@angular/core';
import { AuthorServiceService } from '../../services/author-service.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss'],
})
export class AutorComponent implements OnInit {

  public listAuthors = [];
  constructor(private authorservices: AuthorServiceService) { }

  ngOnInit() {
    this.findAuthor();
  }

  findAuthor(){
    this.authorservices.findAllAuthors().subscribe( (res: any) => {
      console.log(res);
      this.listAuthors = res.data;
    });
  }

}
