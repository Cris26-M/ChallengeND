import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SectionService } from './section.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Section } from '../models/Section';

describe('SectionService', () => {
  let service: SectionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SectionService],
    });
    service = TestBed.inject(SectionService);
    httpMock = TestBed.inject(HttpTestingController);

    service.getAll()
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create a request', () => {
    const dummySections: Section[] = [
      {
        sectionOccurrenceId: '5b5c83c81b516550869cc802604bcbad',
        status: 'not_started',
        issueStatus: {
          hardStopCount: 0,
          issueCount: 0,
          remidiatedCount: 0,
          skippedCount: 0,
        },
        name: 'SECTION 1',
        description: null,
        numberLevel: '1',
        totalQuestions: '3',
        answeredQuestions: '0',
      },
    ];

let receivedSections: any;

    service.sectionsInfo$.subscribe((sections) => {
      receivedSections = sections
      console.log(sections);
      
    });

    const req = httpMock.expectOne('/assets/sections.json');
    expect(req.request.method).toBe('GET');
    req.flush({ result: { sections: dummySections } });

  
  });
});
