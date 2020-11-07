import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  public listBooks = [];
  constructor(private bookService: BookServiceService) { }
  
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
}
