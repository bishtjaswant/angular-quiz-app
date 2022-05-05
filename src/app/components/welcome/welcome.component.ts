import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'quiz-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  @ViewChild("contestent_name" )  contestent_name !: ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  startQuiz() {
    localStorage.setItem("name", this.contestent_name.nativeElement.value)
  }
}
