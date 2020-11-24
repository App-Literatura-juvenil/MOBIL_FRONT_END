import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { from, of } from 'rxjs';
import { Question } from '../home/models/question.model';

@Injectable({
  providedIn: 'root'
})

export class QuestionServiceService{
    constructor(private http: HttpClient){}
    
    public findByIdBookQuestions(idBook:Number){
      return this.http.get(`${environment.urlApi}question/questionBook/${idBook}`);
    }

}
