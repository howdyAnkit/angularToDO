import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss'],
})
export class CoursesDetailsComponent implements OnInit {
  @Input() course;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
