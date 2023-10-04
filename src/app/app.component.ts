import { Component, OnInit } from '@angular/core';
import { Section } from './models/Section';
import { SectionService } from './services/section.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'challengeTestApp';

  sectionList: Section[] = [];

  constructor(private sectionService: SectionService) {
    window.sessionStorage.setItem('score', JSON.stringify({ score: 0 }));
    sectionService.getAll()
  }

  ngOnInit() {
     this.sectionService.sectionsInfo$.subscribe(list => this.sectionList = list)
     
  }
  
}
