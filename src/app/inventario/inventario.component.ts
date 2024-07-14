import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { log } from 'console';
import { InventarioDTO } from '../model/inventario';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit{

  constructor(private apiService: ApiService) { }

  Inventario: any = [];  

  ngOnInit() {
    this.loadInventario();
  }

  loadInventario() {
    return this.apiService.getInventario().subscribe((data: {}) => {
      this.Inventario = data;
    });
  }

  actualizarEstadoInventario(id: number) {
    const body = { id: id, estado: true };
    this.apiService.actualizarEstadoInventario(id, true).subscribe((result) => {
      this.loadInventario();
    });
  }
}