import { Component, OnInit } from '@angular/core';
import { RoadData } from '../road-signs';
import { JsonPipe, NgClass, NgForOf, NgIf, NgOptimizedImage } from "@angular/common";
import { QuizComponent } from '../quizapp.component';

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

  roadData = new RoadData();
  allSigns = this.roadData.getData();

  /** Quiz properties */
  mcqOptions: string[] = [];
  currentQuestionIndex = 0;
  imageSource: string = '';
  imageName: string = '';
  question: string = 'What does this sign mean?';

  /** Answer tracking */
  selectedAnswer: string | null = null;
  correctAnswer: string = '';
  score = 0;

  constructor(private sharedData: QuizComponent) {}

  ngOnInit(): void {
    this.startQuiz();
  }

  startQuiz(): void {

    const currentSign = this.allSigns[this.currentQuestionIndex];

    const incorrectOptions = this.shuffleArray(
      this.allSigns.filter(sign => sign.title !== currentSign.title)
    ).slice(0, 3);

    this.mcqOptions = this.shuffleArray([currentSign, ...incorrectOptions])
      .map(option => option.title);

    this.correctAnswer = currentSign.title;
    this.imageSource = currentSign.asset_source;
    this.imageName = currentSign.title;

    this.currentQuestionIndex++;
  }

  processAnswer(selected: string): void {
    if (this.selectedAnswer) return;

    this.selectedAnswer = selected;

    if (this.selectedAnswer === this.correctAnswer) {
      this.score++;
      this.sendScoreData();
      console.log("Correct answer!");
    }
  }

  sendScoreData(): void {
    this.sharedData.updateDate(this.score);
  }

  private shuffleArray<T>(array: T[]): T[] {
    return array.sort(() => Math.random() - 0.5);
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.allSigns.length) {
      alert('Quiz Completed!');
      // quizContainer.style.display = 'none';
    } else {
      // displayQuestion();
    }
  }

}
