import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionSelectionComponent } from '../../../components/option-selection-component/option-selection-component';
import { LinkedinComponent } from '../../../components/linkedin-component/linkedin-component';
import { take, timer } from 'rxjs';

@Component({
  selector: 'app-home-aplications',
  standalone: true,
  imports: [
    CommonModule,
    OptionSelectionComponent
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