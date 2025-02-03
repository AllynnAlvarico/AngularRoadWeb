import { Component } from '@angular/core';
import {FlashCardComponent} from './flash-card/flash-card.component';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [
    FlashCardComponent
  ],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.css'
})
export class LearnComponent {

}
