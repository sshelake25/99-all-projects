import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  constructor(private mConfig: ConfigService) { }

  ngOnInit(): void {
    //return type ---> 
    this.mConfig.getCourseList().subscribe((sdata) => {
      console.log(sdata)
    });
  }

}
