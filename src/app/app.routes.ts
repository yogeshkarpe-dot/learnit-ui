import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrowseCourseComponent } from './components/course/browse-course/browse-course.component';
import { AboutUsComponent } from './components/core/about-us/about-us.component';
import { PlansAndPricingComponent } from './components/plans-and-pricing/plans-and-pricing.component';
import { CourseByCategoryComponent } from './components/course/course-by-category/course-by-category.component';
import { CategoryComponent } from './components/course/category/category.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CourseDetailsComponent } from './components/course/course-details/course-details.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'course/browse', component: BrowseCourseComponent},
    {path: 'course/category/:categoryId', component: CourseByCategoryComponent},
    {path: 'course/category', component: CategoryComponent},
    {path: 'course/course-details/:courseId', component: CourseDetailsComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'plans-and-pricing', component: PlansAndPricingComponent}
];
