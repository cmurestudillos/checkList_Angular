import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
// Servicios
import { ListasService } from '../../services/listas.service';
import { TareasService } from '../../services/tareas.service';
// Ventana Modal
import Swal from 'sweetalert2';

@Component({
  selector: "HomeComponent",
  templateUrl: "../../views/home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  // Variables para Listas
  //---------------------------
  tituloLista: string = "";
  idLista: number;
  nuevaLista: string = "";
  oldLista: string = "";
  listas: any = [];
  actUpdate: any;

  // Variables para Tareas
  //----------------------------
  tareas: any = [];
  nuevaTarea: string = "";
  oldTarea: string = '';
  posicionTarea: number;
  selectedAll: any;
  edicionTarea: any;
  resultado: string = "";

  // Otras variables
  //---------------------------
  storage: any = [];
  showLista = false;
  seleccionarTodas = false;
  eliminarSeleccionadas = true;

  constructor(private _listas: ListasService, private _tareas: TareasService) {}

  ngOnInit() {
    // Log de seguimiento
    console.log('Carga inicial de la aplicacion.');

    // Comprobamos que hay datos en el localstorage
    if(localStorage.length > 0){
      // Cargamos las lists creadas
      this._listas.cargaListas().subscribe((data) => {
        this.listas = data;
        this.storage = data;
      });
    }
  }
  //=========================================================================================//
  // function datosLista: Obtenemos los datos de la lista seleccionada                       //
  //=========================================================================================//
  datosLista(titulo: string, id: number) {
    // Log de seguimiento
    console.log('datosLista()');

    this.tituloLista = titulo;
    this.idLista = id;
    this.showLista = true;
    this.tareas = JSON.parse(localStorage.getItem(titulo));
    // Deshabilitar boton para selecciona multiple
    if(this.tareas.length === 0 || this.tareas.length === 1){
      this.seleccionarTodas = true;
    }else{
      this.seleccionarTodas = false;
    }
  }
  //=========================================================================================//
  // function datosListaEdicion: Obtenemos los datos de la lista a editar                    //
  //=========================================================================================//
  datosListaEdicion(titulo: string, drawer) {
    // Log de seguimiento
    console.log('datosListaEdicion()');

    this.nuevaLista = titulo;
    this.oldLista = titulo;
    drawer.opened = true;
    this.actUpdate = true;
  }
  //=========================================================================================//
  // function datosTareaEdicion: Obtenemos los datos de la tarea a editar                    //
  //=========================================================================================// 
  datosTareaEdicion(tareaEditada: string, posicion: number){
    // Log de seguimiento
    console.log('datosTareaEdicion()');

    this.oldTarea = tareaEditada;
    this.nuevaTarea = tareaEditada;
    this.posicionTarea = posicion;
    this.edicionTarea = true;
  }
  //=========================================================================================//
  // function valorInput: Obtenemos el valor del Input para modificar el registro            //
  //=========================================================================================// 
  valorInput(evt) {
    this.resultado = evt.target.value;
  }
  //=========================================================================================//
  //                                                                                         //
  //                                  ACCIONES PARA LISTAS:                                  //
  //                                  ---------------------                                  //
  // Funciones:                                                                              //
  //  - createLista(param: lista)                                                            //
  //  - updateLista(param: newValue, oldValue,  drawer)                                      //
  //  - deleteLista(param: lista)                                                            //
  //  - dropLista(param: event)                                                              //
  //                                                                                         //
  //=========================================================================================//
  //=========================================================================================//
  // function createLista: Crear nueva listas                                                //
  //=========================================================================================//
  createLista(listaParam, drawer) {
    // Log de seguimiento
    console.log('createLista()');

    // Si la lista no existe, la creamos
    this._listas.crearLista(listaParam).subscribe((data: any) => {
      if (data.status === 200) {
        // Mostramos mensaje satisfactorio
        Swal.fire({
          title: "Correcto",
          text: "Se ha creado la lista correctamente.",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(result => {
        // Limpiamos el formulario
        this.nuevaLista = "";
        drawer.opened = false;
        this.listas = data.listas;
        });        
      } else {
        // Mostramos mensaje de error
        Swal.fire({
          title: "Error",
          text: "La lista ya existe.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    });
  }
  //=========================================================================================//
  // function updateLista: Modificar el titulo de la lista                                   //
  //=========================================================================================//
  updateLista(nuevalistaParam, oldlistaParam, drawer) {
    // Log de seguimiento
    console.log('updateLista()');    

    // Si la lista no existe, la creamos
    this._listas
      .editarLista(nuevalistaParam, oldlistaParam)
      .subscribe((data: any) => {
        if (data === 200) {
          // Mostramos mensaje satisfactorio
          Swal.fire({
            title: "Correcto",
            text: "Se ha modificado la lista correctamente.",
            icon: "success",
            confirmButtonText: "Ok",
          });
          // Limpiamos el formulario
          this.nuevaLista = "";
          // Deshabilitamos la edicion
          this.actUpdate = false;
          drawer.opened = false;
          this.showLista = false;
        } else {
          // Mostramos mensaje de error
          Swal.fire({
            title: "Error",
            text: "Ha ocurrido un error al modificar la lista.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      });
  }
  //=========================================================================================//
  // function deleteLista: Lista a eliminar                                                  //
  //=========================================================================================//
  deleteLista(lista) {
    // Log de seguimiento
    console.log('deleteLista()'); 

    // Si la lista no existe, la creamos
    this._listas.eliminarLista(lista).subscribe((data: any) => {
      if (data === 200) {
        // Mostramos mensaje satisfactorio
        Swal.fire({
          title: "Correcto",
          text: "Se ha eliminado la lista correctamente.",
          icon: "success",
          confirmButtonText: "Ok",
        });
        this.storage = this.listas;
        this.showLista = false;
      } else {
        // Mostramos mensaje de error
        Swal.fire({
          title: "Error",
          text: "Ha ocurrido un error al eliminar la lista.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    });
  }
  //=========================================================================================//
  //                                                                                         //
  //                                      ACCIONES PARA TAREAS:                              //
  //                                      ---------------------                              //
  // Funciones:                                                                              //
  //  - createTarea(param:lista)                                                             //
  //  - updateTarea(param:lista, oldTarea)                                                   //
  //  - deleteTarea(param:lista, posicion)                                                   //
  //  - cancelTarea()                                                                        //
  //  - dropTarea(param: event, lista, ind)                                                  //
  //  - selectAll()                                                                          //
  //  - deleteTareas(param: lista)                                                           //
  //  - comprobarTareasSeleccionadas(params: lista, posicion)                                //
  //                                                                                         //
  //=========================================================================================//
  //=========================================================================================//
  // function createTarea: Anadir nueva tarea a la lista seleccionada                        //
  //=========================================================================================//
  createTarea(lista) {
    // Log de seguimiento
    console.log('createTarea()'); 

    //  Si la lista no existe, la creamos
    this._tareas.crearTarea(lista, this.resultado).subscribe((data: any) => {
    if (data === 200) {
      // Mostramos mensaje satisfactorio
      Swal.fire({
        title: "Correcto",
        text: "Se ha creado la tarea correctamente.",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(result => {
          // Actualizamos la lista de tareas
        this.tareas = JSON.parse(localStorage.getItem(lista));
        // Limpiamos el formulario
        this.nuevaTarea = "";
        // Validamos el boton para seleccionar todas
        if(this.tareas.length > 1){
          this.seleccionarTodas = false;
        }else{
          this.seleccionarTodas = true;
        }
      });
    } else {
      // Mostramos mensaje de error
      Swal.fire({
        title: "Error",
        text: "La tarea ya existe.",
        icon: "error",
        confirmButtonText: "Ok",
      });
     }
    });   
  }
  //=========================================================================================//
  // function updateTarea: Actualizar una tarea de la lista seleccionada                     //
  //=========================================================================================//
  updateTarea(tituloLista, oldTarea) {
    // Log de seguimiento
    console.log('updateTarea()');

    //  Si la lista no existe, la creamos
    this._tareas.actualizarTarea(tituloLista, oldTarea, this.resultado).subscribe((data: any) => {
      if (data === 200) {
        // Mostramos mensaje satisfactorio
        Swal.fire({
          title: "Correcto",
          text: "Se ha modificado la tarea correctamente.",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(result => {
          // recuperamos los datos modificados y los mostramos
          this.tareas = JSON.parse(localStorage.getItem(tituloLista));
          // Limpiamos el formulario
          this.nuevaTarea = "";
          // Deshabilitamos la edicion
          this.edicionTarea = false;
        });
      } else {
        // Mostramos mensaje de error
        Swal.fire({
          title: "Error",
          text: "Ha ocurrdo un error al modificar la tarea.",
          icon: "error",
          confirmButtonText: "Ok",
        });
       }
      });     
  }
  //=========================================================================================//
  // function deleteTarea: Eliminar tarea seleccinada de una lista seleccionada              //
  //=========================================================================================//
  deleteTarea(posicion) {
    // Log de seguimiento
    console.log('deleteTarea()');    

    // Obtenemos los datos de la lista
    var datoslistaseleccionada = {
      title: localStorage.key(this.idLista),
      tareas: JSON.parse(localStorage.getItem(localStorage.key(this.idLista)))
    }

    //  Tarea a eliminar de la lista
    this._tareas.eliminarTarea(posicion, datoslistaseleccionada).subscribe((data: any) => {
      if (data === 200) {
        // Mostramos mensaje satisfactorio
        Swal.fire({
          title: "Correcto",
          text: "Se ha eliminado la tarea correctamente.",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(result => {
           // Actualizamos la lista de tareas
          this.tareas = JSON.parse(localStorage.getItem(datoslistaseleccionada.title));
          // Validamos el boton para seleccionar todas
          if(this.tareas.length > 1){
            this.seleccionarTodas = false;
          }else{
            this.seleccionarTodas = true;
          }
        });
      } else {
        // Mostramos mensaje de error
        Swal.fire({
          title: "Error",
          text: "La tarea no se ha podido eliminar.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    });    
  }
  //=========================================================================================//
  // function cancelTarea: Cancelar la edicion de la tarea.                                  //
  //=========================================================================================//
  cancelTarea() {
    // Log de seguimiento
    console.log('cancelTarea()'); 

    this.edicionTarea = false;
    this.nuevaTarea = "";
  }  
  //=========================================================================================//
  // function dropTarea: Cambiar el orden de las tareas mediante Drag/Drop                   //
  //=========================================================================================//
  dropTarea(event: CdkDragDrop<string[]>, lista) {
    // Log de seguimiento
    console.log('dropTarea()');

    // Recuperamos las tareas de la lista
    this.tareas = JSON.parse(localStorage.getItem(lista));
    moveItemInArray(this.tareas, event.previousIndex, event.currentIndex);
    // // Guardamos el nuevo orden de las tareas
    localStorage.setItem(lista, JSON.stringify(this.tareas));
    // // Recuperamos las tareas ordenadas
    this.tareas = JSON.parse(localStorage.getItem(lista));
    // // Actualizamos el storage con los nuevos datos
    this.storage = this.listas;
  }
  //=========================================================================================//
  // function selectAll: Seleccionar todas las tareas de una lista                           //
  //=========================================================================================//
  selectAll(tituloLista) {
    // Log de seguimiento
    console.log('selectAll()');

    this.selectedAll = !this.selectedAll;

    for (var i = 0; i < this.tareas.length; i++) {
      this.tareas[i].selected = this.selectedAll;
      this.tareas[i].completed = this.selectedAll;
    }

    // Guardamos los atributos
    localStorage.setItem(tituloLista, JSON.stringify(this.tareas));

    // Validamos para activar o desactivar el boton
    if (this.selectedAll) {
      this.seleccionarTodas = false;
      this.eliminarSeleccionadas = false;
    }else{
      this.eliminarSeleccionadas = true;
    }
  }  
  //=========================================================================================//
  // function deleteTareas: Eliminar varias tareas de una lista                              //
  //=========================================================================================//
  deleteTareas(tituloLista) {
    // Log de seguimiento
    console.log('deleteTareas()');    

    // Obtenemos los datos de la lista
    var datoslistaseleccionada = {
      title: localStorage.key(this.idLista),
      tareas: JSON.parse(localStorage.getItem(localStorage.key(this.idLista)))
    }

    //  Tarea a eliminar de la lista
    this._tareas.eliminarTareas(tituloLista, datoslistaseleccionada).subscribe((data: any) => {
      if (data === 200) {
        // Mostramos mensaje satisfactorio
        Swal.fire({
          title: "Correcto",
          text: "Se han eliminado la tareas correctamente.",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(result => {
           // Actualizamos la lista de tareas
          this.tareas = JSON.parse(localStorage.getItem(datoslistaseleccionada.title));
          // Deshabilitamos los botones de seleccionar y eliminar
          this.seleccionarTodas = true;
          this.eliminarSeleccionadas = true;
        });
      } else {
        // Mostramos mensaje de error
        Swal.fire({
          title: "Error",
          text: "Las tareas no se han podido eliminar.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    });
  }
  //=========================================================================================//
  // function comprobarTareasSeleccionadas: Seleccionar una tarea de la lista                //
  //=========================================================================================//
  comprobarTareasSeleccionadas(tituloLista, posicion) {
    // Log de seguimiento
    console.log('comprobarTareasSeleccionadas()'); 

    var datoslistaseleccionada = {
      title: localStorage.key(this.idLista),
      tareas: JSON.parse(localStorage.getItem(localStorage.key(this.idLista)))
    }

    // Validamos si la tarea para marcarla o desmarcarla
    if(datoslistaseleccionada.tareas[posicion].selected){
      datoslistaseleccionada.tareas[posicion].selected = false;
      datoslistaseleccionada.tareas[posicion].completed = false;
    }else{
      datoslistaseleccionada.tareas[posicion].selected = true;
      datoslistaseleccionada.tareas[posicion].completed = true;
    }

    // Guardamos los atributos
    localStorage.setItem(tituloLista, JSON.stringify(datoslistaseleccionada.tareas));

    return true;
  }
}
