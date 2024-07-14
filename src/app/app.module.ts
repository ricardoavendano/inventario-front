import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TipoProductoComponent } from './tipo-producto/tipo-producto.component';
import { HeaderComponent } from './header/header.component';
import { InventarioComponent } from './inventario/inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TipoProductoComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }