import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { attachmentOptions } from 'src/app/core/models/images';
import { Comments, Notice } from 'src/app/core/models/notice';
import { shortUser, userFormData } from 'src/app/core/models/user';
import { ImageUploaderService } from 'src/app/core/services/image-uploader.service';
import { NoticeService } from 'src/app/core/services/modules/notice.service';
import { AttachmentsService } from 'src/app/shared/utilities/attachments.service';
import { AlertsService } from '../../utilities/alerts';

@Component({
  selector: 'app-new-notice',
  templateUrl: './new-notice.component.html',
  styleUrls: ['./new-notice.component.scss'],
})
export class NewNoticeComponent implements OnInit {
  @Input() user: userFormData;
  @Input() notice: Notice;
  writer: shortUser;
  typeList = []
  myNotice: Notice = {
    title: '',
    type: null,
    description: '',
    photo: '',
    writer: null,
    comments: [],
    likes: [],
  }

  loading = true;
  editNoticeForm = false;
  myLike = false;
  progress = 0;
  newImage;
  noticeType;

  // Comments
  sending = false;
  newCommentImage;
  newComment: Comments = {
    text: '',
    user: null
  }

  constructor(
    private notices: NoticeService,
    public modal: ModalController,
    private alerts: AlertsService,
    private images: AttachmentsService,
    private upload: ImageUploaderService,
  ) { }

  ngOnInit() {
    this.loadTypes().then(() => {
      this.loading = false;
      if(this.notice){
        this.myNotice = this.notice;
        this.noticeType = this.notice.type.name;
        this.notice.likes.forEach(like => { if(like === this.user.uid){ this.myLike = true; }})
      }else{
        this.myNotice.writer = {
          uid: this.user.uid,
          photo: this.user.photo,
          email: this.user.email,
          name: this.user.name + ' ' + this.user.lastName
        }
      }
    })
  }
  
  async loadTypes(){
    try {
      this.typeList = await this.notices.getNoticeType();
      return 'done';
    } catch (error) {
      console.log(error);
      return 'error'
    }
  }

  // IMAGE SYSTEM
  addPhoto() {
    const options: attachmentOptions = {
      currentRoute: (this.user.manager?'administrator':'client') + '/news',
      height:null, width:null, pdf: false
    }
    this.images.presentImageOptions(options).then(imageObj => {
      if (imageObj[0] !== undefined){
        this.newImage  = imageObj[0];
      }
    });
  }

  addAttachment() {
    const options: attachmentOptions = {
      currentRoute: (this.user.manager?'administrator':'client') + '/news',
      height:null, width:null, pdf: false
    }
    this.images.presentImageOptions(options).then(imageObj => {
      if (imageObj[0] !== undefined){
        this.newImage  = imageObj[0];
      }
    });
  }

  uploadPhoto(){
    return new Promise<string>((resolve, reject) => {
      const imageName = Date().toString()+'_Notice_'+this.myNotice.title;
      this.upload.uploadFile('NoticeList',imageName, this.newImage.file,
      (progress)=>{ this.progress = progress })
      .then((data:any) => {
        this.upload.deletePicture();
        resolve(data.url);
      }).catch(error => { console.log(error); reject(error) })
    })
  }

  // LISTENRES
  handleType(e) {
    this.typeList.forEach(type => {
      if(type.name === e.detail.value){
        this.myNotice.type = type;
      }
    })
  }

  titleListener(e){
    this.myNotice.title = e.detail.value;
  }
  
  descriptionListener(e){
    this.myNotice.description = e.detail.value;
  }

  editNotice(){
    if(this.editNoticeForm){
      this.myNotice = this.notice;
      this.editNoticeForm = false;
    } else {
      this.editNoticeForm= true;
    }
  }

  async createNotice(){
    try {
      this.loading = true;
      this.myNotice.photo =  await this.uploadPhoto();
      console.log(this.myNotice);
      if(this.notice){
        await this.notices.UpdateNotice(this.myNotice);
      }else{
        await this.notices.createNotice(this.myNotice);
      }
      this.alerts.showAlert( 'ANUNCIOS', 
      this.notice? 'Datos de '+ this.myNotice.title + ' actualizados' : 'Nuevo anuncio agregado', 'OK');
      this.loading = false;
      this.modal.dismiss(true);
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  }

  async addLike(){
    this.sending = true;
    this.myNotice = this.notice;
    try {
      if(this.myLike){
        let likeList = [];
        this.notice.likes.forEach(like =>{
          if(this.user.uid !== like){ likeList.push(like)}
        });
        this.myNotice.likes = likeList;
      } else {
        this.myNotice.likes.push(this.user.uid);
      }
      await this.notices.UpdateNotice(this.myNotice);
      this.sending = false;
      this.notice.likes = this.myNotice.likes;
      this.myLike = !this.myLike;
    } catch (error) {
      console.log(error);
      this.sending = false;
    }
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
      this.sending = false;
      this.notice.comments = this.myNotice.comments;
    } catch (error) {
      console.log(error);
      this.sending = false;
    }
  }

}
