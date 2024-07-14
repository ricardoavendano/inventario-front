import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { log } from 'console';
import { InventarioDTO } from '../model/inventario';

@Component({
  selector: 'app-tipo-producto',
  templateUrl: './tipo-producto.component.html',
  styleUrls: ['./tipo-producto.component.css']
})
export class TipoProductoComponent implements OnInit{
  formData = {
    nombre: '',
    numeroSerie: '',
    fecha: new Date().toISOString().substring(0, 10),
    productoValue: ''
  };

  constructor(private apiService: ApiService) { }

  TiposProductos: any = [];  

  ngOnInit() {
    this.loadTipoProducto();
  }

  loadTipoProducto() {
    return this.apiService.getTipoProducto().subscribe((data: {}) => {
      this.TiposProductos = data;
    });
  }

  onDateChange(event: any) {
    this.formData.fecha = event.target.value;
  }

  guardarInventario() {
    const inventario = new InventarioDTO();
    inventario.estado = false;
    inventario.fecha = new Date(this.formData.fecha);
    inventario.id = 0;
    inventario.nombreUsuario = this.formData.nombre;
    inventario.tipoProducto = this.formData.productoValue;
    inventario.numeroSerie = Number(this.formData.numeroSerie);

    this.apiService.guardarInventario(inventario).subscribe(response => {
      console.log('Inventario guardado con exito', response);
    }, error => {
      console.error('Error guardando inventario', error);
    });
  }
}