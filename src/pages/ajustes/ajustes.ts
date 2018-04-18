import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  activarPrincipal(){
    this.navCtrl.parent.select(2);//aqui llamamos directamente a la pagina tabs, ya que si colocamos un push se creara otra pagina y no es la idea
  }

}
