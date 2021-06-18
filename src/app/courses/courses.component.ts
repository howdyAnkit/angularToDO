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
    this.loadCourses();
    // this.courseService
    //   .all() //we do All instead of courses is becasue js dosent have concept of Private
    //   .subscribe((courses) => (this.courses = courses));
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
    //Select COurse
    console.log(course);
    this.tempData = course;
  }

  loadCourses() {
    this.courseService.all().subscribe((courses) => (this.courses = courses));
  }

  refreshCourses() {
    this.resetSelectedCourse();
    this.loadCourses();
  }

  saveCourse(course) {
    if (course.id) {
      //If the ID exists update
      this.courseService
        .update(course)
        .subscribe((result) => this.refreshCourses());
    } else {
      //if not create
      this.courseService
        .create(course)
        .subscribe((res) => this.refreshCourses());
    }
  }
  deleteCourse(courseId) {
    this.courseService
      .deleteCourse(courseId)
      .subscribe((result) => this.refreshCourses());
  }
  cancel() {
    this.resetSelectedCourse();
  }
}
