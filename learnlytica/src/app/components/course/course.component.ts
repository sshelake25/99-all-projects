import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseTitle = 'Git for begginer';
  currentDate = new Date();

  courseDetails = {
    title: 'ss',
    price: 100
  }

  constructor(private myConfig: ConfigService) { }

  ngOnInit(): void {
    // retune type-->Observabele
    this.myConfig.getCourseConfigs().subscribe(
      (data) => {
        console.log(data)
      });
  }

}
