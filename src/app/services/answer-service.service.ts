import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AnswerServiceService{
    constructor(private http: HttpClient){}
        
    public findByIdQuestionAnswer(idQuestion:Number){
        return this.http.get(`${environment.urlApi}/answerQuestion/${idQuestion}`);
    }
}