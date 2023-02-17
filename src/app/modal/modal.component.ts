import {Component} from '@angular/core';

import {ModalController} from '@ionic/angular';
import * as rrweb from 'rrweb';

@Component({
  selector: 'app-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  constructor(private modalCtrl: ModalController) {
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
