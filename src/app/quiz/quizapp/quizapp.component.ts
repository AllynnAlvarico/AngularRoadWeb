import {Component} from '@angular/core';
import {JsonPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {DefaultComponent} from './default/default.component';


@Component({
  selector: 'app-quizapp',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    NgForOf,
    JsonPipe,
    DefaultComponent,
  ],
  templateUrl: './quizapp.component.html',
  styleUrl: './quizapp.component.css'
})

export class QuizComponent {

  isDefaultMode = true;
  isClicked = false;

  startQuiz(basicMode: boolean) {
    this.isDefaultMode = basicMode;
    this.isClicked = true;
  }

  test(): void {
    console.log("Hello");
  }

}
