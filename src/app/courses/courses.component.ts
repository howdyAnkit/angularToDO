import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  tempData = null;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'JAvaScript The really Hard parts',
      description: 'Worship will sentence',
      percentComplete: 56,
      favorite: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    //It is like a construtor and it gets called initially when all hte binding are satisfied
    this.resetSelectedCourse();
    //We are doing this to call the EmptyObject first because
    //during compiletTime we are binding an itself empty object instead of null Object
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };

    this.tempData = emptyCourse;
  }

  onClick(course) {
    console.log(course);
    this.tempData = course;
  }

  deleteCourse(courseId) {
    console.log('Course deleted', courseId);
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
