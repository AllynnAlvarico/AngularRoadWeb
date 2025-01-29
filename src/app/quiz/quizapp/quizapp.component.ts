import { Component } from '@angular/core';
import { RoadData } from './road-signs';
import {NgIf, NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-quizapp',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './quizapp.component.html',
  styleUrl: './quizapp.component.css'
})

export class QuizComponent{
  currentQuestionIndex = 0;
  isBasicMode = true;
  isClicked = false;
  imageSource: string = '';
  altImgName: string = '';
  correctAnswer: any;  // Track the correct answer
  score = 0;

  categoryTracker = {};
  private quizContainer: any;

  startQuiz(basicMode:boolean) {
    this.isBasicMode = basicMode;
    this.currentQuestionIndex = 0;
    this.displayQuestion();

    if (this.isBasicMode) this.defaultMode();
    else this.pictureMode();

    this.isClicked = true;
  }

  displayQuestion(): void {
    const roadData: RoadData = new RoadData();
    const currentSign = roadData.getData();
    this.currentQuestionIndex += 1;

    this.imageSource = currentSign[this.currentQuestionIndex].asset_source;
    this.altImgName = currentSign[this.currentQuestionIndex].title;

    console.log(currentSign[3].title);
    console.log(currentSign[3].asset_source);

    // correctAnswer = currentSign; // Track the correct answer
  }
  defaultMode():void{
    console.log("Hello I am default mode");
  }
  pictureMode():void{
    console.log("Hello I am picture mode");

  }
  test(): void {
    console.log("Hello");
  }

}
