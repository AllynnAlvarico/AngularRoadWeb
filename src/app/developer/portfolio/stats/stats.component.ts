import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {

  isClickedFetac: boolean = false;
  isClicked1stYear: boolean = false;

  coursesFetac: string[] = ["Fundamentals of Object Oriented Programming",
    "Software Architecture",
    "Programming and Design Principles",
    "Web Authoring",
    "Networking Essentials",
    "Database Methods",
    "Maths for Information Technology",
    "Communications",
    "Work Experience"
    ];
  fetacGrade: string = "Distinction";

  bc1stYear: string[] = ["Object Oriented Software Development 1",
    "Problem Solving & Design",
    "Intro to Computing & Multimedia",
    "Technology Fundamentals",
    "Quantitative Methods",
    "Basic Statistics",
    "Financial Accounting",
    "Principles of Management",
    "Marketing 1",
    "Communications"
  ];
  bcOneGrades = [
      {num:93}, {num:90},
    {num:86},{num:95},
    {num:78},{num:61},
    {num:72},{num:68},
    {num:74},{num:56}];

  clickedFetac(state:boolean):void {
    this.isClickedFetac = state;
  }

  Clicked1stYear(state:boolean):void {
    this.isClicked1stYear = state;
  }

  protected readonly console = console;
}
