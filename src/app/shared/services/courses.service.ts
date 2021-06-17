import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
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
}
