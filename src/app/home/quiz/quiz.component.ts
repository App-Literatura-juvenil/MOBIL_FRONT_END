import { Component, OnInit} from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { Router } from '@angular/router'
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
 
 
  public listBooks = [];
  constructor(private bookService: BookServiceService, private router: Router,
    public loadingController: LoadingController) { }
  
  ngOnInit() {
    this.findBooks();
    this.presentLoading()
  }

  findBooks() {
    this.bookService.findAllBooks().subscribe( (res: any) => {
        console.log(res);
        this.listBooks = res.data;
        console.log(this.listBooks);
      });
  }
  selectItem(item){
    console.log(item)
    this.router.navigate(['pregunta',item.idBook]);
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor espere...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }
}//fin clase
