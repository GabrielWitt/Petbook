import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

export interface buttonRight {
  text?: string;
  icon?: string;
  show: boolean;
}

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss'],
})
export class DetailHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() backText: string;
  @Input() backUrl: string;
  @Input() endButton: buttonRight;

  constructor(
    private router: Router,
    public modal: ModalController
  ) { }

  ngOnInit() {}

  goBack(){
    this.router.navigateByUrl(this.backUrl);
  }

}
