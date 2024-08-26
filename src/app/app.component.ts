import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MascotaComponent } from './mascota/mascota.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, MascotaComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adopcion';
  mascotas = [
    { nombre: 'Max', tipo: 'Perro', edad: 2, descripcion: 'Amigable y juguetón.', imagen: 'assets/perro1.webp' },
    { nombre: 'Luna', tipo: 'Gato', edad: 3, descripcion: 'Independiente y cariñosa.', imagen: 'assets/gato1.jpeg' },
    { nombre: 'Rocky', tipo: 'Perro', edad: 1, descripcion: 'Activo y protector.', imagen: 'assets/perro2.jpeg' },
    { nombre: 'Mia', tipo: 'Gato', edad: 4, descripcion: 'Curiosa y ágil.', imagen: 'assets/gato2.jpeg' },
    { nombre: 'Buddy', tipo: 'Perro', edad: 3, descripcion: 'Leal y amistoso.', imagen: 'assets/perro3.jpeg' },
    { nombre: 'Nina', tipo: 'Gato', edad: 2, descripcion: 'Tranquila y observadora.', imagen: 'assets/gato3.jpeg' }
  ];
}
