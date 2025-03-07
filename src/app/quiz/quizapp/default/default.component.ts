import {Component, OnInit} from '@angular/core';
import {RoadData} from '../road-signs';
import {JsonPipe, NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {QuizComponent} from '../quizapp.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [JsonPipe, NgForOf, NgIf, NgOptimizedImage, NgClass],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent implements OnInit {
  /** Debugging switch */
  debuggerSwitch: boolean = false;

  currentSign: any;
  incorrectOptions: any;
  roadData = new RoadData();
  allSigns = this.roadData.getData();

  /** Quiz properties */
  mcqOptions: string[] = [];
  currentQuestionIndex = 0;
  questionNumber = 0;
  imageSource: string = '';
  imageName: string = '';
  question: string = 'What does this sign mean?';

  /** Answer tracking */
  selectedAnswer: string | null = null;
  correctAnswer: string = '';
  score = 0;
  isAnswered: boolean = false;

  constructor(private sharedData: QuizComponent) {
  }

  ngOnInit(): void {
    this.startQuiz();
  }

  startQuiz(): void {
    this.sharedData.currentIndexData.subscribe(data => {
      this.loadQuestions(data);
    });
  }

  loadQuestions(resData: number) {
    this.resetUI();

    this.currentQuestionIndex = resData;
    this.questionNumber = resData + 1;

    this.currentQuestionIndex = Math.floor(Math.random() * this.allSigns.length);

    this.currentSign = this.allSigns[this.currentQuestionIndex];

    this.incorrectOptions = this.shuffleArray(
      this.allSigns.filter(sign => sign.title !== this.currentSign.title)
    ).slice(0, 3);

    this.mcqOptions = this.shuffleArray([this.currentSign, ...this.incorrectOptions])
      .map(option => option.title);

    this.correctAnswer = this.currentSign.title;
    this.imageSource = this.currentSign.asset_source;
    this.imageName = this.currentSign.title;

  }

  processAnswer(selected: string): void {
    this.selectedAnswer = selected;
    this.isAnswered = true;

    if (this.selectedAnswer === this.correctAnswer) {
      this.score++;
      // this.sendScoreData();
      // -> modified it stops going to next question - 03/03/2025
      // console.log("Correct answer!");
    }
  }

  // this method needs to be debug!
  // This Bug was fixed on 03/03/2025 -- Caused a headache for 2 months
  resetButtons(option: any): string {
    if (this.selectedAnswer == null) {
      return "reset";
    }
    if (option === this.correctAnswer) {
      return "correct";
    } else {
      return "incorrect";
    }
  }

  sendScoreData(): void {
    this.sharedData.updateDate(this.score);
  }

  sendIsAnswered(state:boolean):void {
    this.sharedData.updateAnswer(state);
  }

  private shuffleArray<T>(array: T[]): T[] {
    return array.sort(() => Math.random() - 0.5);
  }

  resetUI(): void {
    this.selectedAnswer = null;
    this.isAnswered = false;
  }
}
