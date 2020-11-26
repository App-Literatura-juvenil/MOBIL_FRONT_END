import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterServiceService } from '../../services/chapter-service.service';


@Component({
  selector: 'app-view-capitulo',
  templateUrl: './view-capitulo.component.html',
  styleUrls: ['./view-capitulo.component.scss'],
})

export class ViewCapituloComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private capService: ChapterServiceService
    ) { }
    
   
    public chapters: any;
    public chapter: any;
    

  ngOnInit() {
    this.goToViewCap();
  }

  goToViewCap(){
    this.route.paramMap.subscribe(params =>{
      if (params.has("idChapter")){
        this.capService.findByIdChapter(parseInt(params.get("idChapter"))).subscribe(
          chapters => {this.chapters = chapters;
          console.log(this.chapters)});
      }
    });
  }

  Onclick1(){
    this.decir(this.chapters.chapter.textChapter);
  }

  decir(texto){
    console.log(texto);
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
  }

  nextCap(){
    
  }

  backCap(){

  }

}
