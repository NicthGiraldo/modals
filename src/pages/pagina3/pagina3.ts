import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  juegos: any = {};//se crea este objeto para que los elementos enviados desde "pagina2.html" puedan guardarse para mostrarse o utilizarse en esta pagina

  constructor(private NavParams:NavParams) {
    this.juegos = this.NavParams.get("game");//la palabra "game" es la que se coloco en "this.navCtrl.push( Pagina3Page, {'game':juego})" en "pagina2.ts"
  }


}
