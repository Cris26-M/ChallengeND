import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberQuestionComponent } from './number-question.component';
import { FormsModule } from '@angular/forms';

describe('NumberQuestionComponent', () => {
  let component: NumberQuestionComponent;
  let fixture: ComponentFixture<NumberQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [NumberQuestionComponent]
    });
    fixture = TestBed.createComponent(NumberQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
