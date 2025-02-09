import { Component } from '@angular/core';
import {AboutMeComponent} from './about-me/about-me.component';
import {ProfileInformationComponent} from './profile-information/profile-information.component';
import {StatsComponent} from './stats/stats.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    AboutMeComponent,
    ProfileInformationComponent,
    StatsComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
