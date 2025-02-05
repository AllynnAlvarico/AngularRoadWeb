import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  isClicked:boolean = false;

  isDismissed(action: boolean){
    this.isClicked = action;
  }

}
