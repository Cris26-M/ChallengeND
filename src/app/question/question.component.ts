import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { Answer } from '../models/Answer';
import { FormAnswerService } from '../services/form-answer.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  constructor(private formAnsSvr: FormAnswerService) {}

  ngOnInit(): void {
    this.haveDepend = this.questionInfo?.hasOwnProperty('dependentQuestion');
    this.questionNumber = this.sectionNumber + '.' + this.index;
  }
  @Input()
  type = 'dropdown';

  @Input()
  index = 0;

  @Input()
  sectionNumber = 0;

  @Input()
  totalQuestions = 0;

  questionNumber = '';

  haveDepend? = false;

  dependantActive = false;

  @Input()
  questionInfo?: Question;

  handlerAnswer(value: Answer) {
    let validateID = this.idValidator(value.id);

    if (!validateID) {
      this.formAnsSvr.plusScore(this.totalQuestions);
      if (this.questionInfo?.response === value.answer) {
        this.dependantActive = true;
      } else {
        this.dependantActive = false;
      }
      console.log(this.questionInfo);
    } else {
      console.log(
        this.questionInfo?.dependentQuestion?.find(
          (question) => question.id == value.id
        )
      );
    }
  }

  idValidator(id?: string) {
    let isDependent = false;
    if (this.questionInfo?.id === id) {
      isDependent = false;
    } else {
      isDependent = true;
    }
    return isDependent;
  }
}
