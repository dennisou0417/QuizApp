import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from './quiz-home/model.quiz';

@Injectable({
    providedIn: 'root'
})

export class QuizService{
    constructor(private httpClient: HttpClient){}

    loadQuizDetails():Observable<Quiz[]>{
        return this.httpClient.get<Quiz[]>("https://my-json-server.typicode.com/dennisou0417/quizQuestions/data");
    }
}