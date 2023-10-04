import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponent } from './question.component';
import { AppModule } from '../app.module';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[AppModule],
      declarations: [QuestionComponent]
    });
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
