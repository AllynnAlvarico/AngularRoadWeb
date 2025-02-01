import {Component, OnInit} from '@angular/core';
import {QuizComponent} from '../quizapp.component';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit{
  receiveScore: number = 0;
  constructor(private sharedData: QuizComponent) {}
  ngOnInit(): void {
    this.sharedData.currentData.subscribe(data => {
      this.receiveScore = data;
    });
  }
  getScore():number {
    return this.receiveScore;
  }
}
