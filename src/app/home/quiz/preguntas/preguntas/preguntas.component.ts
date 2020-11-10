import { Component, OnInit, Input } from '@angular/core';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import { AnswerServiceService} from 'src/app/services/answer-service.service';
import { ActionSheetController } from '@ionic/angular';
import {​​​​​ ActivatedRoute }​​​​​ from '@angular/router';
import { QuizComponent } from 'src/app/home/quiz/quiz.component';
import ListQuestion2 from 'src/assets/Question/QuestionDB.json';
import ListAnswer2 from 'src/assets/Question/AnswerDB.json';
@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss'],
  providers: [QuizComponent]
})
export class PreguntasComponent implements OnInit {
  
  @Input() idBook : number;
  @Input() idQuestion : number;
  @Input() itemB: number;
  Preguntas: any = ListQuestion2;//json de questionDB
  Respuesta: any = ListAnswer2;//json de answerDB
  public listQuestions = [];
  public listAnswers = [];

  constructor(public actionSheetController: ActionSheetController, 
    private Route:ActivatedRoute,
    private questionService: QuestionServiceService, 
    private answerService: AnswerServiceService,
    private itemt: QuizComponent) {}
       
  ngOnInit() {
    this.Route.paramMap.subscribe(params=>{​​​​​
      this.idBook=Number(params.get('idBook'));
      //console.log(this.idBook)
      this.itemB=this.idBook;
      //this.ListQuestion();
      //this.ListAnswer();
      //this.ListQuestion2();
      console.log(this.itemB+" Hola")
    }​​​​​);
    this.ListQuestion();
  }
  prueba : number;
  
  ListQuestion(){
    for(let questions of this.Preguntas){
      
      if(this.itemB==questions.idBook){
        console.log(questions.textQuestion);
        
        this.listQuestions.push(questions);
        for(let resp of this.Respuesta){
          if(questions.idQuestion==resp.idQuestion){
            console.log(resp.textAnswer);
            this.listAnswers.push(resp);
          }
        }
        //this.listQuestions=textQuestion.textQuestion;
        //this.prueba=this.prueba+1;
      }
      
    }
    console.log(this.listQuestions+ " Longitud de preguntas");
    //for(let x of this.listQuestions){
      //console.log(x);
    //}
  }
  

  //Lista de preguntas
  //ListQuestion(){
    //if(this.idBook){
      //this.questionService.findByIdBookQuestion(this.idBook).subscribe( (res: any) => {
        //console.log(res);
        //this.listQuestions = res.data;
      //});
    //}
  //}

  //Lista de respuesta
  //ListAnswer(){
    //if(this.idQuestion){
      //this.answerService.findByIdQuestionAnswer(this.idQuestion).subscribe( (res: any) => {
        //console.log(res);
        //this.listAnswers = res.data;
      //});
    //}
   
  //}




  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Calificar',
        role: '',//destructive
        icon: 'checkmark-outline',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Limpiar',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancelar evaluación, y regresar a las evaluaciones',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Cancelar evaluación, y regresar al menu principal',
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
