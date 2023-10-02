import { Component, Input, OnInit } from '@angular/core';
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
}
