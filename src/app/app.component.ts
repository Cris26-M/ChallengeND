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

  sectionList?: Section[];

  constructor(private sectionService: SectionService, private questionService: QuestionsService) {}
  ngOnInit() {
     this.sectionService.getAll().subscribe((data: any) => {
      console.log(data);
      this.sectionList = data;
    });
  }
}
