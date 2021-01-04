import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'HomeComponent',
  templateUrl: '../../views/home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  // Variables para Listas
  //---------------------------
  newList: string = '';
  tareasLista: any;
  listObjAdd: any;
  listObjEdit: any;
  lists: any = [];
  editarList: any;

  // Variables para Tareas
  //----------------------------
  newTask: string = '';
  tasks: any = [];
  taskObjAdd: any;
  taskObjEdit: any;
  deshabilitado: boolean;
  selectedAll: any;
  selectedNames: any;
  editarTask: any;
  storage: any = [];
  // Sidenav
  //---------------------------
  showFiller = false;

  constructor() {}

  ngOnInit(){
    if(localStorage.length > 0){
      // Carga de las listas ya creadas en el localStorage
      this.cargaListaTareas();
    }
  }
  //----------------------------------------------------------------------//
  // Metodo cargaListaTareas: Cargar las listas creadas                   //
  //----------------------------------------------------------------------//  
  cargaListaTareas(){

    // Log de seguimiento
    console.log('Home Component - Metodo cargaListaTareas');

    try {
      var numeroListas = localStorage.length;
      for (let index = 0; index < numeroListas; index++) {
        this.listObjAdd = {
          title: localStorage.key(index),
          tareas: JSON.parse(localStorage.getItem(localStorage.key(index)))
        }
        // Insertamos la lista en el objeto
        this.lists.push(this.listObjAdd);
      }
      this.storage = this.lists;

      // Deshabilitamos Opciones y Botones
      this.deshabilitado = true;
      this.editarTask = false;
      this.editarList = false;     

      // Log de seguimiento
      console.log('HomeComponent - Listas cargadas.');
    } catch (error) {
      // Log de seguimiento
      console.log('HomeComponent - Error en la carga de datos.');
      console.log(error);
    }

  }  
  //----------------------------------------------------------------------//
  //                                                                      //
  //                        ACCIONES PARA LISTAS:                         //
  //                        ---------------------                         //
  // Funciones:                                                           //
  //  - accionLista(param: event)                                         //
  //  - editarLista(param: lista, drawer)                                 //
  //  - createLista()                                                     //
  //  - updateLista()                                                     //
  //  - deleteLista(param: lista)                                         //
  //                                                                      //
  //----------------------------------------------------------------------//
  //----------------------------------------------------------------------//
  // Metodo accionLista: Accion a realizar con las listas.                //
  //----------------------------------------------------------------------//
  accionLista(event) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo accionLista()');

    // Editar Lista
    if(this.editarList){
      this.updateLista();
    }else{
      this.createLista();
    }

    this.newList = '';
    event.preventDefault();

  }  
  //----------------------------------------------------------------------//
  // Metodo editarLista: Carga los datos de la lista a editar             //
  //----------------------------------------------------------------------//
  editarLista(lista, drawer) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo editarLista()');

    try {
      // Abrimos el formulario para editar
      drawer.opened = true;
      // Permitimos edicion
      this.editarList = true;
      // Nos guardamos el titulo de la lista antes de editar
      this.listObjEdit = {
        newList: lista,
      }
      // Cargamos el titulo de la lista en el input
      this.newList = lista;    
      // Log de seguimiento
      console.log('Carga de datos de la lista correctamente.'); 
    } catch (error) {
      // Log de seguimiento
      console.log('Error al cargar los datos de la lista.');
      console.log(error);
    }
  }   
  //----------------------------------------------------------------------//
  // Metodo crearLista: Anadir lista nueva                                //
  //----------------------------------------------------------------------//  
  createLista(){

    // Log de seguimiento
    console.log('HomeComponent - Metodo crearLista()');

    try {
      // Creamos el objeto inicializado
      this.listObjAdd = {
        title: this.newList,
        tareas: []
      }
      // Insertamos la nueva lista
      this.lists.push(this.listObjAdd);
      // Guardamos la nueva lista en localStorage
      localStorage.setItem(this.newList, JSON.stringify(this.listObjAdd.tareas));
      // Actualizamos el storage con la nueva insercion
      this.storage = this.lists;   
      // Log de seguimiento
      console.log('Lista creada correctamente');
    } catch (error) {
      // Log de seguimiento
      console.log('Error al crear lista.');
      console.log(error);
    }
  }
  //----------------------------------------------------------------------//
  // Metodo updateLista: Actualizar lista                                 //
  //----------------------------------------------------------------------// 
  updateLista(){

    // Log de seguimiento
    console.log('HomeComponent - Metodo updateLista()');  

    try {
      // Guardamos el nuevo titulo de la lista
      this.listObjAdd = {
        newList: this.newList,
      }
      for (let index = 0; index < this.lists.length; index++) {
        // Si la key que vamos a modificar coindide con uan existente en localstorage,
        // procedemos a la modificacion del objeto
        if(this.listObjEdit.newList === this.lists[index].title){
          // Generamos el nuevo objeto a modificar con los datos existentes
          this.listObjAdd = {
            title: this.listObjAdd.newList,
            tareas: localStorage.getItem(localStorage.key(index))
          }
          // Modificamos el titulo en pantalla
          this.lists[index].title = this.listObjAdd.title;
          // "Eliminamos el objeto moficado"
          localStorage.removeItem(this.listObjEdit.newList);
          // Guardamos el nuevo objeto "modificado"
          localStorage.setItem(this.listObjAdd.title, this.listObjAdd.tareas);
          // Deshabilitamos la edicion
          this.editarList = false;
          // Log de seguimiento
          console.log('Lista modificada correctamente.');
        }
      }        
    } catch (error) {
      // Log de seguimiento
      console.log('Error al modificar la lista.');
      console.log(error);
    }
  }  
  //----------------------------------------------------------------------//
  // Metodo deleteLista: Eliminar Lista                                   //
  //----------------------------------------------------------------------//
  deleteLista(lista){

    // Log de seguimiento
    console.log('HomeComponent - Metodo deleteLista()');

    try {
      var numeroListas = localStorage.length;
      for (let index = 0; index < numeroListas; index++) {
        if(lista === this.lists[index].title){
          this.lists.splice(index, 1);
          localStorage.removeItem(lista);
        }
      }
      this.storage = this.lists;   
      // Log de seguimiento
      console.log('Lista eliminada correctamente.');
    } catch (error) {
      // Log de seguimiento
      console.log('Error al eliminar la lista.');
      console.log(error);
    }
  }  
  //----------------------------------------------------------------------//
  //                                                                      //
  //                        ACCIONES PARA TAREAS:                         //
  //                        ---------------------                         //
  // Funciones:                                                           //
  //  - accionTarea(param: event, lista, idLista)                         //
  //  - cancelarEdicion()                                                 //
  //  - editarTarea(param: tarea)                                         //
  //  - createTarea(param:lista, idLista)                                 //
  //  - updateTarea(param:lista, idLista)                                 //
  //  - deleteTarea(param:lista, idLista)                                 //
  //  - dropTarea(param: event, lista, ind)                               //
  //                                                                      //
  //----------------------------------------------------------------------//  
  //----------------------------------------------------------------------//
  // Metodo accionTarea: Accion a realizar con las tareas.                //
  //----------------------------------------------------------------------//
  accionTarea(event, lista, ind) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo accionTarea()');

    if(this.editarTask){
      // Editar tarea de una lista
      this.updateTarea(lista, ind)
    }else{
      // Añadir tarea a la lista
      this.createTarea(lista, ind);
    }

    this.newTask = '';
    event.preventDefault();
  }  
  //----------------------------------------------------------------------//
  // Metodo cancelarEdicion: Cancelar la edicion de la tarea.             //
  //----------------------------------------------------------------------//
  cancelarEdicion() {

    // Log de seguimiento
    console.log('HomeComponent - Metodo cancelarEdicion()');

    this.editarTask = false;
    this.newTask = '';
  }  
  //----------------------------------------------------------------------//
  // Metodo editarTarea: Carga los datos de la tarea a editar             //
  //----------------------------------------------------------------------//
  editarTarea(tarea) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo editarTarea()');

    try {
      // Habilitamos la edicion
      this.editarTask = true;
      // Guardamos la tarea a editar
      this.taskObjEdit = {
        newTask: tarea.newTask,
      }
      // movemos al input la tarea a editar
      this.newTask = tarea.newTask;      
      // Log de seguimiento
      console.log('Carga de datos de la tarea correcta.');      
    } catch (error) {
      // Log de seguimiento
      console.log('Error al cargar los datos de la tarea.');   
      console.log(error);
    }
  }   
  //----------------------------------------------------------------------//
  // Metodo createTarea: Anadir una nueva tarea a la lista                //
  //----------------------------------------------------------------------//  
  createTarea(lista, ind){

    // Log de seguimiento
    console.log('HomeComponent - Metodo createTarea()');

    try {
      // Añadir Tarea
      this.taskObjAdd = {
        newTask: this.newTask,
        completed: false,
        selected: false
      }

      // Recuperamos las tareas que tenga la lista(tenga o no tareas)
      this.tasks = JSON.parse(localStorage.getItem(lista));
      // Insertamos la nueva tarea
      this.tasks.push(this.taskObjAdd);
      // Guardamos la nueva lista en localStorage
      localStorage.setItem(lista, JSON.stringify(this.tasks));
      // Recuperamos las tareas ordenadas
      this.lists[ind].tareas = JSON.parse(localStorage.getItem(lista));
      // Actualizamos el storage con los nuevos datos
      this.storage = this.lists;
      // Log de seguimiento
      console.log('Tarea creada correctamente.');
    } catch (error) {
      // Log de seguimiento
      console.log('Error al crear la tarea.');
      console.log(error);
    }
  }  
  //----------------------------------------------------------------------//
  // Metodo updateTarea: Actualizar una tarea de la lista                 //
  //----------------------------------------------------------------------//  
  updateTarea(lista, ind){

    // Log de seguimiento
    console.log('HomeComponent - Metodo updateTarea()');

    try {
      // Guardamos la tarea modificada
      this.taskObjAdd = {
        newTask: this.newTask,
      }
      // Obtenemos los datos de la tarea a modificar
      var localTasks = JSON.parse(localStorage.getItem(lista));
      for (let index = 0; index < localTasks.length; index++) {
        if(localTasks[index].newTask === this.taskObjEdit.newTask){
          // Moemos el nuevo valor de la tarea
          localTasks[index].newTask= this.taskObjAdd.newTask,
          // Guardamos la tarea en localStorage
          localStorage.setItem(lista, JSON.stringify(localTasks));
          // Deshabilitamos la edicion
          this.editarTask = false;
        }
      }     

      // recuperamos los datos modificados y los mostramos
      this.lists[ind].tareas = JSON.parse(localStorage.getItem(lista));
      // Actualizamos el storage con los nuevos datos
      this.storage = this.lists;  
      // Log de seguimiento
      console.log('Tarea modificada correctamente.');
    } catch (error) {
      // Log de seguimiento
      console.log('Error al tratar de modificar la tarea.');
      console.log(error);
    }
  } 
  //----------------------------------------------------------------------//
  // Metodo deleteTarea: Eliminar tarea seleccinada de una lista        //
  //----------------------------------------------------------------------//
  deleteTarea(lista, posicion) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo deleteTarea()');

    try {
      var numeroListas = localStorage.length;
      for (let index = 0; index < numeroListas; index++) {
        if(lista === this.lists[index].title){
          // Eliminamos la tarea de la lista
          this.lists[index].tareas.splice(posicion, 1);
          localStorage.setItem(lista, JSON.stringify(this.lists[index].tareas));   
        }
      }
      // Actualizamos el storage con los datso actualizados
      this.storage = this.lists;  
      // Log de seguimiento
      console.log('Tarea eliminada correctamente.');      
    } catch (error) {
      // Log de seguimiento
      console.log('Error al eliminar la tarea.');     
      console.log(error)
    }
  }  
  //----------------------------------------------------------------------//
  // Metodo dropTarea: Cambiar el orden de las tareas mediante Drag/Drop  //
  //----------------------------------------------------------------------//
  dropTarea(event: CdkDragDrop<string[]>, lista, ind) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo dropTarea()');

    // Recuperamos las tareas de la lista
    this.tasks = JSON.parse(localStorage.getItem(lista));
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    // Guardamos el nuevo orden de las tareas
    localStorage.setItem(lista, JSON.stringify(this.tasks));
    // Recuperamos las tareas ordenadas
    this.lists[ind].tareas = JSON.parse(localStorage.getItem(lista));
    // Actualizamos el storage con los nuevos datos
    this.storage = this.lists;
  }   
  //----------------------------------------------------------------------//
  // Metodo deleteSelectedTasks: Eliminar todas las tareas seleccionadas  //
  //----------------------------------------------------------------------//
  deleteSelectedTasks() {

    // Log de seguimiento
    console.log('HomeComponent - Metodo deleteSelectedTasks');

    try {
      for(var i=(this.tasks.length -1); i > -1; i--) {
        if(this.tasks[i].completed) {
          this.tasks.splice(i, 1);
          localStorage.setItem('tarea', JSON.stringify(this.tasks));
        }
      }
      this.storage = this.tasks;
  
      // Log de seguimiento
      console.log('HomeComponent - Tareas seleccionadas eliminadas.');

      // Deshabilitamos el boton y check
      this.selectedAll = false;
      this.deshabilitado = true; 
    } catch (error) {
      // Log de seguimiento
      console.log('HomeComponent - Ha ocurrido un error al eliminar las tareas seleccionadas.');
      console.log(error);
    }
  }
  //----------------------------------------------------------------------//
  // Metodo selectAll: Seleccionar todas las tareas a la vez              //
  //----------------------------------------------------------------------//
  selectAll() {

    // Log de seguimiento
    console.log('HomeComponent - Metodo selectAll');

    this.selectedAll = !this.selectedAll;

    for (var i = 0; i < this.tasks.length; i++) {
        this.tasks[i].selected = this.selectedAll;
        this.tasks[i].completed = this.selectedAll;
    } 

    // Guardamos los atributos
    localStorage.setItem('tarea', JSON.stringify(this.tasks));

    // Validamos para activar o desactivar el boton
    if(this.selectedAll){
      this.deshabilitado = false;
    }else{
      this.deshabilitado = true;
    }
  }
  //----------------------------------------------------------------------//
  // Metodo comprobarSiAllSelected: Seleccionar todas las tareas a la vez //
  //----------------------------------------------------------------------//  
  comprobarSiAllSelected() {

    // Log de seguimiento
    console.log('HomeComponent - Metodo selectAll');    

    var totalSelected =  0;
    var contador = 0;
    for (var i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].selected) totalSelected++;
      if(this.tasks[i].completed){
        contador = contador + 1;
      }
    } 
    this.selectedAll = totalSelected === this.tasks.length;

    // Guardamos los atributos
    localStorage.setItem('tarea', JSON.stringify(this.tasks));

    if(contador > 1){
      this.deshabilitado = false;
    }else{
      this.deshabilitado = true;
    }

    return true;
  }
  //----------------------------------------------------------------------//
  // Metodo strikeTask: Tachar tareas realizadas                          //
  //----------------------------------------------------------------------// 
  strikeTask(item){

    // Log de seguimiento
    console.log('HomeComponent - Metodo strikeTask');

    try {
      console.log(item.newTask);
      var cadenaTexto = item.newTask;
      item.newTask = cadenaTexto.strike();  
      
      // Log de seguimiento
      console.log('Tarea tachada correctamente.');    
    } catch (error) {
      // Log de seguimiento
      console.log('Ha ocurrido un error al tachar la tarea.');
      console.log(error);
    }
    
  }
}
