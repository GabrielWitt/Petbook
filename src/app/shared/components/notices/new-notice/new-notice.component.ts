import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';
import { attachmentOptions } from 'src/app/core/models/images';
import { Comments, Notice } from 'src/app/core/models/notice';
import { Pet } from 'src/app/core/models/species';
import { shortUser, userFormData } from 'src/app/core/models/user';
import { ImageUploaderService } from 'src/app/core/services/image-uploader.service';
import { NoticeService } from 'src/app/core/services/modules/notice.service';
import { PetService } from 'src/app/core/services/modules/pet-service.service';
import { AttachmentsService } from 'src/app/shared/utilities/attachments.service';
import { AlertsService } from '../../../utilities/alerts';
import { TimeHandlerModule } from '../../../utilities/time-handler';

@Component({
  selector: 'app-new-notice',
  templateUrl: './new-notice.component.html',
  styleUrls: ['./new-notice.component.scss'],
})
export class NewNoticeComponent implements OnInit {
  @ViewChild( IonContent, { static: false }) content: IonContent;
  public scroll = false;
  private fullHeight = 0;
  public showScroll = 0;
  defaultUser = 'assets/profile/ProfileBlank.png';
  @Input() user: userFormData;
  @Input() notice: Notice;
  @Input() pet: Pet;
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
    private pets: PetService,
    private notices: NoticeService,
    public modal: ModalController,
    private time: TimeHandlerModule,
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
      if(this.pet){
        this.noticeType = this.typeList[1].name;
        this.myNotice.type = this.typeList[1];
        this.myNotice.title = this.pet.specie +' Perdido: ' + this.time.getCurrentDateEs();
        this.myNotice.photo = this.pet.photo;
        let prevMessage = this.pet.specie +' perdido, su nombre es ' + this.pet.name + ' y es de color ' + this.pet.color1.color
        if(this.pet.color2){ prevMessage = prevMessage + ' con '+ this.pet.color2.color}
        if(this.pet.breed){ prevMessage = prevMessage + '. Es de raza '+ this.pet.breed}
        prevMessage = prevMessage + (this.pet.microchip ? '. Tiene' : 'No tiene' ) + ' microchip. Ser perdio en (agregar dirección)';
        prevMessage = prevMessage + '. Si tiene información llamar al (agregar número)';
        this.myNotice.description = prevMessage;
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
      if(this.newImage){this.myNotice.photo =  await this.uploadPhoto();}
      console.log(this.myNotice);
      if(this.notice){
        this.myNotice['createdAt'] = this.time.dateTransform(this.notice['createdAt']);
        await this.notices.UpdateNotice(this.myNotice);
      }else{
        if(this.pet){
          this.myNotice.pet = {
            uid: this.pet.uid,
            name: this.pet.name,
            specie: this.pet.specie,
            status: 'lost',
            ownerUid: this.pet.ownerUid,
            photo: this.pet.photo,
            color1: this.pet.color1,
            microchip: this.pet.microchip,
          }
          if(this.pet.color2){this.myNotice.pet.color2 = this.pet.color2;}
        }
        await this.notices.createNotice(this.myNotice);
        if(this.pet){ await this.pets.statusMyPet(this.pet,'lost') }
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

  eraseNotice(){
    this.alerts.AlertConfirm(this.notice.title,'¿Esta seguro que desea eliminar este anuncio?')
    .then(answer => {
      if(answer){
        this.loading = true;
        this.notices.deleteNotice(this.notice.uid).then(() => {
          this.alerts.showAlert( 'ANUNCIOS', 'Anuncio: '+ this.notice.title + ' ha sido eliminado.', 'OK');
          this.loading = false;
          this.modal.dismiss(true);
        })
      }
    })
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
      await this.notices.UpdateNotice(this.myNotice);
      this.myNotice.comments.push(this.newComment);
      this.sending = false;
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