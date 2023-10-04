import { TestBed } from '@angular/core/testing';

import { QuestionsService } from './questions.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('QuestionsService', () => {
  let questionService: QuestionsService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuestionsService],
    });

    (questionService = TestBed.inject(QuestionsService)),
      (httpTestingController = TestBed.inject(HttpTestingController));
  });



  it('should be created', () => {
    expect(questionService).toBeTruthy();
  });
});
