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

  ngOnInit() {
    this.goToViewCap();
  }

  goToViewCap(){
    this.route.paramMap.subscribe(params =>{
      console.log(params.has("idChapter"));  
      if (params.has("idChapter")){
        console.log(params.get("idChapter"));
        this.capService.findByIdChapter(parseInt(params.get("idChapter"))).subscribe(
          chapters => {this.chapters = chapters;
          console.log(this.chapters)});
      }
    });
  }

}
