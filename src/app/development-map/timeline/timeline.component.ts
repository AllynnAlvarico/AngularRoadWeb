import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  openModal: boolean = false;

  modalAction(choice:boolean){
    this.openModal = choice;
  }
}
