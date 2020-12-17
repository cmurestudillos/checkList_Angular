import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: '../../views/home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{

  // Variables
  newTask: string = '';
  tasks: any = [];
  taskObjAdd: any;
  taskObjEdit: any;
  deshabilitado: boolean;
  selectedAll: any;
  selectedNames: any;
  editarTask: any;
  storage = JSON.parse(localStorage.getItem('tarea'));

  constructor() {
    console.log(this.storage)
    this.tasks = JSON.parse(localStorage.getItem('tarea'));
    if(this.tasks === 0){
      this.tasks = [];
    }

    this.deshabilitado = true;
    this.editarTask = false;
  }
  strikeTask(item){

    console.log(item.newTask);
    var cadenaTexto = item.newTask;
    item.newTask = cadenaTexto.strike();
    
  }
  //----------------------------------------------------------------------//
  // Metodo dataTask: Anadir tareas nuevas a la lista                      //
  //----------------------------------------------------------------------//
  dataTask(event) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo dataTask');

    // Editar Tarea
    if(this.editarTask){

      // Guardamos la tarea modificada
      this.taskObjAdd = {
        newTask: this.newTask,
      }
      // console.log(this.taskObjEdit.newTask)
      // console.log(this.taskObjAdd.newTask);
      
      // Obtenemos los datos de la tarea a modificar
      var localTasks = JSON.parse(localStorage.getItem('tarea'));
      for (let index = 0; index < localTasks.length; index++) {
        if(localTasks[index].newTask === this.taskObjEdit.newTask){
          localTasks[index].newTask= this.taskObjAdd.newTask,
          // console.log(localTasks);

          // Guardamos la tarea en localStorage
          localStorage.setItem('tarea', JSON.stringify(localTasks));

          // Deshabilitamos la edicion
          this.editarTask = false;
          
          // recuperamos los datos modificados y los mostramos
          this.tasks = JSON.parse(localStorage.getItem('tarea'));
        }
      }
    }else{
      // Añadir Tarea
      this.taskObjAdd = {
        newTask: this.newTask,
        completed: false
      }
  
      // Insertamos la nueva tarea
      this.tasks.push(this.taskObjAdd);
  
      // Guardamos la tarea en localStorage
      localStorage.setItem('tarea', JSON.stringify(this.tasks));
      this.storage = this.tasks;
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

    this.editarTask = true;

    this.taskObjEdit = {
      newTask: tarea.newTask,
    }

    this.newTask = tarea.newTask;

  }  
  //----------------------------------------------------------------------//
  // Metodo deleteTask: Eliminar tarea seleccionada                       //
  //----------------------------------------------------------------------//
  deleteTask(index) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo deleteTask');

    this.tasks.splice(index, 1);
    localStorage.setItem('tarea', JSON.stringify(this.tasks));
    this.storage = this.tasks;
  }
  //----------------------------------------------------------------------//
  // Metodo deleteSelectedTasks: Eliminar todas las tareas seleccionadas  //
  //----------------------------------------------------------------------//
  deleteSelectedTasks() {

    // Log de seguimiento
    console.log('HomeComponent - Metodo deleteSelectedTasks');

    for(var i=(this.tasks.length -1); i > -1; i--) {
      if(this.tasks[i].completed) {
        this.tasks.splice(i, 1);
        localStorage.setItem('tarea', JSON.stringify(this.tasks));
      }
    }
    this.storage = this.tasks;

    // Deshabilitamos el boton y check
    this.selectedAll = false;
    this.deshabilitado = true;
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
}
