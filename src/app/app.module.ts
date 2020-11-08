import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuizHomeComponent } from './quiz-home/quiz-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
  QuizHomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [QuizHomeComponent]
})
export class AppModule { }
