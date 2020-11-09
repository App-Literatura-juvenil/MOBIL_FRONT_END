import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ChapterServiceService {

    constructor(private http: HttpClient) { }

    public findByIdChapter(idChapter: number) {
        return this.http.get(`${environment.urlApiTest}chapter/${idChapter}`);
    }

    public findByIdBookChapter(idBook: number){
        return this.http.get(`${environment.urlApiTest}chapter/chapterBook/${idBook}`);
    }

}