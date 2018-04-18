import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { PrincipalPage, AjustesPage }from '../index.paginas';//se traen las paginas raiz a las que los tabs redireccionaran

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;//se asignan las variables las cuales resiviran las paginas que importamos 
  tab2:any;

  constructor() {
    this.tab1 = PrincipalPage;//se igualan para que cuando carge la pagina se asignen las paginas 
    this.tab2 = AjustesPage;
  }


}
