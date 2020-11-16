import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';
import { ActivatedRoute } from '@angular/router';
import { ChapterServiceService } from '../../services/chapter-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.scss'],
})
export class CapitulosComponent implements OnInit {

  @Input() idBook;
  public listChapters = [];
  constructor(
    private chapterService: ChapterServiceService, 
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.findByIdBookChapter();
    this.goToCapitulo();
  }

  findByIdBookChapter() {
      if(this.idBook){
        this.chapterService.findByIdBookChapter(this.idBook).subscribe( (res: any)  => {
          console.log(res);
          this.listChapters = res.data;
        });
      }
  }

  goToCapitulo(){
    this.route.paramMap.subscribe(params =>{       
      if (params.has("idBook")){
        console.log(params.get("idBook"));
        this.idBook = params.get("idBook");
        this.findByIdBookChapter();
      }
    });
  }

  selectItem(chapter){
    console.log(chapter);
    let selectedId = parseInt(chapter.idChapter)
    this.router.navigate(["/view-capitulo",selectedId]);
  
   }

  
}
