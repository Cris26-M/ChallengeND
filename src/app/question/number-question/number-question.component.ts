import { Component, Input } from '@angular/core';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-number-question',
  templateUrl: './number-question.component.html',
  styleUrls: ['./number-question.component.scss'],
})
export class NumberQuestionComponent {
  @Input()
  questionInfo?: Question;
}
