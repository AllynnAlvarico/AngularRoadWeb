import { Component } from '@angular/core';
import { RoadData } from './road-signs';


@Component({
  selector: 'app-quizapp',
  standalone: true,
  imports: [],
  templateUrl: './quizapp.component.html',
  styleUrl: './quizapp.component.css'
})

export class QuizComponent{
  currentQuestionIndex = 0;
  isBasicMode = true;
  correctAnswer: any;  // Track the correct answer
  score = 0;

  categoryTracker = {};
  private quizContainer: any;

  startQuiz(basicMode:boolean) {
    this.isBasicMode = basicMode;
    this.currentQuestionIndex = 0;
    this.quizContainer.style.display = 'block';
    this.displayQuestion();
    this.test();
  }

  displayQuestion(): void {
    const roadData: RoadData = new RoadData();
    const currentSign = roadData.getData();
    this.currentQuestionIndex + 1;

    // correctAnswer = currentSign; // Track the correct answer
    // quizHeading.textContent = `Question ${this.currentQuestionIndex + 1}`;
    // quizlengthElement.textContent = `Number of signs ${roadSigns.length}`;


  }
  test(): void {
    console.log(this.currentQuestionIndex);
  }

}
