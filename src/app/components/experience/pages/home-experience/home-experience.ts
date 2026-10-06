import { Component } from '@angular/core';
import { OptionSelectionComponent } from '../../../options/option-selection-component/option-selection-component';
import { LinkedinComponent } from '../../../options/linkedin-component/linkedin-component';

@Component({
  selector: 'app-home-experience',
  imports: [OptionSelectionComponent],
  templateUrl: './home-experience.html',
  styleUrl: './home-experience.css',
})
export class HomeExperience {

  vistaSeleccionada: 'TODO' | 'SOFTWARE ENGINNER' | 'SECURITY & RESILIENCE' | 'NETWORK ENGINEER' = 'TODO';

  seleccionarVista(vista: 'TODO' | 'SOFTWARE ENGINNER' | 'SECURITY & RESILIENCE' | 'NETWORK ENGINEER'): void {
    this.vistaSeleccionada = vista;
  }

}
