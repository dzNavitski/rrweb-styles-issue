import {Component, OnInit} from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import * as rrweb from "rrweb";
import {listenerHandler} from "@rrweb/types";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  constructor(private modalCtrl: ModalController, private routerOutlet: IonRouterOutlet) {}

  public ngOnInit(): void {
    const events: Record<any, any>[] = [];
    const stopFn: listenerHandler | undefined = rrweb.record({
      emit(event) {
        events.push(event);
      },
    });

    setTimeout(() => {
    	stopFn?.();
    	downloadJson(events);
    }, 15000);

    function downloadJson(myJson: unknown) {
      const sJson = JSON.stringify(myJson);
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/json;charset=UTF-8,' + encodeURIComponent(sJson));
      element.setAttribute('download', 'rrweb.json');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click(); // simulate click
      document.body.removeChild(element);
    }
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      componentProps: {
        outletEl: this.routerOutlet.nativeEl
      }

    });
    modal.present();
  }

}
