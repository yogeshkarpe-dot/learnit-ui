import { Component, Input } from '@angular/core';
import { Course } from '../../../models/course';
import { CommonModule } from '@angular/common';
import { MOCK_COURSES } from '../../../mock-data/course-mock-data';
import { RouterModule } from '@angular/router';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-browse-course',
  standalone: true,
  imports: [CommonModule, RouterModule, PopoverModule],
  templateUrl: './browse-course.component.html',
  styleUrl: './browse-course.component.css'
})
export class BrowseCourseComponent {

  courses: Course[] =[];
  createRange = new Array(5);

  @Input('categoryId') categoryId : number | any;
  @Input('browseAllCourse') browseAllCourse : boolean = false;

  constructor(private courseService: CourseService){

  }

  ngOnInit(){
    this.processCourse();
  }

  ngOnChanges(){
    this.processCourse();
  }

  processCourse(){
    if (!this.categoryId){
      this.courseService.getAllCourses().subscribe((data) => {
        this.courses = data;
      })
    }
    else{
      this.courseService.getCoursesByCategoryId(this.categoryId).subscribe((data) => {
        this.courses = data;
      })
    }
  }
  
  formatPrice(price: number) : string {
    return `$${price.toFixed(2)}`;
    }

}
