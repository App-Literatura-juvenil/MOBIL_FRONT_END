import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';
import { ChapterServiceService } from '../../services/chapter-service.service';

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.scss'],
})
export class CapitulosComponent implements OnInit {

  @Input() idBook;
  public listChapters = [];
  constructor(private chapterService: ChapterServiceService) { }

  ngOnInit() {
    this.findByIdBookChapter();
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
