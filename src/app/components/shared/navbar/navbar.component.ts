import { Component, OnInit } from '@angular/core';
// Version de la aplicacion
import packageInfo from '../../../../../package.json';

@Component({
  selector: 'NavBarComponent',
  templateUrl: '../../../views/shared/navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // titulo de la Aplicacion
  title = 'Check List';
  // Version de la aplicacion
  public appVersion: string = packageInfo.version;
  // Variables para trabajo con ficheros
  fileToUpload: File = null;
  fileLocalstorage: any;
  contenidoFichero:any = [];
  existeLista:boolean = true;

  constructor() {}

  ngOnInit() { }

  //=========================================================================================//
  // function downloadData: Exporta los datos del localStorage en un .json                   //
  //=========================================================================================// 
  downloadData(){
    // Log de seguimiento
    console.log('downloadData()');

    try {
      var downloadlink = document.getElementById('download')  as HTMLLinkElement;
      // Valor inicial para el fichero.json
      var text = '[';
      // Numero de lecturas
      var contador = 1;
      // Leemos el localstorage
      for(let index = 0; index < localStorage.length; index++) {
        // Recuperamos los datos por "key"
        this.fileLocalstorage = {
          title: localStorage.key(index),
          tareas: JSON.parse(localStorage.getItem(localStorage.key(index)))
        }      
        // Se guardan en la variable para escribir el fichero .json
        text += JSON.stringify(this.fileLocalstorage);

        // Valida cuandos documentos hay en el localstorage,
        // para separalos por "," y luego cerrar el objeto "]"
        if(contador === localStorage.length){
          text += ']';
        }else{
          text += ',';
        }
        contador += 1;
      }

      // Generamos el tipo de fichero (JSON)
      var file = new Blob([text], {type: 'application/json'});
      downloadlink.href = URL.createObjectURL(file);
      // downloadlink.download = 'localStorageData.txt';  

      console.log('Descarga del fichero correcta.');    
    } catch (error) {
      console.log('Error en la descarga del fichero');
      console.log(error);
    }
  }
  //=========================================================================================//
  // function onFileSelected: Importa los datos del localStorage                             //
  //=========================================================================================//  
  onFileSelected(file) {
    this.fileToUpload = file.target.files[0];
    
    // Validamos que sea un fichero valido
    if (typeof (FileReader) !== 'undefined') {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        // Leeemos el contenido del fichero y lo extraemos
        this.contenidoFichero = fileReader.result;
        this.contenidoFichero = JSON.parse(this.contenidoFichero);

        // Leemos el localstorage
        if(localStorage.length > 0 ){
          var contenidoStorage:any = [];
          for (const key in this.contenidoFichero) {
            if (Object.prototype.hasOwnProperty.call(this.contenidoFichero, key)) {
              for (let index = 0; index < localStorage.length; index++) {
                contenidoStorage = localStorage.key(index);
                // Verificamos que los datos a introducir no existan
                if(this.contenidoFichero[key].title === contenidoStorage){
                  this.existeLista = true;
                  console.log('Ya existe la lista: ' + this.contenidoFichero[key].title);
                  index = localStorage.length;
                }else{
                  this.existeLista = false;
                }            
              }
              // Si los datos a importar no existen, se crean en el localstorage
              if(!this.existeLista){
                // Guardamos en el localstorage los datos cargados del fichero
                localStorage.setItem(this.contenidoFichero[key].title, JSON.stringify(this.contenidoFichero[key].tareas));
                console.log('Lista ' + this.contenidoFichero[key].title + ' creada.');
              }
            }
          }          
        }else{
          for (let index = 0; index < this.contenidoFichero.length; index++) {
            // Guardamos en el localstorage los datos cargados del fichero
            localStorage.setItem(this.contenidoFichero[index].title, JSON.stringify(this.contenidoFichero[index].tareas)); 
          }
          // Cargamos la pagina con la importacion de datos
          window.location.reload();
        }

      }
      fileReader.readAsText(this.fileToUpload);
    }
  }  
}
