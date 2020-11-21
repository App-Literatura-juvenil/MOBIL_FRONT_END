import { Component, OnInit} from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
 
 
  public listBooks = [];
  constructor(private bookService: BookServiceService, private router: Router,
    ) { }
  
  ngOnInit() {
    this.findBooks();
  }

  findBooks() {
    this.bookService.findAllBooks().subscribe( (res: any) => {
        console.log(res);
        this.listBooks = res.data;
        console.log(this.listBooks);
      });
  }
  selectItem(item){
    console.log(item)
    this.router.navigate(['pregunta',item.idBook]);
  }
}
