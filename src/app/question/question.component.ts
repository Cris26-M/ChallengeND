import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  ngOnInit(): void {
    this.haveDepend = this.questionInfo?.hasOwnProperty("dependentQuestion");
    this.questionNumber = this.sectionNumber + '.' + this.index
  
  }
  @Input()
  type = 'dropdown';

  @Input()
  index = 0;

  @Input()
  sectionNumber = 0;

  questionNumber = '';

  haveDepend? = false;

  @Input()
  questionInfo?: Question;
}
