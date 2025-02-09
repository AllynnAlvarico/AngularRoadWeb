import { Component } from '@angular/core';
import {PortfolioComponent} from './portfolio/portfolio.component';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [
    PortfolioComponent
  ],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {

}
