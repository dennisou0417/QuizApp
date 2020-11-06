import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuizHomeComponent } from './quiz-home/quiz-home.component';


@NgModule({
  declarations: [
  QuizHomeComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [QuizHomeComponent]
})
export class AppModule { }
