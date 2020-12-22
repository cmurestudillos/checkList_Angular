import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { formatDate } from '@angular/common';

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
          tareas: localStorage.getItem(localStorage.key(index))
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
  // Metodo dataTask: Anadir lista nueva                                  //
  //----------------------------------------------------------------------//
  dataList(event) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo dataList');

    // Editar Lista
    if(this.editarList){
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
            console.log('HomeComponent - Lista modificada correctamente.');
          }
        }        
      } catch (error) {
        // Log de seguimiento
        console.log('HomeComponent - Error al modificar la lista.');
        console.log(error);
      }
    }else{
      try {
        // Añadir Lista - Inicializada
        this.tareasLista = {
          newTask: '',
          completed: false,
          selected: false
        }
    
        // Metemos los valores en un objeto nuevo
        this.listObjAdd = {
          title: this.newList,
          tareas: this.tareasLista
        }
    
        // Insertamos la nueva lista
        this.lists.push(this.listObjAdd);
    
        // Guardamos la nueva lista en localStorage
        localStorage.setItem(this.newList, JSON.stringify(this.tareasLista));
        
        // Actualizamos el storage con la nueva insercion
        this.storage = this.lists;   
        
        // Log de seguimiento
        console.log('HomeComponent - Lista creada correctamente');
      } catch (error) {

        // Log de seguimiento
        console.log('HomeComponent - Error al crear lista.');
        console.log(error);
      }
    }

    this.newList = '';
    event.preventDefault();

  } 
  //----------------------------------------------------------------------//
  // Metodo deleteList: Eliminar Lista                                    //
  //----------------------------------------------------------------------//
  deleteList(listaId) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo deleteList');

    try {
      var numeroListas = localStorage.length;
      for (let index = 0; index < numeroListas; index++) {
        if(listaId === this.lists[index].title){
          this.lists.splice(index, 1);
          localStorage.removeItem(listaId);
        }
      }
      this.storage = this.lists;   
      
      // Log de seguimiento
      console.log('HomeComponent - Lista eliminada correctamente.');
    } catch (error) {
      // Log de seguimiento
      console.log('HomeComponent - Error al eliminar la lista.');
      console.log(error);
    }

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
  // Metodo dataTask: Anadir tareas nuevas a la lista                      //
  //----------------------------------------------------------------------//
  dataTask(event, idLista) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo dataTask');

    // Editar Tarea
    if(this.editarTask){
      try {
        // Guardamos la tarea modificada
        this.taskObjAdd = {
          newTask: this.newTask,
        }
        // console.log(this.taskObjEdit.newTask)
        // console.log(this.taskObjAdd.newTask);
        
        // Obtenemos los datos de la tarea a modificar
        var localTasks = JSON.parse(localStorage.getItem(idLista));
        for (let index = 0; index < localTasks.length; index++) {
          if(localTasks[index].newTask === this.taskObjEdit.newTask){
            localTasks[index].newTask= this.taskObjAdd.newTask,
            // console.log(localTasks);

            // Guardamos la tarea en localStorage
            localStorage.setItem(idLista, JSON.stringify(localTasks));

            // Deshabilitamos la edicion
            this.editarTask = false;
            
            // recuperamos los datos modificados y los mostramos
            this.tasks = JSON.parse(localStorage.getItem(idLista));

            // Log de seguimiento
            console.log('HomeComponent - Tarea modificada correctamente.');
          }
        }        
      } catch (error) {
        // Log de seguimiento
        console.log('HomeComponent - Error al tratar de modificar la tarea.');
        console.log(error);
      }
    }else{
      try {
        // Añadir Tarea
        this.taskObjAdd = {
          newTask: this.newTask,
          completed: false
        }

        // Inicializamos el array
        this.tasks = [];

        // Insertamos la nueva tarea
        this.tasks.push(this.taskObjAdd);
    
        // Guardamos la tarea en localStorage
        localStorage.setItem(idLista, JSON.stringify(this.tasks));
        this.storage = this.tasks;   

        // Log de seguimiento
        console.log('HomeComponent - Tarea creada correctamente.');     
      } catch (error) {
        // Log de seguimiento
        console.log('HomeComponent - Error al crear tarea.');  
        console.log(error);
      }
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
  // Metodo deleteTask: Eliminar tarea seleccionada                       //
  //----------------------------------------------------------------------//
  deleteTask(index) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo deleteTask');

    try {
      this.tasks.splice(index, 1);
      localStorage.setItem('tarea', JSON.stringify(this.tasks));
      this.storage = this.tasks;  

      // Log de seguimiento
      console.log('HomeComponent - Tarea eliminada correctamente.');      
    } catch (error) {
      // Log de seguimiento
      console.log('HomeComponent - Error al eliminar la tarea.');     
      console.log(error)
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
