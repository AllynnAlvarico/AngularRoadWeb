import {ChangeDetectorRef, Component, Input, input, OnInit} from '@angular/core';
import { RoadData } from '../road-signs';
import { JsonPipe, NgForOf, NgIf, NgOptimizedImage } from "@angular/common";

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
  debuggerSwitch: boolean = false;

  mcqOptions: any[] = [];
  currentQuestionIndex = 0;
  imageSource: string = '';
  altImgName: string = '';
  question: string = '';

  correctAnswer: any;  // Track the correct answer
  score = 0;
  categoryTracker = {};
  quizContainer: any;


  constructor(private cdr: ChangeDetectorRef) {}
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
    this.altImgName = currentSign.title;

    // console.log(this.imageSource);
  }

  shuffleArray(array: any): any {
    return array.sort(() => Math.random() - 0.5);
  }

}
