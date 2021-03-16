import { Injectable } from '@angular/core';
// Operadores
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  // Variables para listas
  listas: any = [];
  listaObjAdd: any;
  listaObjEdt: any;
  status: any;
  data: any;

  constructor() { }

  //==============================================================================//
  // Obtiene todos las listas cargadas en el sistema                              //
  //==============================================================================//
  public cargaListas() : Observable<any[]> {
    try {
      for (let index = 0; index < localStorage.length; index++) {
        this.listaObjAdd = {
          title: localStorage.key(index),
          tareas: JSON.parse(localStorage.getItem(localStorage.key(index)))
        }
        // Insertamos la lista en el objeto
        this.listas.push(this.listaObjAdd);
      }
      return of(this.listas);
    } catch (error) {
      console.log(error);
    }
  }
  //==============================================================================//
  // Se crea una nueva lista                                                      //
  //==============================================================================//
  public crearLista(lista: string) : Observable<any[]> {

    var tituloLista = localStorage.getItem(lista);
    // validamos que no exista ya la lista
    if (tituloLista !== null){
      // Devolvemos el objeto con error
      this.status = 500;
      return of(this.status);
    }

    try {
      // Creamos el objeto inicializado
      this.listaObjAdd = {
        title: lista,
        tareas: []
      }
      // Insertamos la nueva lista
      this.listas.push(this.listaObjAdd);
      // Guardamos la nueva lista en localStorage
      localStorage.setItem(lista, JSON.stringify(this.listaObjAdd.tareas));

      this.data = {
        listas: this.listas,
        status: 200
      }
      return of(this.data);  
    } catch (error) {
      console.log(error);
    }
  }
  //==============================================================================//
  // Se edita una lista                                                           //
  //==============================================================================//
  public editarLista(newValue: string, oldValue: string) : Observable<any[]> {
    try {
      // Guardamos el nuevo titulo de la lista
      this.listaObjAdd = {
        title: newValue,
      }
      // Guardamos el titulo antiguo
      this.listaObjEdt = {
        title: oldValue,
      }

      for (let index = 0; index < this.listas.length; index++) {
        // Si la key que vamos a modificar coindide con uan existente en localstorage,
        // procedemos a la modificacion del objeto
        if(this.listaObjEdt.title === this.listas[index].title){
          // Generamos el nuevo objeto a modificar con los datos existentes
          this.listaObjAdd = {
            title: this.listaObjAdd.title,
            tareas: localStorage.getItem(localStorage.key(index))
          }
          // Modificamos el titulo en pantalla
          this.listas[index].title = this.listaObjAdd.title;
          // "Eliminamos el objeto moficado"
          localStorage.removeItem(this.listaObjEdt.title);
          // Guardamos el nuevo objeto "modificado"
          localStorage.setItem(this.listaObjAdd.title, this.listaObjAdd.tareas);

          this.status = 200;
          return of(this.status);
        }
      }
    } catch (error) {
      console.log(error);
    }    
  }
  //==============================================================================//
  // Se elimina la lista selecionada                                              //
  //==============================================================================//
  public eliminarLista(lista: string) : Observable<any[]> {
    try {
      for (let index = 0; index < localStorage.length; index++) {
        if(lista === this.listas[index].title){
          this.listas.splice(index, 1);
          localStorage.removeItem(lista);
        }
      }
      this.status = 200;
      return of(this.status);
    } catch (error) {
      console.log(error);
    }
  }  

}
