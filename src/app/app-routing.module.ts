import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoProductoComponent } from './tipo-producto/tipo-producto.component';
import { InventarioComponent } from './inventario/inventario.component';

const routes: Routes = [
  { path: 'tipo-producto-list', component: TipoProductoComponent },
  { path: 'inventario-list', component: InventarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
