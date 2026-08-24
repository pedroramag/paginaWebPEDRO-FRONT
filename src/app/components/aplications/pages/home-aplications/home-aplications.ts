import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionSelectionComponent } from '../../../options/option-selection-component/option-selection-component';
import { LinkedinComponent } from '../../../options/linkedin-component/linkedin-component';
import { take, timer } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-aplications',
  standalone: true,
  imports: [
    CommonModule,
    OptionSelectionComponent, 
    RouterLink
  ],
  templateUrl: './home-aplications.html',
  styleUrl: './home-aplications.css',
})
export class HomeAplications {

  mostrarMensajeNoDisponible = false;

  vistaSeleccionada: 'gestion' | 'inversion' = 'gestion';

  seleccionarVista(vista: 'gestion' | 'inversion'): void {
    this.vistaSeleccionada = vista;
    this.mostrarMensajeNoDisponible = false;
  }

}