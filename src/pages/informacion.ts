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