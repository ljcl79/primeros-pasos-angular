import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mascota',
  standalone: true,
  imports: [],
  templateUrl: './mascota.component.html',
  styleUrl: './mascota.component.css'
})
export class MascotaComponent {
  @Input() mascota: any;
}
