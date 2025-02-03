import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgIf } from '@angular/common';
import {ModalService} from '../service/modal.service';

@Component({
  selector: 'app-modal-component',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modal-component.component.html',
  styleUrl: './modal-component.component.css'
})
export class ModalComponentComponent implements OnInit {

  openModal: boolean = false;

  headTitle:string = '';
  subheader:string = '';
  message:string = '';
  para1:string = '';
  para2:string = '';
  para3:string = '';

  @ViewChild('modalRef') modal!: ElementRef<HTMLDivElement>;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.modalState$.subscribe(state => {
      this.openModal = state;
    });
    this.blogOne();

  }
  closeModal() {
    this.modalService.closeModal();
  }

  blogOne(){
    this.headTitle = "My Driving Test Was Just Around the Corner";
    this.subheader = "I cannot remember the signs!"
    this.para1 =
      "While studying for my driving test, " +
      "I found myself struggling with the static nature of road sign memorisation. " +
      "The material was so boring that I could barely retain any of it. " +
      "That’s when I had an idea: instead of just pushing through the usual study methods, why not make it fun and interactive?";
    this.para2 =
      "I searched online for a quiz or an interactive tool to help with road sign learning, " +
      "but could not find anything that fit what I was looking for. " +
      "And then it dawned on me: Why not create it myself?" +
      "Not only would I be able to learn the road signs, " +
      "but I could also get some practice with Angular, Tailwind, and TypeScript all at once. " +
      "The idea was too good to pass up.";
    this.para3 =
      "So, I immediately started coding. What was supposed to be a quick evening project turned into a full-on coding spree. Over the next two days, I spent around 20 hours building the foundation of the site. I barely stopped for breaks, getting completely absorbed in the process. By the time I finished, I had a rough version of my site — and despite its imperfections, I was proud. It was a beginner’s project, but it was mine, and I had learned a lot along the way."
    this.message =
      "I’ll admit, I may have burned myself out a bit — coding like a madman for 20 hours straight isn’t exactly sustainable! But the feeling of turning something boring into a fun and productive project was totally worth it. Now, I’m excited to refine the site and keep learning."

  }

}
