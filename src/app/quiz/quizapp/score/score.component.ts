import {Component, OnInit} from '@angular/core';
import {QuizComponent} from '../quizapp.component';
import {data} from 'autoprefixer';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit {
  receiveScore: number = 0;
  sendQuestionIndex:number = 0;
  tester: any = null;

  constructor(private sharedData: QuizComponent) {
  }

  ngOnInit(): void {
    this.sharedData.currentData.subscribe(data => {
      this.receiveScore = data;
    });
  }

  sendQuestionIndexData(){
    this.sharedData.updateQuestionIndex(this.sendQuestionIndex);
  }


  getScore(): number {
    return this.receiveScore;
  }

  nextQuestion() {
    // this.allSigns.length
    this.sendQuestionIndex++;
    this.sendQuestionIndexData();
    if (this.sendQuestionIndex >= 252) {
      alert('Quiz Completed!');
    }
    // console.log(this.sendQuestionIndex);
  }
  test(): any {
    return this.tester;
  }
}
