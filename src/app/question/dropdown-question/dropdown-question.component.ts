import { Component, Input } from '@angular/core';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-dropdown-question',
  templateUrl: './dropdown-question.component.html',
  styleUrls: ['./dropdown-question.component.scss'],
})
export class DropdownQuestionComponent {
  @Input()
  questionInfo?: Question;
}
