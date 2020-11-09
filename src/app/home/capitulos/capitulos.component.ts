import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';
import { ActivatedRoute } from '@angular/router';
import { ChapterServiceService } from '../../services/chapter-service.service';

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.scss'],
})
export class CapitulosComponent implements OnInit {

  @Input() idBook: number;
  public listChapters = [];
  constructor(private chapterService: ChapterServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.findByIdBookChapter();
    })
  }

  findByIdBookChapter() {
      if(this.idBook){
        this.chapterService.findByIdBookChapter(this.idBook).subscribe( (res: any)  => {
          console.log(res);
          this.listChapters = res.data;
        });
      }
  }
}
