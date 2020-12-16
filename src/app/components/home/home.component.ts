import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: '../../views/home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{

  // Variables
  newTodo: string = '';
  todos: any = [];
  todoObj: any;
  deshabilitado: boolean;
  selectedAll: any;
  selectedNames: any;

  constructor() {
    this.todos = JSON.parse(localStorage.getItem('tarea'));
    this.deshabilitado = true;
  }
  //----------------------------------------------------------------------//
  // Metodo addTask: Anadir tareas nuevas a la lista                      //
  //----------------------------------------------------------------------//
  addTask(event) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo addTask');

    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }

    this.todos.push(this.todoObj);
    // console.log(this.todoObj)
    // console.log(this.todos)

    // Guardamos la tarea en localStorage
    localStorage.setItem('tarea', JSON.stringify(this.todos));

    this.newTodo = '';
    event.preventDefault();
  }
  //----------------------------------------------------------------------//
  // Metodo deleteTask: Eliminar tarea seleccionada                       //
  //----------------------------------------------------------------------//
  deleteTask(index) {

    // Log de seguimiento
    console.log('HomeComponent - Metodo deleteTask');

    this.todos.splice(index, 1);
    localStorage.setItem('tarea', JSON.stringify(this.todos));
  }
  //----------------------------------------------------------------------//
  // Metodo deleteSelectedTasks: Eliminar todas las tareas seleccionadas  //
  //----------------------------------------------------------------------//
  deleteSelectedTasks() {

    // Log de seguimiento
    console.log('HomeComponent - Metodo deleteSelectedTasks');

    for(var i=(this.todos.length -1); i > -1; i--) {
      if(this.todos[i].completed) {
        this.todos.splice(i, 1);
        localStorage.setItem('tarea', JSON.stringify(this.todos));
      }
    }
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

    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
    // Guardamos el nuevo orden
    localStorage.setItem('tarea', JSON.stringify(this.todos));
  }
  //----------------------------------------------------------------------//
  // Metodo selectAll: Seleccionar todas las tareas a la vez              //
  //----------------------------------------------------------------------//
  selectAll() {

    // Log de seguimiento
    console.log('HomeComponent - Metodo selectAll');

    this.selectedAll = !this.selectedAll;

    for (var i = 0; i < this.todos.length; i++) {
        this.todos[i].selected = this.selectedAll;
        this.todos[i].completed = this.selectedAll;
    } 

    // Guardamos los atributos
    localStorage.setItem('tarea', JSON.stringify(this.todos));

    // Validamos para activar o desactivar el boton
    if(this.selectedAll){
      this.deshabilitado = false;
    }else{
      this.deshabilitado = true;
    }
  }
  //----------------------------------------------------------------------//
  // Metodo comprobarSiAllSelected: Seleccionar todas las tareas a la vez              //
  //----------------------------------------------------------------------//  
  comprobarSiAllSelected() {

    // Log de seguimiento
    console.log('HomeComponent - Metodo selectAll');    

    var totalSelected =  0;
    var contador = 0;
    for (var i = 0; i < this.todos.length; i++) {
      if(this.todos[i].selected) totalSelected++;
      if(this.todos[i].completed){
        contador = contador + 1;
      }
    } 
    this.selectedAll = totalSelected === this.todos.length;

    // Guardamos los atributos
    localStorage.setItem('tarea', JSON.stringify(this.todos));

    if(contador > 1){
      this.deshabilitado = false;
    }else{
      this.deshabilitado = true;
    }

    return true;
  }
}
