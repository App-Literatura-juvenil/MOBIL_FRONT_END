import { Component, OnInit, Input } from '@angular/core';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import { AnswerServiceService} from 'src/app/services/answer-service.service';
import { ActionSheetController } from '@ionic/angular';
import {​​​​​ ActivatedRoute }​​​​​ from '@angular/router';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss'],
})
export class PreguntasComponent implements OnInit {
  @Input() idBook : number;
  @Input() idQuestion : number;
  public listQuestions = [];
  public listAnswers = [];

  constructor(public actionSheetController: ActionSheetController, 
    private Route:ActivatedRoute,
    private questionService: QuestionServiceService, 
    private answerService: AnswerServiceService) {}
       
  ngOnInit() {
    this.Route.paramMap.subscribe(params=>{​​​​​
      this.idBook=Number(params.get('idBook'));
      this.idQuestion=Number(params.get('idQuestion'));
      this.ListQuestion();
      this.ListAnswer();
    }​​​​​);
  }

  //Lista de preguntas
  ListQuestion(){
    if(this.idBook){
      this.questionService.findByIdBookQuestion(this.idBook).subscribe( (res: any) => {
        console.log(res);
        this.listQuestions = res.data;
      });
    }
  }

  //Lista de respuesta
  ListAnswer(){
    if(this.idQuestion){
      this.answerService.findByIdQuestionAnswer(this.idQuestion).subscribe( (res: any) => {
        console.log(res);
        this.listAnswers = res.data;
      });
    }
   
  }




  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}
