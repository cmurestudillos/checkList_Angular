import { NgModule } from '@angular/core';
// Formularios
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Rutas
import { AppRoutingModule } from '../routes/app-routing.module';
import { MaterialModule } from '../modules/material.module';
// Componentes
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { ListCardComponent } from './../components/shared/list-card/list-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ListCardComponent
  ],
  exports: [
    NavbarComponent,
    ListCardComponent
  ],  
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ComponentsModule { }
