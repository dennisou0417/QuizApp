import { Component, OnInit } from '@angular/core';
import { Quiz } from './model.quiz';
import { QuizService } from '../quiz.service'; 
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-quiz-home',
  templateUrl: './quiz-home.component.html',
  styleUrls: ['./quiz-home.component.css']
})
export class QuizHomeComponent implements OnInit {

  startFlag:boolean = true;
  nameFlag:boolean = false;
  quizFlag:boolean = false;
  resultFlag:boolean=false;
  msg: string;
  name:string;
  quizInfo:Quiz[] = [];

  constructor(public quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.loadQuizDetails().subscribe(data=>this.quizInfo=data);
  }

  loadName(): void{
    if(this.startFlag == true){
      this.nameFlag = true;
      this.startFlag = false;
    }
  }

  checkName(userObj):void{
    if(userObj == ""){
      this.msg = "Please Enter Your Name";
    }else{
      this.name = userObj;
      this.nameFlag = false;
      this.quizFlag = true;
      this.loadQuestion();
    }
  }

  i=0;
  question="";
  choice1="";
  choice2="";
  choice3="";
  choice4="";
  answer="";
  correct=0;

  loadQuestion():void{
    if(this.i < this.quizInfo.length){
      this.question = this.quizInfo[this.i].question;
      this.choice1 = this.quizInfo[this.i].choice1;
      this.choice2 = this.quizInfo[this.i].choice2;
      this.choice3 = this.quizInfo[this.i].choice3;
      this.choice4 = this.quizInfo[this.i].choice4;
      this.answer = this.quizInfo[this.i].answer;
      this.i++;
    }else{
      this.quizFlag=false;
      this.resultFlag=true;
    }
  }

  checkAnswer(choice):void{
    if(choice === this.answer){
      this.correct+=1;
      this.loadQuestion();
    }else{
      console.log("wrong");
    }
  }
  
}
