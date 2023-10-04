import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SectionService } from './services/section.service';
import { AppModule } from './app.module';
import { BehaviorSubject } from 'rxjs';
import { Section } from './models/Section';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let el: DebugElement;
  

  let sectionService: SectionService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, AppModule],
      providers: [SectionService],
      declarations: [AppComponent],
    });

    (sectionService = TestBed.inject(SectionService)),
      (httpTestingController = TestBed.inject(HttpTestingController));

    // const sectionInfo$ = new BehaviorSubject<Section[]>([])
    // spyOn(sectionService, "getAll").and.returnValue(sectionInfo$)
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

 
});
