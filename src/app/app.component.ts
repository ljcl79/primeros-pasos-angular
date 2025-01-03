import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { FooterComponent } from './components/footer/footer.component';
import { MascotaService } from './services/mascota.service';
import { Mascota } from './interfaces/Mascota';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, NavComponent, MascotaComponent, FooterComponent, CommonModule],
  providers: [MascotaService], // Agrega aquí el proveedor de MascotaService
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'adopcion';
  mascotas: Mascota[] = [];
  loading = false;
  error: string | null = null;

  // El servicio se "inyecta" en el constructor
  constructor(private mascotaService: MascotaService) {
    // Obtenemos las mascotas al iniciar el componente
  }

  ngOnInit() {
    this.loadMascotas();
  }


  loadMascotas() {
    this.loading = true;
    this.error = null;
    
    this.mascotaService.getAllMascotas().subscribe({
      next: (response) => {
        this.mascotas = response.data;
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
      }
    });
  }
}
