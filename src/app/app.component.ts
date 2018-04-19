import { Component } from '@angular/core';

import { Platform, MenuController } from 'ionic-angular';//se import la libreria menuController para tener las propiedades para cerrar abrir y controlar de manera general el menu

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage,Ajustes2Page } from '../pages/index.paginas';//se traen las paginas que se utilizaran para el menu

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabs = TabsPage;//se guardan las paginas que se trajeron en variables diferentes 
  ajustes2 = Ajustes2Page;

  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      //se coloca la variable siempre con la accesibilidad (public, private, protected) y se indica que es de tipo "MenuController"
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrirPagina(pg:any){
    this.rootPage = pg;//para abrir la pagina despues de darle click en el menu, es necesario igualarla a la "rootPage"
    this.menuCtrl.close();
  }

  closeMenu(){
    this.menuCtrl.close();
  }
}

