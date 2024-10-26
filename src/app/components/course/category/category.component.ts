import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CourseCategory } from '../../../models/category';
import { MOCK_COURSE_CATEGORIES } from '../../../mock-data/category-mock-data';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CategoryComponent, CommonModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  categories: CourseCategory[] = [];
  @Input('viewType') viewType: 'list' | 'tabs' = 'list'

  constructor(private categoryService: CategoryService){
    this.categories = MOCK_COURSE_CATEGORIES;
  }

  ngOnInit(){
    this.categoryService.getAllCourses().subscribe( (data) => {
      this.categories = data;
    })
  }
}
