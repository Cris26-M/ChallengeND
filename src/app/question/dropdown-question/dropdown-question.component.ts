import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from 'src/app/models/Answer';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-dropdown-question',
  templateUrl: './dropdown-question.component.html',
  styleUrls: ['./dropdown-question.component.scss'],
})
export class DropdownQuestionComponent {
  @Input()
  questionInfo?: Question;

  @Output()
  handlerSelect = new EventEmitter<Answer>();

  selectedAnswer = '';

  onSelect() {
       this.handlerSelect.emit({
        answer: this.selectedAnswer,
        id: this.questionInfo?.id
       });
  }
}
