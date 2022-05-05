import {Component, OnInit} from '@angular/core';
import {faCoffee, faRefresh, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {QuestionService} from "../../services/question.service";
import {Question, QuestionsEntity} from "../../types/Question";
import {interval} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'quiz-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public progressBarPercentage: number = 0;
  // font awesome icon
  faRefresh = faRefresh;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;


  public contestent_name: string = "";

  public questionList: any = [];
  public currentQuestion: number = 0;

  public points: number = 0;
  public numberOfQuestion: number = 0;
  public timer: number = 60;
  public correctAnswer: number = 0;
  public inCorrectAnswer: number = 0;
  public completeSteps=0;
  public quizCompleted: boolean= false;

  private interval$: any;

  constructor(
    private questionService: QuestionService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this.contestent_name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }


  getAllQuestions() {
    this.questionService.getQuestions()
      .subscribe({
        next: (resp) => {
          console.log(resp?.questions)

          this.questionList = resp?.questions;
          this.numberOfQuestion = this.questionList.length;
        }
      })
  }

  nextQuestion(): void {
    this.currentQuestion += 1;
    this.completeSteps+=1;
    this.increaseProgressValue();
    if (this.currentQuestion === this.questionList?.length - 1) {
      this.interval$.unsubscribe()
      this.quizCompleted=true;
    }
  }

  previousQuestion() {
    this.currentQuestion -= 1

  }

  attemptAnswer(  currentQuestion:number, option: any) {

      if (currentQuestion=== this.questionList.length){
        this.quizCompleted=true;
        this.stopCounter();
      }
      if (option.correct) {
        this.points += 10;
       setTimeout( ()=> {
         this.correctAnswer += 1;
         this.currentQuestion+=1;
         this.completeSteps+=1;
         this.increaseProgressValue();

       },1000)
      } else {
        this.points -= 10;
     setTimeout(()=>{
       this.inCorrectAnswer += 1;
       this.currentQuestion+=1;
       this.completeSteps+=1;
       this.increaseProgressValue();
     },1000)
      }



  }

  startCounter() {
    this.interval$ = interval(1000).subscribe({
      next: () => {
        this.timer--;
        if (this.timer === 0) {
          this.currentQuestion += 1;
          this.points -= 10;

        }
        if (this.currentQuestion === this.questionList.length - 1) {
          this.interval$.unsubscribe()
        }
      }
    })
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000)
  }

  stopCounter() {
    this.interval$.unsubscribe()
    this.timer=0;
  }

  resetCounter() {
    this.stopCounter()
    this.progressBarPercentage=0;
    this.timer=60
    this.startCounter()
  }


  resetQuiz() {
     this.resetCounter();
     this.getAllQuestions();
     this.points=0;
     this.currentQuestion=0;
     this.completeSteps=0;
  }

  private increaseProgressValue() : number{
    this.progressBarPercentage=( (this.currentQuestion/this.questionList?.length)*100);
    return this.progressBarPercentage;
  }

  startQuizAgain() {
    localStorage.removeItem('name');
    this.router.navigateByUrl('/');
  }
}
