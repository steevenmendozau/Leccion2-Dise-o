import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Postre } from '../models/postres'; // Asegúrate de que la ruta sea correcta según tu estructura de carpetas



@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private apiUrl = 'https://raw.githubusercontent.com/vjuradov/ejemploDatosConsumo/refs/heads/main/leccion-recetas.json';

  constructor(private http: HttpClient) { }

  getPostres(): Observable<Postre[]> {
    return this.http.get<Postre[]>(this.apiUrl);
  }
}
