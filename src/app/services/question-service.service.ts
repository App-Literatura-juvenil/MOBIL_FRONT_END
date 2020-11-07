import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class QuestionServiceService{
    constructor(private http: HttpClient){}
        
    public findByIdBookQuestion(idBook:Number){

      return this.http.get(`${environment.urlApi}/questionBook/${idBook}`);
    }
}