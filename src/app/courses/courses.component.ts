import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  tempData = null;
  courses = null;

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    //It is like a construtor and it gets called initially when all hte binding are satisfied
    this.resetSelectedCourse();
    this.courseService
      .all() //we do All instead of courses is becasue js dosent have concept of Private
      .subscribe((courses) => (this.courses = courses));
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
  saveCourse(course) {
    if (course.id) {
      //If the ID exists update
      this.courseService.update(course);
    } else {
      //if not create
      this.courseService.create(course);
    }
  }
  deleteCourse(courseId) {
    this.courseService.deleteCourse(courseId);
  }
  cancel() {
    this.resetSelectedCourse();
  }
}
