import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Comments, Notice } from 'src/app/core/models/notice';
import { Pet } from 'src/app/core/models/species';
import { userFormData } from 'src/app/core/models/user';
import { NoticeService } from 'src/app/core/services/modules/notice.service';

@Component({
  selector: 'app-notice-detail',
  templateUrl: './notice-detail.component.html',
  styleUrls: ['./notice-detail.component.scss'],
})
export class NoticeDetailComponent implements OnInit {
  @ViewChild( IonContent, { static: false }) content: IonContent;
  @Input() user: userFormData;
  @Input() notice: Notice;
  @Input() pet: Pet;
  @Input() delete: boolean;
  @Input() loading: boolean;
  public scroll = false;
  private fullHeight = 0;
  public showScroll = 0;
  editNoticeForm = false;
  myNotice: Notice = {
    title: '',
    type: null,
    description: '',
    photo: '',
    writer: null,
    comments: [],
    likes: [],
  }

  // Comments
  sending = false;
  newCommentImage;
  newComment: Comments = {
    text: '',
    user: null
  }
  

  constructor(
    private notices: NoticeService,
  ) {}

  ngOnInit() {
  }

  commentListener(e){
    this.newComment.text = e.detail.value;
  }

  async pressSend(){
    this.sending = true;
    this.myNotice = this.notice;
    try {
      this.newComment.user  = {
        uid: this.user.uid,
        photo: this.user.photo,
        email: this.user.email,
        name: this.user.name + ' ' + this.user.lastName
      }
      this.myNotice.comments.push(this.newComment);
      await this.notices.UpdateNotice(this.myNotice);
      setTimeout(() => {
        this.sending = false;
      }, 5000);
      this.notice.comments = this.myNotice.comments;
      this.newComment = {
        text: '',
        user: null
      }
      this.scrollDown();
    } catch (error) {
      console.log(error);
      this.sending = false;
    }
  }

  checkScroll(scroll, content) {
    this.content = content;
    if (this.fullHeight < scroll.detail.currentY){ this.fullHeight = scroll.detail.currentY; }
    this.showScroll = (this.fullHeight - scroll.detail.scrollTop);
  }

  scrollDown() {
    if (this.content?.scrollToBottom){ setTimeout(() => { this.content.scrollToBottom(400); setTimeout(() => { this.showScroll = 1; }, 1000); } , 500); }
  }

}
