import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  constructor(private http: HttpClient) { }

  public findAllAuthors() {
    return this.http.get(`${environment.urlApi}author`);
  }

  public findByIdAuthor(idAuthor: number) {
    return this.http.get(`${environment.urlApi}author/${idAuthor}`);
  }

  public findByNameAuthor(name: string){
    return this.http.get(`${environment.urlApi}author/name/${name}`);
  }

  public findBySurnameAuthor(surname: string){
    return this.http.get(`${environment.urlApi}author/surname/${surname}`);
  }
}
