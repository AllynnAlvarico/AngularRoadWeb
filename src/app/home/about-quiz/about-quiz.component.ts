import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-about-quiz',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './about-quiz.component.html',
  styleUrl: './about-quiz.component.css'
})
export class AboutQuizComponent {

}
