import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { from, of } from 'rxjs';
import ListQuestionBook1 from 'src/assets/Question/QuestionDB.json';
import { Question } from '../home/models/question.model';

@Injectable({
  providedIn: 'root'
})

export class QuestionServiceService{
    constructor(private http: HttpClient){}
        
    public findByIdBookQuestion(idBook:Number){

      //return this.http.get(`${environment.urlApi}questionBook/${idBook}`);
      return of(<Question[]>ListQuestionBook1);
    }

}
