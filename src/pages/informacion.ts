/*en el commit "creandoPaginas" se crearon todas las paginas por medio del generador de ionic con la siguiente
linea de comando "ionic g page nombrePagina", se agregaron las paginas en "index.paginas.ts" con el metodo "export"
para llamarlas de una mejor forma (mas organizada) en "app.modules.ts", ya que todos los componentes y paginas
tienes que ser llamadas en este documento.
se importaron todas las paginas de "index.paginas.ts" y luego se acomodaron en los campos "declarations"
y "entryComponents", cuando es solo un componente (no una pagina) solo se coloca en "declarations"*/

/*se configuro la pagina root para que cuando cargue la app comience desde otra pagina, se tienen que modificar los
valores predeterminado incluyendo la eliminacion de la pagina "home" que trae por defecto el proycto de ionic
se borra la importacion de la pagina "home" en "app.component.ts" y "app.module.ts", ademas de borrar en "declarations" 
"entryComponents" del documento "app.module.ts"*/

/*commit pasarPagina
se crean dos botones con "ion-button" uno con funcion "(click)" y otra con redireccion html*/

/*commit enviandoParametros
se mustra dos diferentes formas para realizar la transferencia de datos a otra pagina por medio del navParams
se esta enviando la informacion de un array implementado en "pagina2.ts" a la pagina3
por medio de las paginas .ts se utiliza el objeto y se importa el "NavController" y el "NavParams" de "ionic-angular"
el constructor de la pagina que se crea por defecto ya implementa estas funciones por medio de la variable "navCtrl"
y "navParams" */

/*commit tabs
se asignaron dos paginas raiz para los tabs "pagina principal" y "ajustes" y se controlo el devolverse de la pagina
"ajustes" sin necesidad de la funsion "push" implementando el "parent.select()" colocando el "2" entre los parentesis
para llegar a la posicion 3 ya que se manejan los tabs como un array */

/*commit paginaModal
se muestra cuales son las librerias que se tienen que importar para que funcione correctamente ademas de como enviar
parametros y cerrar el modal sin necesidad de enviar parametros
las clases que se tiene que importar son "ViewController" para controlar las vistas y que se muestra en la pagina modal
y "ModalController" que es la que se encarga de crear la pagina modal */