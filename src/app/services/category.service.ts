import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CourseCategory } from '../models/category';

@Injectable({providedIn: 'root'})
export class CategoryService {

    baseUrl = environment.apiUrl + "/CourseCategory"

    constructor(private httpClient:HttpClient) { }
    
    getAllCourses(): Observable<CourseCategory[]>{
        return this.httpClient.get<CourseCategory[]>(this.baseUrl);
    }

    getCategoryByCategoryId(categoryId:number): Observable<CourseCategory>{
        return this.httpClient.get<CourseCategory>(`${this.baseUrl}/CourseCategory/${categoryId}`);
    }
}