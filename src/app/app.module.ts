import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Formularios
import { FormsModule } from '@angular/forms';
// Rutas
import { AppRoutingModule } from './routes/app-routing.module';
// Modulos componentes reutilizables/comunes
import { MaterialModule } from './modules/material.module';
import { ComponentsModule } from './modules/components.module';
// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
