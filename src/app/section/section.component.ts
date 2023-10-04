import { Component, Input, OnInit } from '@angular/core';
import { SectionService } from '../services/section.service';
import { Section } from '../models/Section';
import { QuestionsService } from '../services/questions.service';
import { Question } from '../models/Question';
import { BehaviorSubject } from 'rxjs';
import { FormAnswerService } from '../services/form-answer.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input()
  questionsActive = false;

  @Input()
  sectionInfo?: Section;

  @Input()
  sectionNumber: number = 0;

  answeredLabel = 0;

  questions?: Question[];

  constructor(
    private questionSrv: QuestionsService,
    private formAns: FormAnswerService
  ) {}

  ngOnInit(): void {
    this.questionSrv.getAllQuestions(this.sectionInfo?.sectionOccurrenceId);

    this.formAns.answeredQuestions$.subscribe(
      (score) => (this.answeredLabel = score)
    );

    this.questionSrv.questionsInfo$.subscribe(
      (list) => (this.questions = list)
    );

  }

  sectionSelectedClass = () => {
    if (this.questionsActive) {
      return 'section--selected';
    } else {
      return 'section';
    }
  };
}
