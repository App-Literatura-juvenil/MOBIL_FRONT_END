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
import { selecUser } from 'src/app/home/models/selecUser.model';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
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
  listQuestions : any = [];
  listAnswers : any = [];
  cal = [];
  cal2 = [];
  calificar = false;
  home = false;
  quiz= false;
  selectedAnswer = [] ;
  selecRes :any= [];
  questionsList : Question[];
  public varMap = new Map();
  conteo:number = 0;
  public conteo2:number = 0;

  
  valueChanged(event){
    this.selectedAnswer= event.target.value;
    if(this.varMap!=null){
      console.log("Entra");
      for(let cargaPreguntas of this.Respuesta){
          if(cargaPreguntas.idAnswer== event.target.value){
          this.varMap.set(cargaPreguntas.idQuestion,cargaPreguntas.isCorrect);
        }
      }
    }
    console.log(this.varMap.size +" tamaño");

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
        
        this.listQuestions.push(questions.idQuestion);
        this.selectedAnswer.push(questions.idQuestion);
        for(let resp of this.Respuesta){
          if(questions.idQuestion==resp.idQuestion){
           // console.log(resp.textAnswer);
           this.listAnswers.idAnswer.push(resp.idAnswer); 
           this.listAnswers.idQuestion.push(resp.idQuestion);
            
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
    //console.log(this.selecRes.length+" Prueba de boton");
    //console.log(this.varMap);
    
    for(let keys of this.varMap.keys()){
      this.conteo=this.varMap.get(keys);
      if(this.conteo==1){
        this.conteo2=this.conteo2+1;
      }
    }
    console.log(this.conteo2+"suma de correctas");

    for(let mues of this.selecRes){
      console.log(mues);
    }

    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Calificar',
        role: '',//destructive
        icon: 'checkmark-outline',
        handler: () => {
          console.log('Click en califica');
          //<app app-calificacion>
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
          this.conteo2=0;
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}
