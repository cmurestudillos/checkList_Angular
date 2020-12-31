import { Component, OnInit } from '@angular/core';
// Version de la aplicacion
import { version } from '../../../../../package.json';

@Component({
  selector: 'app-navbar',
  templateUrl: '../../../views/shared/navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Check List';
  public appVersion: string = version;
  fileLocalstorage: any;
  srcResult: any;

  constructor() {}

  ngOnInit() { }

  //----------------------------------------------------------------------//
  // Metodo downloadData: Exporta los datos del localStorage en un .txt   //
  //----------------------------------------------------------------------// 
  downloadData(){
    
    // Log de seguimiento
    console.log('Home Component - Metodo cargaListaTareas');

    try {
      var downloadlink = document.getElementById('download')  as HTMLLinkElement;
      var text = '';
      for(let index = 0; index < localStorage.length; index++) {
        this.fileLocalstorage = {
          title: localStorage.key(index),
          tareas: JSON.parse(localStorage.getItem(localStorage.key(index)))
        }      
        text += JSON.stringify(this.fileLocalstorage);
      }
  
      var file = new Blob([text], {type: 'text/plain'});
      downloadlink.href = URL.createObjectURL(file);
      // downloadlink.download = 'localStorageData.txt';  

      console.log('Descarga del fichero correcta.');    
    } catch (error) {
      console.log('Error en la descarga del fichero');
      console.log(error);
    }
  }
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }  
}
