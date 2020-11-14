import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import { AnswerServiceService} from 'src/app/services/answer-service.service';
import { ActionSheetController } from '@ionic/angular';
import {​​​​​ ActivatedRoute }​​​​​ from '@angular/router';
import { QuizComponent } from 'src/app/home/quiz/quiz.component';
import ListQuestion2 from 'src/assets/Question/QuestionDB.json';
import ListAnswer2 from 'src/assets/Question/AnswerDB.json';
import { CalificacionComponent } from 'src/app/home/quiz/calificacion/calificacion.component';
import { Question } from 'src/app/home/models/question.model';
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
  listQuestions= [];
  listAnswers = [];
  cal = [];
  cal2 = [];
  calificar = false;
  home = false;
  quiz= false;
  radioSelected:string ;

  questionsList : Question[];
  valueChanged(){
    this.cal2.push(this.radioSelected);
    console.log(this.cal2.length+" Preguntas adicionadas");
    alert();
    //for(let algo of this.cal2){
      //console.log(this.cal2);
    //}
  }

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
      this.questionService.findByIdBookQuestion(this.idBook).subscribe(
        (questions)=>{
          this.questionsList=questions;
        }
      );
    }​​​​​);

    
    //this.ListQuestion();
  }
  prueba : number;
  
  ListQuestion(){
    for(let questions of this.Preguntas){
      
      if(this.itemB==questions.idBook){
        //console.log(questions.textQuestion);
        
        this.listQuestions.push(questions);
        for(let resp of this.Respuesta){
          if(questions.idQuestion==resp.idQuestion){
           // console.log(resp.textAnswer);
            this.listAnswers.push(resp);
            this.cal.push(resp);
          }
        }
        //this.listQuestions=textQuestion.textQuestion;
        //this.prueba=this.prueba+1;
      }
      
    }
    console.log(this.listQuestions+ " Longitud de preguntas");
    console.log(this.cal.length+" Preguntas para calificar");
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
          console.log('Click en califica');
          this.calificar = true;
        }
      }, {
        text: 'Cancelar evaluación, y regresar a las evaluaciones',
        role: '',
        icon: 'albums-outline',
        handler: () => {
          console.log('Play clicked');
          this.quiz = true;
        }
      }, {
        text: 'Cancelar evaluación, y regresar al menu principal',
        role: '',
        icon: 'book-outline',
        handler: () => {
          console.log('Favorite clicked');
          this.home=true;
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
