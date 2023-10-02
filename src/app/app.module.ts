import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { SectionService } from './services/section.service';
import { HttpClientModule } from '@angular/common/http';
import { RadioQuestionComponent } from './question/radio-question/radio-question.component';
import { DropdownQuestionComponent } from './question/dropdown-question/dropdown-question.component';
import { QuestionComponent } from './question/question.component';
import { NumberQuestionComponent } from './question/number-question/number-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    QuestionComponent,
    RadioQuestionComponent,
    DropdownQuestionComponent,
    NumberQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
