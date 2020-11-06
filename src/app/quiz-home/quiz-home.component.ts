import { Component, OnInit } from '@angular/core';
import { Quiz } from "./model.quiz";

@Component({
  selector: 'app-quiz-home',
  templateUrl: './quiz-home.component.html',
  styleUrls: ['./quiz-home.component.css']
})
export class QuizHomeComponent implements OnInit {

  flag:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  loadName(): void{
    this.flag = true;
  }

}
