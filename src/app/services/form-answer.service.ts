import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormAnswerService {
  private key: string = 'score';

  private answeredQuestions = new BehaviorSubject<number>(
    JSON.parse(window.sessionStorage.getItem(this.key) || '{}').score
  );

  answeredQuestions$ = this.answeredQuestions.asObservable();

  constructor() {
    console.log(this.answeredQuestions.value);
    
  }

  setScore(value: number) {
    sessionStorage.setItem(this.key, JSON.stringify({score: value}));
    this.answeredQuestions.next(value);
  }

  plusScore(total:number) {
    let currentValue = this.answeredQuestions.value;
    if (currentValue < total){
      this.setScore(currentValue + 1);
    }
  }

 
}
