import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownQuestionComponent } from './dropdown-question.component';
import { FormsModule } from '@angular/forms';

describe('DropdownQuestionComponent', () => {
  let component: DropdownQuestionComponent;
  let fixture: ComponentFixture<DropdownQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule
      ],
      declarations: [DropdownQuestionComponent]
    });
    fixture = TestBed.createComponent(DropdownQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
