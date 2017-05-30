import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-posts',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  // instantiate questions to an empty array
  questions: any = [];
  activeQuestionnaire: any;
  activeQuestion: any;
  activeQuestionIndex: any;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    // Retrieve questions from the API
    this.questionsService.getAllQuestions().subscribe(data => {
      this.questions = data;

      //set default active objects if data exists
      // if (data.questionnaires.length > 0)
      //   this.activeQuestionnaire = data.questionnaires[0];

      if (this.questions.length > 0){
        this.activeQuestion = this.questions[0];
        this.activeQuestionIndex = this.questions.indexOf(this.activeQuestion);
      }
    });
  }
}