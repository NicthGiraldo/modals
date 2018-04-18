import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../index.paginas'//se esta mostrando el modal desde la pagina "ajustes", asi que se tiene que importar para poder utilizarla 
//se importa la clase "ModalController" que es la que se encarga de volver la pagina "modalpage" en una pagina modal
@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  activarPrincipal() {
    this.navCtrl.parent.select(2);//aqui llamamos directamente a la pagina tabs, ya que si colocamos un push se creara otra pagina y no es la idea
  }

  motrarModal() {
    let modal = this.modalCtrl.create(ModalPage, { nombre: "papu", edad: 18 });//se crea una instancia para crear la pagina modaly se le envia una informacion 
    modal.present();//con la funsion "present" se muestra la pantalla modal, ya que si se deja con "create" solamente se crea mas no se muestra 
    modal.onDidDismiss(parametros => {//"onDidDismiss"significa que hara la pagina modal cuando se cierre, en este caso cuando se cierre, resibira los parametros y los mostrara en la consola 
      if (parametros) {//se condiciona el mostrar la informacion en la consola
        console.log("datos del modal");
        console.log(parametros);
      } else {
        console.log("se cerro el modal sin parametros");
      }

    });
  }

}
