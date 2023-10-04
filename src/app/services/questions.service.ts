import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay, BehaviorSubject } from 'rxjs';
import { Question } from '../models/Question';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private questionsInfo = new BehaviorSubject<Question[]>([]);

  questionsInfo$ = this.questionsInfo.asObservable();

  constructor(private httpClient: HttpClient) {}

  getAllQuestions(sectionID?: string) {
    
    this.httpClient
      .get<Response>(`/assets/questions/${sectionID}.json`)
      .pipe(map((response) => response?.result))
      .pipe(delay(1000))
      .subscribe((data: any) => {        
        this.questionsInfo.next(data.questions);
      });
  }

  putAnswer(value:string){
    const updateInfo = [...this.questionsInfo.value];
    updateInfo[0].displayText = value
    this.questionsInfo.next(updateInfo)
    
  }
}
