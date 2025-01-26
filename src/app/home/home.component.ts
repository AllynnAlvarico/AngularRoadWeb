import { Component } from '@angular/core';
import {AboutQuizComponent} from './about-quiz/about-quiz.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutQuizComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
