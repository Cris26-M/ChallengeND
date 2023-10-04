import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer } from 'src/app/models/Answer';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-radio-question',
  templateUrl: './radio-question.component.html',
  styleUrls: ['./radio-question.component.scss'],
})
export class RadioQuestionComponent implements OnInit {
  ngOnInit(): void {
    if (this.questionInfo?.type !== 'radio') {
      this.isRadio = false;
    } else {
      this.isRadio = true;
    }
  }

  @Input()
  questionInfo?: Question;

  isRadio = true;

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
