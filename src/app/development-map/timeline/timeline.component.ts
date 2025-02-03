import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';
import {ModalComponentComponent} from '../modal-component/modal-component.component';
import { ModalService } from '../service/modal.service';


@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgClass,
    ModalComponentComponent
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.openModal();
    // Call the service function to open the modal
  }
}
