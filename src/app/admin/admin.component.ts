import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from './question';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  questions: any = [];
  questionFormVisible: boolean = false;
  question: Question;
  answer: string;

  constructor(private questionsService: QuestionsService) {
    this.question = new Question();
    this.question.answers = [];
  }

  toggleQuestionForm() {
    this.questionFormVisible = !this.questionFormVisible;
  }

  addQuestion() {
    this.questionsService.addQuestions(this.question).subscribe(data => {
      this.questionsService.getAllQuestions().subscribe(data => {
        this.questions = data;
        this.toggleQuestionForm();
      });
    });
  }

  deleteQuestion(question) {
    this.questionsService.deleteQuestion(question.target.id).subscribe(data => {
      this.questionsService.getAllQuestions().subscribe(data => {
        this.questions = data;
      });
    });
  }

  addAnswer() {
    this.question.answers.push(this.answer);
    this.answer = "";
  }

  ngOnInit() {
    this.questionsService.getAllQuestions().subscribe(data => {
      this.questions = data;
    });
  }
}