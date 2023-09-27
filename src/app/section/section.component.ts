import { Component, Input, OnInit } from '@angular/core';
import { SectionService } from '../services/section.service';
import { Section } from '../models/Section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit{
  @Input()
  questionsActive = false;

  @Input()
  sectionInfo?: Section;

  ngOnInit(): void {
    console.log(this.sectionInfo);
    
  }

  sectionSelectedClass = () => {
    if (this.questionsActive) {
      return 'section--selected'
    } else {
      return 'section'
    }
  }
}
