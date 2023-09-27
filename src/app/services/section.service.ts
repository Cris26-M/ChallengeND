import { Injectable } from '@angular/core';
import {delay, map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { Section } from '../models/Section';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Section[]> {
    return this.http.get<Response>('/assets/sections.json')
      .pipe(map(response => (response?.result?.sections || [])))
      .pipe(delay(1000));
  }
}