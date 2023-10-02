import { Component, Input, OnInit } from '@angular/core';
import { Section } from './models/Section';
import { SectionService } from './services/section.service';
import { QuestionsService } from './services/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'challengeTestApp';

  sectionList: Section[] = [];

  constructor(private sectionService: SectionService) {}
  ngOnInit() {
     this.sectionService.sectionsInfo$.subscribe(list => this.sectionList = list)
     
  }

  changeSectionName(test:string){
    this.sectionService.editTest(test)
  }
}
