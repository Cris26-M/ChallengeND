import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Section } from '../models/Section';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root',
})
export class SectionService {
  private sectionInfo = new BehaviorSubject<Section[]>([]);

  sectionsInfo$ = this.sectionInfo.asObservable();

  constructor(private http: HttpClient) {
  }

  getAll() {
    this.http
      .get<Response>('/assets/sections.json')
      .pipe(map((response) => response?.result?.sections || []))
      .pipe(delay(1000))
      .subscribe((data: any) => {
        this.sectionInfo.next(data);
      });
  }
}
