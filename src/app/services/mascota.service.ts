import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mascota } from '../interfaces/Mascota';
import { ApiResponse } from '../interfaces/ApiResponse';
import { catchError, map, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MascotaService {
// Por ahora, usaremos datos de ejemplo
/*
  private pets: Mascota[] = [
    { id: 1, nombre: 'Max', tipo: 'Perro', edad: 2, descripcion: 'Amigable y juguetón.', imagen: 'assets/perro1.webp' },
    { id: 2, nombre: 'Luna', tipo: 'Gato', edad: 3, descripcion: 'Independiente y cariñosa.', imagen: 'assets/gato1.jpeg' },
    { id: 3, nombre: 'Rocky', tipo: 'Perro', edad: 1, descripcion: 'Activo y protector.', imagen: 'assets/perro2.jpeg' },
    { id: 4, nombre: 'Mia', tipo: 'Gato', edad: 4, descripcion: 'Curiosa y ágil.', imagen: 'assets/gato2.jpeg' },
    { id: 5, nombre: 'Buddy', tipo: 'Perro', edad: 3, descripcion: 'Leal y amistoso.', imagen: 'assets/perro3.jpeg' },
    { id: 6, nombre: 'Nina', tipo: 'Gato', edad: 2, descripcion: 'Tranquila y observadora.', imagen: 'assets/gato3.jpeg' },
    { id: 7, nombre: 'Nina', tipo: 'Gato', edad: 2, descripcion: 'Tranquila y observadora.', imagen: 'assets/gato3.jpeg' }
  ];
*/
  private apiUrl = 'http://localhost:3000/mascotas';

  constructor(private http: HttpClient) { }

  // Método para obtener todas las mascotas
  getAllMascotas(): Observable<ApiResponse<Mascota[]>> {
    return this.http.get<Mascota[]>(this.apiUrl)
      .pipe(
        // Envuelve la respuesta en un objeto con estructura { data: ... }
        map((data) => ({ data } as ApiResponse<Mascota[]>)),
        catchError(this.handleError)
      );
  }

  // Obtener una mascota por ID
  getMascotaById(id: number): Observable<ApiResponse<Mascota>> {
    return this.http.get<Mascota>(`${this.apiUrl}/${id}`)
      .pipe(
        map((data) => ({ data } as ApiResponse<Mascota>)),
        catchError(this.handleError)
      );
  }

  // Crear una nueva mascota
  createMascota(pet: Omit<Mascota, 'id'>): Observable<ApiResponse<Mascota>> {
    return this.http.post<Mascota>(this.apiUrl, pet)
      .pipe(
        map((data) => ({ data } as ApiResponse<Mascota>)),
        catchError(this.handleError)
      );
  }

  // Actualizar una mascota
  updateMascota(id: number, pet: Partial<Mascota>): Observable<ApiResponse<Mascota>> {
    return this.http.put<Mascota>(`${this.apiUrl}/${id}`, pet)
      .pipe(
        map((data) => ({ data } as ApiResponse<Mascota>)),
        catchError(this.handleError)
      );
  }

  // Eliminar una mascota
  deleteMascota(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        map(() => ({ data: undefined } as ApiResponse<void>)),  // Envolver en { data: undefined } para mantener la estructura
        catchError(this.handleError)
      );
  }
  
      // Manejador de errores centralizado
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error';

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del backend
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}

