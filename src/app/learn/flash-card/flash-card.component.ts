import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {RoadData} from '../../quiz/quizapp/road-signs';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-flash-card',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf
  ],
  templateUrl: './flash-card.component.html',
  styleUrl: './flash-card.component.css'
})
export class FlashCardComponent implements OnInit {
  roadData = new RoadData();
  allSigns = this.roadData.getData();
  currentIndex = 0;
  imageSource: string = '';
  imageName: string = '';
  category: string = '';
  ngOnInit(): void {
    this.learn();
  }

  learn(){
    const currentSign = this.allSigns[this.currentIndex];

    this.imageSource = currentSign.asset_source;
    this.imageName = currentSign.title;
    this.category = currentSign.title;
  }
  next(){
    this.currentIndex++;
    this.learn();
  }
  prev(){
    this.currentIndex--;
    this.learn();
  }
}
