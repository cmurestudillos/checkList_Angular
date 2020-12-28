import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
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

        // console.log(this.listObjAdd.tareas.newTask)
        // if(this.listObjAdd.tareas.newTask !== ''){
        //   this.tasks = JSON.parse(localStorage.getItem(this.listObjAdd.title));
        //   console.log(this.tasks[index].newTask)
        // }else{
        //   console.log('no hay tarea');
        // }
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
  //          ACCIONES PARA LISTAS: CREAR, MODIFICAR Y ELIMINAR           //
  //                                                                      //
  // Funciones:                                                           //
  //  - crearLista()                                                      //
  //  - editarlista()                                                     //
  //  - eliminarLista()                                                   //
  //                                                                      //
  //----------------------------------------------------------------------//
  //----------------------------------------------------------------------//
  // Metodo crearLista: Anadir lista nueva                                //
  //----------------------------------------------------------------------//  
  crearLista(){

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
  // Metodo editarlista: Editar una lista existente                       //
  //----------------------------------------------------------------------// 
  editarLista(){

    // Log de seguimiento
    console.log('HomeComponent - Metodo editarLista()');  

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
  // Metodo deleteList: Eliminar Lista                                    //
  //----------------------------------------------------------------------//
  eliminarLista(lista){

    // Log de seguimiento
    console.log('HomeComponent - Metodo eliminarLista()');

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
  // Metodo dataTask: Anadir lista nueva                                  //
  //----------------------------------------------------------------------//
  dataList(event) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo dataList');

    // Editar Lista
    if(this.editarList){
      this.editarLista();
    }else{
      this.crearLista();
    }

    this.newList = '';
    event.preventDefault();

  } 
  //----------------------------------------------------------------------//
  // Metodo editList: Edita una lista                                     //
  //----------------------------------------------------------------------//
  editList(lista, drawer) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo editList');

    try {
      // Abrimos el formulario para editar
      drawer.opened = true;

      this.editarList = true;

      this.listObjEdit = {
        newList: lista,
      }

      this.newList = lista;    

      // Log de seguimiento
      console.log('HomeComponent - Apertura de edicion correcta.'); 
    } catch (error) {
      // Log de seguimiento
      console.log('HomeComponent - Error al abrir edicion de lista.');
      console.log(error);
    }

  } 
  //----------------------------------------------------------------------//
  //                                                                      //
  //          ACCIONES PARA TAREAS: CREAR, MODIFICAR Y ELIMINAR           //
  //                                                                      //
  // Funciones:                                                           //
  //  - crearTarea(param:lista)                                           //
  //  - editarTarea(param:lista)                                          //
  //  - eliminarTarea(param:lista, id)                                    //
  //                                                                      //
  //----------------------------------------------------------------------//  
  //----------------------------------------------------------------------//
  // Metodo crearLista: Anadir una nueva tarea a la lista                 //
  //----------------------------------------------------------------------//  
  crearTarea(lista){

    // Log de seguimiento
    console.log('HomeComponent - Metodo crearTarea()');

    try {
      // Añadir Tarea
      this.taskObjAdd = {
        newTask: this.newTask,
        completed: false,
        selected: false
      }

      // Insertamos la nueva lista
      this.tasks.push(this.taskObjAdd);

      // Guardamos la nueva lista en localStorage
      localStorage.setItem(lista, JSON.stringify(this.tasks));

      var numeroListas = localStorage.length;
      for (let index = 0; index < numeroListas; index++) {
        if(lista === this.lists[index].title){
          this.listObjAdd = {
            tareas: JSON.parse(localStorage.getItem(localStorage.key(index)))
          }
          // Insertamos la tarea en la lista
          this.lists[index].tareas.push(this.listObjAdd.tareas[index]);
        }
      }

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
  // Metodo editarTarea: Editar una tarea de la lista                     //
  //----------------------------------------------------------------------//  
  editarTarea(lista){

    // Log de seguimiento
    console.log('HomeComponent - Metodo crearTarea()');
    // try {
    //   // Guardamos la tarea modificada
    //   this.taskObjAdd = {
    //     newTask: this.newTask,
    //   }
    //   // console.log(this.taskObjEdit.newTask)
    //   // console.log(this.taskObjAdd.newTask);
      
    //   // Obtenemos los datos de la tarea a modificar
    //   var localTasks = JSON.parse(localStorage.getItem(idLista));
    //   for (let index = 0; index < localTasks.length; index++) {
    //     if(localTasks[index].newTask === this.taskObjEdit.newTask){
    //       localTasks[index].newTask= this.taskObjAdd.newTask,
    //       // console.log(localTasks);

    //       // Guardamos la tarea en localStorage
    //       localStorage.setItem(idLista, JSON.stringify(localTasks));

    //       // Deshabilitamos la edicion
    //       this.editarTask = false;
          
    //       // recuperamos los datos modificados y los mostramos
    //       this.tasks = JSON.parse(localStorage.getItem(idLista));

    //       // Log de seguimiento
    //       console.log('HomeComponent - Tarea modificada correctamente.');
    //     }
    //   }        
    // } catch (error) {
    //   // Log de seguimiento
    //   console.log('HomeComponent - Error al tratar de modificar la tarea.');
    //   console.log(error);
    // }
  }  
  //----------------------------------------------------------------------//
  // Metodo eliminarTarea: Eliminar tarea seleccinada de una lista        //
  //----------------------------------------------------------------------//
  eliminarTarea(lista, posicion) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo eliminarTarea');

    try {

      debugger
      
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
  // Metodo dataTask: Anadir tareas nuevas a la lista                      //
  //----------------------------------------------------------------------//
  dataTask(event, lista) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo dataTask');

    if(this.editarTask){
      // Editar tarea de una lista
      this.editarTarea(lista)
    }else{
      // Añadir tarea a la lista
      this.crearTarea(lista);
    }

    this.newTask = '';
    event.preventDefault();
  }
  //----------------------------------------------------------------------//
  // Metodo editTask: Edita una tarea seleccionada                        //
  //----------------------------------------------------------------------//
  editTask(tarea, index) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo editTask');

    try {
      this.editarTask = true;

      this.taskObjEdit = {
        newTask: tarea.newTask,
      }
  
      this.newTask = tarea.newTask;      

      // Log de seguimiento
      console.log('HomeComponent - Apertura de edicion correcta.');      
    } catch (error) {
      // Log de seguimiento
      console.log('HomeComponent - Error al abrir edicion de Tarea.');   
      console.log(error);
    }
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
  // Metodo drop: Cambiar el orden de las tareas mediante Drag/Drop       //
  //----------------------------------------------------------------------//
  drop(event: CdkDragDrop<string[]>) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo drop');

    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);

    // Guardamos el nuevo orden
    localStorage.setItem('tarea', JSON.stringify(this.tasks));
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
      console.log('HomeComponent - Tarea tachada correctamente.');    
    } catch (error) {
      // Log de seguimiento
      console.log('HomeComponent - Ha ocurrido un error al tachar la tarea.');
      console.log(error);
    }
    
  }
}
