import { Component, Input } from '@angular/core';
import { Mascota } from '../../interfaces/mascota';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-mascota',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './mascota.component.html',
  styleUrl: './mascota.component.css'
})
export class MascotaComponent {
  @Input() mascota: Mascota = {
    tipo: '',
    id: 0,
    nombre: '',
    edad: 0,
    descripcion: '',
    imagen: '',
    fechaCreacion: new Date(),
    disponible: false,
  };

  protected getMascotasClass() {
    return {
      'border border-default': true,
      'border border-warning': this.mascota.tipo === 'Gato',
      'border border-primary': this.mascota.tipo === 'Perro',
      'opacity-75': !this.mascota.disponible
    }
  }

  protected getMascotasStyles() {
    return {
      'font-weight': this.esMascotaNueva() ? 'bolder' : 'normal',
      'color': this.esMascotaNueva() ? 'red' : 'black',
    }
  }

  protected esMascotaNueva(): boolean {
    const DIAS_MASCOTA_REFUGIO = 7;
    const fechaCreacion = new Date(this.mascota.fechaCreacion);
    const diferenciaDias = (new Date().getTime() - fechaCreacion.getTime()) / (1000 * 3600 * 24);

    return diferenciaDias <= DIAS_MASCOTA_REFUGIO;
  }
}
