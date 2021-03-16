import { Injectable } from '@angular/core';
// Operadores
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  // Variables para tareas
  tareas: any = [];
  tareaObjAdd: any;
  tareaObjEdit: any;
  status: any;

  constructor() { }

  //==============================================================================//
  // Se crea una nueva tarea                                                      //
  //==============================================================================//
  public crearTarea(lista: string, nuevaTarea: string) : Observable<any[]> {
    try {
      // Añadir Tarea
      this.tareaObjAdd = {
        tarea: nuevaTarea,
        completed: false,
        selected: false,
      };
      // Recuperamos las tareas que tenga la lista(tenga o no tareas)
      this.tareas = JSON.parse(localStorage.getItem(lista));
      // Insertamos la nueva tarea
      this.tareas.push(this.tareaObjAdd);
      // Guardamos la nueva lista en localStorage
      localStorage.setItem(lista, JSON.stringify(this.tareas));

      // Una vez creada la tarea, limpiamos el input
      var elements = document.querySelectorAll("input[type='text']");
      // Por cada input field le añadimos una funcion 'onFocus'
      for (var i = 0; i < elements.length; i++) {
        let input = document.getElementById(elements[i].id) as HTMLInputElement;
        if (input.value !== "") {
          input.value = "";
        }
      }
      // confirmacion positiva de que ha ido todo bien
      this.status = 200;
      return of(this.status);  
    } catch (error) {
      console.log(error);
      // Ha ocurrido un error en la operacion
      this.status = 500;
      return of(this.status);        
    }
  }
  //==============================================================================//
  // Se actualiza la tarea seleccionada                                           //
  //==============================================================================//
  public actualizarTarea(lista: string, oldTarea:string, resultado:string) : Observable<any[]> {
    try {
      // Obtenemos los datos de la tarea a modificar
      var localTasks = JSON.parse(localStorage.getItem(lista));
      for (let index = 0; index < localTasks.length; index++) {
        if (localTasks[index].tarea === oldTarea) {
          // Moemos el nuevo valor de la tarea
          (localTasks[index].tarea = resultado),
            // Guardamos la tarea en localStorage
            localStorage.setItem(lista, JSON.stringify(localTasks));
        }
      }
      // confirmacion positiva de que ha ido todo bien
      this.status = 200;
      return of(this.status);        
    } catch (error) {
      console.log(error);
      // Ha ocurrido un error en la operacion
      this.status = 500;
      return of(this.status);        
    }    
  }  
  //==============================================================================//
  // Se elimina la tarea selecionada                                              //
  //==============================================================================//
  public eliminarTarea(posicion:number, datoslista:any) : Observable<any[]> {
    try {
      // Eliminamos la tarea de la lista
      datoslista.tareas.splice(posicion, 1);
      localStorage.setItem( datoslista.title, JSON.stringify(datoslista.tareas) );
      // confirmacion positiva de que ha ido todo bien
      this.status = 200;
      return of(this.status); 
    } catch (error) {
      console.log(error);
      // Ha ocurrido un error en la operacion
      this.status = 500;
      return of(this.status);       
    }
  }
  //==============================================================================//
  // Se eliminan varias tareas seleccionadas                                      //
  //==============================================================================//
  public eliminarTareas(tituloLista:string, datoslista:any) : Observable<any[]> {
    try {
      for (var i = datoslista.tareas.length - 1; i > -1; i--) {
        if (datoslista.tareas[i].completed) {
          datoslista.tareas.splice(i, 1);
          localStorage.setItem(tituloLista, JSON.stringify(datoslista.tareas));
        }
      }
      // confirmacion positiva de que ha ido todo bien
      this.status = 200;
      return of(this.status); 
    } catch (error) {
      console.log(error);
      // Ha ocurrido un error en la operacion
      this.status = 500;
      return of(this.status);       
    }
  }

}
