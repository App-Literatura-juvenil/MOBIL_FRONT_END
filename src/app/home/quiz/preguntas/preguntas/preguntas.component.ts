import { Component, OnInit, Input } from '@angular/core';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import { ActionSheetController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { QuizComponent } from 'src/app/home/quiz/quiz.component';
import { AnswerServiceService } from '../../../../services/answer-service.service';


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss'],
  providers: [QuizComponent]
})
export class PreguntasComponent implements OnInit {

  @Input() idBook: number;
  @Input() idQuestion: number;
  cal = [];
  calificar = false;
  home = false;
  quiz = false;
  selectedAnswer = [];
  selecRes: any = [];
  questionsList: any = [];
  answerList: any = [];
  listQuestion: any = [];
  listAnswer: any = [];
  public varMap = new Map();
  conteo: number = 0;
  public conteo2: number = 0;

  constructor(public actionSheetController: ActionSheetController,
    private Route: ActivatedRoute,
    private questionService: QuestionServiceService,
    private answerService: AnswerServiceService) { }

  ngOnInit() {
    this.generarQuiz();
  }

  generarQuiz() {
    this.Route.paramMap.subscribe(params => {

      this.idBook = Number(params.get('idBook'));

      this.questionService.findByIdBookQuestions(this.idBook).subscribe(
        (questions) => {
          this.questionsList = questions;
        }
      );
      this.answerService.findByIdQuestionAnswer(this.idBook).subscribe(
        (answers: any) => {
          this.answerList = answers.data;
          console.log(answers.data)
        }
      );
    });
  }

  valueChanged(event) {
    this.selectedAnswer = event.target.value;
    console.log(this.answerList)
    console.log(event.target.value)
    if (this.varMap != null) {
      console.log("Entra");
      for(let item of this.answerList){
        for (let cargaPreguntas of item.listAnswers) {
          if (cargaPreguntas.idAnswer == event.target.value) {
            this.varMap.set(item.idQuestion, cargaPreguntas.isCorrect);
          }
        }
      }

    }
    console.log(this.varMap.size + " tamaño");

  }

  async presentActionSheet() {
    for (let keys of this.varMap.keys()) {
      this.conteo = this.varMap.get(keys);
      if (this.conteo == 1) {
        this.conteo2 = this.conteo2 + 1;
      }
    }
    console.log(this.conteo2 + "suma de respuestas correctas");

    for (let mues of this.selecRes) {
      console.log(mues);
    }

    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Calificar',
        role: '',
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
          this.home = true;
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          this.conteo2 = 0;
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
