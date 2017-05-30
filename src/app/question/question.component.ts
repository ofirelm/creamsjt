import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
    @Input() data;
    @Input() collection;
    showQuestions: boolean = false;

    constructor() {
    }

    nextQuestion() {
        this.showQuestions = false;
        let currentIndex = this.collection.indexOf(this.data);
        if (currentIndex != -1) {
            if (this.collection.length > (currentIndex + 1)) {
                this.data = this.collection[currentIndex + 1];
            }
        }
    }

    videoEnded() {
        this.showQuestions = true;
    }

    videoReplay() {
        this.showQuestions = false;
    }

    ngOnInit() {
        console.log(123, this.data);
    }
}