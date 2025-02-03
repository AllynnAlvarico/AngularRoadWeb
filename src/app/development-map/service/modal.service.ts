import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalState = new BehaviorSubject<boolean>(false);
  modalState$ = this.modalState.asObservable(); // Observable to subscribe to
  // The "$" is a naming convention in Angular
  // this is to signal the dev that this is an Observable not a
  // typical variable.
  openModal() {
    this.modalState.next(true);
  }

  closeModal() {
    this.modalState.next(false);
  }
}
