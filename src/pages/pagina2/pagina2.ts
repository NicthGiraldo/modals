import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from '../index.paginas'

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3: any = Pagina3Page;

  juegos:any[] = [
    {
      nombre:"Metal Gear Solid",
      descripcion:"juego de playStation 1 de origen japones"
    },
    {
      nombre:"Black",
      descripcion:"uno de los mejores juegos FPS de playStation 2"
    },
    {
      nombre:"need for speed mostwanted",
      descripcion:"juego revolucionario de coches en la plataforma de playStation 2"
    },
    {
      nombre:"final fantasy 13",
      descripcion:"primer juego de final fantasy en hd llevado a las plataformas playStation 3 y xbox 360"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3(juego:any){
    console.log(juego);
    this.navCtrl.push( Pagina3Page, {'game':juego})
  }

}
