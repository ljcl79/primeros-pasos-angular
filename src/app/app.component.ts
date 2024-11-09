import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { FooterComponent } from './components/footer/footer.component';
import { MascotaService } from './services/mascota.service';
import { Mascota } from './interfaces/mascota';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, NavComponent, MascotaComponent, FooterComponent, CommonModule],
  providers: [MascotaService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adopcion';
  mascotas: Mascota[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private mascotaService: MascotaService) {

  }

  ngOnInit() {
    this.loadMascotas();
  }

  loadMascotas() {
    this.loading = true;
    this.error = null;

    this.mascotaService.getAllMascotas().subscribe(
      {
        next: (response) => {
          this.mascotas = response.data;
          this.loading = false;
        },
        error: (error) => {
          this.error = error.message;
          this.loading = false;
        }
      }
    );

  }

}
