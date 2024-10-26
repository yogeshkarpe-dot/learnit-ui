import { Component } from '@angular/core';
import { BrowseCourseComponent } from "../browse-course/browse-course.component";
import { ActivatedRoute, Params, RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-by-category',
  standalone: true,
  imports: [BrowseCourseComponent, RouterModule],
  templateUrl: './course-by-category.component.html',
  styleUrl: './course-by-category.component.css'
})
export class CourseByCategoryComponent {

  categoryId: number | any;

  constructor(private acticatedRoute: ActivatedRoute){
  }

  ngOnInit(){
    this.acticatedRoute.paramMap.subscribe(params=>{
      this.categoryId = Number(params.get('categoryId'));
    });
  }
}
