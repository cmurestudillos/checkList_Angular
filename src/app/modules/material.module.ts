import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Drag & Drop
import {DragDropModule} from '@angular/cdk/drag-drop';
// Hammer.js - soporte para (mat-slide-toggle, mat-slider, matTooltip)
import 'hammerjs';
//Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material
import { 
  MatInputModule, 
  MatButtonModule, 
  MatSelectModule, 
  MatIconModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatMenuModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSnackBarModule,
    DragDropModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSnackBarModule,
    DragDropModule
  ]  
})
export class MaterialModule { }
