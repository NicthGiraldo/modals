import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';//se tiene que importar la clase "ViewController" y agregarlo en el constructor


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre: string = "";
  edad: number = 0;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {//se agrega en el constructor el "ViewController"
    this.nombre = this.navParams.get("nombre");//traemos los parametros que se envian desde "ajustes"
    this.edad = this.navParams.get("edad");
  }

  cerrarConParametros() {//se crean dos objetos para colocar un poco de complejidad y mostrar que se puede traer cualquier informacion
    let data = {
      nombre: "juan carlos",
      edad: 29,
      coords: {
        lat: 10,
        lng: -10
      }
    };
    this.viewCtrl.dismiss( data );//con la funsion "dismiss" se cierra la pagina modal, al colocarle el objeto dentro de los parentesis 
  }//se manda la informacion que se añadio en el metodo

  cerrarSinParametros() {
    this.viewCtrl.dismiss();//se cierra sin mandar informacion 
  }

}
