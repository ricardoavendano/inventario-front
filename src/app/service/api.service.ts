import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { ProductoDTO } from '../model/producto'
import { InventarioDTO } from '../model/inventario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/app'; // URL de la API

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getTipoProducto(): Observable<ProductoDTO> {
    return this.http.get<ProductoDTO>(this.apiUrl + '/tipo-producto')
    .pipe(
      retry(0)
    )
  }

  guardarInventario(inventario): Observable<String> {
    return this.http.post<String>(this.apiUrl + '/inventario', JSON.stringify(inventario), this.httpOptions)
    .pipe(
      retry(0)
    )
  }

  getInventario(): Observable<InventarioDTO> {
    return this.http.get<InventarioDTO>(this.apiUrl + '/inventario')
    .pipe(
      retry(0)
    )
  }

  actualizarEstadoInventario(id, estado): Observable<String> {
    let params = new HttpParams();
    params = params.set('estado', estado);
    return this.http.put<String>(this.apiUrl + '/inventario/'+id+'/estado?estado='+estado, this.httpOptions)
    .pipe(
      retry(0)
    )
  }
}