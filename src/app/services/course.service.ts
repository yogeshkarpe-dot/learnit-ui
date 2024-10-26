import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({providedIn: 'root'})
export class CourseService {

    baseUrl = environment.apiUrl + '/Course'
    constructor(private httpClient: HttpClient) { }

    getAllCourses(): Observable<Course[]>{
        return this.httpClient.get<Course[]>(this.baseUrl);
    }

    getCoursesByCategoryId(categoryId: number): Observable<Course[]>{
        return this.httpClient.get<Course[]>(`${this.baseUrl}/Category/${categoryId}`);
    }

    getCourseDetails(courseId: number): Observable<Course>{
        return this.httpClient.get<Course>(`${this.baseUrl}/Detail/${courseId}`);
    } 
    
}