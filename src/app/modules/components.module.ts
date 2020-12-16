import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Rutas
import { AppRoutingModule } from '../routes/app-routing.module';
import { MaterialModule } from '../modules/material.module';
// Componentes
import { NavbarComponent } from '../components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
  ],  
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
