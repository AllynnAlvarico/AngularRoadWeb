import {ChangeDetectorRef, Component, OnInit, Output} from '@angular/core';
import { RoadData } from '../road-signs';
import { JsonPipe, NgForOf, NgIf, NgOptimizedImage } from "@angular/common";
import {QuizComponent} from '../quizapp.component';

@Component({
  selector: 'app-default',
  standalone: true,
    imports: [
        JsonPipe,
        NgForOf,
        NgIf,
        NgOptimizedImage
    ],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent implements OnInit{
  debuggerSwitch: boolean = false; /** change this for easy debugging */

  mcqOptions: any[] = [];
  currentQuestionIndex = 0;
  imageSource: string = '';
  imageName: string = '';
  question: string = '';

  value = 0;

  selectedAnswer: any; // Will hold the user answer


  constructor(
    private cdr: ChangeDetectorRef,
    private sharedData: QuizComponent
  ) {}
  ngOnInit(): void {
    this.startQuiz();
  }

  startQuiz(){

    const roadData: RoadData = new RoadData();
    const allSigns = roadData.getData();
    const currentSign = allSigns[this.currentQuestionIndex];

    // this.mcqOptions = [];

    const incorrectOptions = this.shuffleArray(
      allSigns.filter((sign: any) => sign.title !== currentSign.title)
    ).slice(0, 3);

    const finalOptions = this.shuffleArray([currentSign, ...incorrectOptions]);
    this.mcqOptions = finalOptions.map((option:any) => option.title);
    this.cdr.detectChanges();

    this.currentQuestionIndex++;

    this.question = "What does this sign mean?"

    this.imageSource = currentSign.asset_source;
    this.imageName = currentSign.title;

  }
  processAnswer(option: string){
    this.selectedAnswer = option;
    if (this.selectedAnswer === this.imageName){
      this.value++;
      this.sendScoreData();
      console.log("correct");
    }
    else {
      console.log("incorrect");
    }
  }
  sendScoreData(){
    return this.sharedData.updateDate(this.value);
  }

  shuffleArray(array: any): any {
    return array.sort(() => Math.random() - 0.5);
  }
}
