import {Component} from '@angular/core';
import {RoadData} from './road-signs';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-quizapp',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    NgForOf,
  ],
  templateUrl: './quizapp.component.html',
  styleUrl: './quizapp.component.css'
})

export class QuizComponent {
  optionButtons: any = [];

  mcqOptions: string[] = [];
  mcqAnswer: string = '';


  currentQuestionIndex = 0;
  isDefaultMode = true;
  isClicked = false;
  imageSource: string = '';
  altImgName: string = '';
  question: string = '';
  correctAnswer: any;  // Track the correct answer
  score = 0;

  categoryTracker = {};
  private quizContainer: any;

  startQuiz(basicMode: boolean) {
    this.isDefaultMode = basicMode;
    this.currentQuestionIndex = 0;

    const roadData: RoadData = new RoadData();
    const currentSign = roadData.getData();

    if (this.isDefaultMode) this.defaultMode(currentSign);
    else this.pictureMode(currentSign);

    const shuffledSigns = this.shuffleArray(currentSign);

    const options: any = [currentSign, ...shuffledSigns.filter((sign: any) => sign !== currentSign).slice(0, 3)];

    const finalOptions = this.shuffleArray(options);

    finalOptions.forEach((option: any) => {
      const button = document.createElement('button');
      this.mcqAnswer = this.isDefaultMode ? option.title : 'See Image';

      console.log("String 1 is %s", option.title);
      console.log("String 2 is %s", this.mcqAnswer);

      // this.optionButtons.push(button);
      do {
        if (this.mcqAnswer != null || this.mcqAnswer != " " || this.mcqAnswer != undefined) {
          this.mcqOptions.push(this.mcqAnswer);
        }
      } while (this.mcqOptions.length < 4);

      console.log(this.mcqOptions);

      for (let t = 0; t < this.mcqOptions.length; t++) {
        console.log("Title is: %s", this.mcqOptions[t]);
      }
    });

    this.currentQuestionIndex++;
    this.isClicked = true;
  }

  displayQuestion(): void {
    // correctAnswer = currentSign; // Track the correct answer
  }

  defaultMode(array: any): void {
    this.question = "What does this sign mean?"
    this.imageSource = array[this.currentQuestionIndex].asset_source;
    this.altImgName = array[this.currentQuestionIndex].title;

    console.log("Hello I am default mode");
  }

  pictureMode(array: any): void {
    this.altImgName = array[this.currentQuestionIndex].title;
    this.question = `What does the sign titled '${this.altImgName}' look like?`
    console.log("Hello I am picture mode");
  }

  shuffleArray(array: any): any {
    return array.sort(() => Math.random() - 0.5);
  }

  test(): void {
    console.log("Hello");
  }

}
