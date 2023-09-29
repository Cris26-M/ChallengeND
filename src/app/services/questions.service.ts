import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, delay } from 'rxjs';
import { Question } from '../models/Question';
import { Response } from '../models/Response';
import { Section } from '../models/Section';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private httpClient: HttpClient) { }

  getAllQuestions(sectionID?:string): Observable<Question> {    
    return this.httpClient.get<Response>(`/assets/questions/${sectionID}.json`)
      .pipe(map(response => (response?.result)))
      .pipe(delay(1000));
  }

}
