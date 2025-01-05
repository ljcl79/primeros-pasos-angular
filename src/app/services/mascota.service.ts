import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Mascota } from '../interfaces/mascota';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { ApiResponse } from '../interfaces/apiResponse';


@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private apiUrl: string = 'http://localhost:3000/mascotas';

  constructor(private http: HttpClient) { }

  getAllMascotas(): Observable<ApiResponse<Mascota[]>> {
    return this.http.get(this.apiUrl)
      .pipe(
        map((data) => ({ data } as ApiResponse<Mascota[]>)),
        delay(2000),
        catchError(this.handleError)
      );
  }

  getMascotaById(id: number) {
    //return this.mascotas.find(mascota => mascota.id === id);
  }

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
