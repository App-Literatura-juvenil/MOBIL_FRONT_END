import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorServiceService } from 'src/app/services/author-service.service';

@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.component.html',
  styleUrls: ['./biografia.component.scss'],
})
export class BiografiaComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private  authorservices: AuthorServiceService,
  ) { }

   public biografia: any;

  ngOnInit() {
    this.gotoBiografia();
  }

    gotoBiografia(){
      this.route.paramMap.subscribe(params =>{       
          if (params.has("idAuthor")){
                console.log(params.get("idAuthor"));
              this.authorservices.findByIdAuthor(parseInt(params.get("idAuthor"))).subscribe(
                biografia => {this.biografia = biografia; 
                                    console.log(this.biografia)});
            
              }
           }
        )
    }


}
