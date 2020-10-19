import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  public findAllBooks() {
    return this.http.get(`${environment.urlApi}book`);
  }

  public findByIdAuthorBooks(idAuthor: number) {
    return this.http.get(`${environment.urlApi}book/authorBook/${idAuthor}`);
  }
}
