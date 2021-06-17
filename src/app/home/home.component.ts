import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  themeColor = 'Red'; //Binding this event and property in NgModel
  webText = 'HowdyANkit';
  currentLesson = '';
  changeColor = 'blue';
  courseLessons = null;
  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.courseLessons = this.lessonsService.all();
  }

  onClick(item) {
    console.log(item);
    this.currentLesson = item;
  }
}
