import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss'],
})
export class DetailCourseComponent implements OnInit {

  constructor(private youtube: YoutubeVideoPlayer) { }

  ngOnInit() {
    // this.youtube.openVideo('EJxeMbDTkVI');
  }

  invokeVideoPlayer(){
    this.youtube.openVideo('EJxeMbDTkVI');
    // Browser.open({url});
  }

}
