import {Component} from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import {JsonPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {DefaultComponent} from './default/default.component';
import {ScoreComponent} from './score/score.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-quizapp',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    NgForOf,
    JsonPipe,
    DefaultComponent,
    ScoreComponent,
    RouterLink,
  ],
  templateUrl: './quizapp.component.html',
  styleUrl: './quizapp.component.css'
})

export class QuizComponent {
  private dataSource = new BehaviorSubject<number>(0);
  currentData = this.dataSource.asObservable();

  isDefaultMode = true;
  isClicked = false;

  startQuiz(basicMode: boolean) {
    this.isDefaultMode = basicMode;
    this.isClicked = true;
  }
  updateDate(newScoreData:number){
    this.dataSource.next(newScoreData);
  }

  test(): void {
    console.log("Hello");
  }

}
