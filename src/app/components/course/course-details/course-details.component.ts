import { Component } from '@angular/core';
import { CourseDetails } from '../../../models/course';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { SafePipe } from '../../../pipes/safe.pipe';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, SafePipe],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {

  courseId : number | null = null;
  courseDetails: CourseDetails | any;
  createRange = new Array(5);
  videoUrl: string | null = null;

  constructor(private courseService: CourseService, private route: ActivatedRoute){
  }

  ngOnInit(){

    this.route.paramMap.subscribe((param) => {
      this.courseId = Number(param.get('courseId'));
    })

    if(this.courseId){
      this.courseService.getCourseDetails(this.courseId).subscribe( (data) => {
        this.courseDetails = data;
      })
    }

  }

  openVideo(videoUrl: string): void {
    const videoId = this.extractVideoId(videoUrl);
    this.videoUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  closeVideo(): void {
    this.videoUrl = null;
  }

  private extractVideoId(url: string): string {
    const regex = /youtube\.com\/watch\?v=([^"&?/]{11})/;
    const match = url.match(regex);
    return match ? match[1] : '';
  }

}
