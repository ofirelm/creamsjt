import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsService {
  questionsApiEndPointUrl: string = "/api/questions";

  constructor(private http: Http) { }

  // Get all questions from the API
  getAllQuestions() {
    return this.http.get(this.questionsApiEndPointUrl)
      .map(res => res.json());
  }

  addQuestions(question) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = question;

    console.log("last check for body", body);
    return this.http.post(this.questionsApiEndPointUrl, body, headers)
      .map(res => res.json());
  }

  deleteQuestion(questionId){
    console.log("in", questionId);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(this.questionsApiEndPointUrl + "/" + questionId,options)
      .map(res => res.json());
  }
}