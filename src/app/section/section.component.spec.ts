import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComponent } from './section.component';
import { SectionService } from '../services/section.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FormAnswerService } from '../services/form-answer.service';
import { DebugElement } from '@angular/core';
import { AppModule } from '../app.module';
import { QuestionsService } from '../services/questions.service';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;
  let el: DebugElement;
  let questionService: any;

  beforeEach(() => {
    const questionsServiceSpy = jasmine.createSpyObj('QuestionService', [
      'getAllQuestions',
    ]);

    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: QuestionsService, useValue: questionsServiceSpy }],
    })
      
        fixture = TestBed.createComponent(SectionComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        questionService = TestBed.inject(QuestionsService);
     
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
