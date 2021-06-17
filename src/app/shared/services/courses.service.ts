import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  //it adds into the root Module
  providedIn: 'root',
})
export class CoursesService {
  private model = 'courses';
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

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(`${BASE_URL}${this.model}`);
  }

  find(courseId) {
    console.log(courseId);
  }

  create(course) {
    console.log('CREATE COURSE', course);
  }

  update(course) {
    console.log('CREATE COURSE', course);
  }

  deleteCourse(course) {
    console.log('CREATE COURSE', course);
  }
}
