import { Injectable } from '@angular/core';
import {BehaviorSubject, delay, map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Section } from '../models/Section';
import { Response } from '../models/Response';
import { QuestionsService } from './questions.service';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private sectionInfo = new BehaviorSubject<Section[]>([])

  sectionsInfo$ = this.sectionInfo.asObservable()

  constructor(private http: HttpClient) {
    this.getAll()
  }

  getAll() {
    this.http.get<Response>('/assets/sections.json')
      .pipe(map(response => (response?.result?.sections || [])))
      .pipe(delay(1000)).subscribe((data:any)=>{
        this.sectionInfo.next(data)
      }
      );
  }

  editTest(test:string) {
    const newInfo = [...this.sectionInfo.value];
    newInfo[0].name = test;
    this.sectionInfo.next(newInfo)
  }
}