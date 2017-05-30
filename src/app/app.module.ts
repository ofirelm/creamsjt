import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';

import { QuestionsService } from './questions.service';
import { HeaderComponent } from './header/header.component';
import { QuestionComponent } from './question/question.component';
import { CompletedComponent } from './completed/completed.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    HeaderComponent,
    QuestionComponent,
    CompletedComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'questions', component: QuestionsComponent },
      { path: 'completed', component: CompletedComponent },
      { path: 'admin', component: AdminComponent },
      { path: "", redirectTo: "questions", pathMatch: "full" },
      { path: "**", redirectTo: "questions", pathMatch: "full" }
    ])
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

