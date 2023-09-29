import { Component, Input, OnInit } from '@angular/core';
import { SectionService } from '../services/section.service';
import { Section } from '../models/Section';
import { QuestionsService } from '../services/questions.service';
import { Question } from '../models/Question';

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

  questions?: Question[];

  constructor(private questionSrv: QuestionsService) {}

  ngOnInit(): void {
    this.questionSrv
      .getAllQuestions(this.sectionInfo?.sectionOccurrenceId)
      .subscribe((data: any) => {
        this.questions = data.questions;
      });
  }

  sectionSelectedClass = () => {
    if (this.questionsActive) {
      return 'section--selected';
    } else {
      return 'section';
    }
  };
}
