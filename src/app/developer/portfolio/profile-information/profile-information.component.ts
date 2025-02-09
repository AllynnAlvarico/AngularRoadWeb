import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-profile-information',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './profile-information.component.html',
  styleUrl: './profile-information.component.css'
})
export class ProfileInformationComponent {

}
