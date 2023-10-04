import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from 'src/app/models/Answer';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-number-question',
  templateUrl: './number-question.component.html',
  styleUrls: ['./number-question.component.scss'],
})
export class NumberQuestionComponent {
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
