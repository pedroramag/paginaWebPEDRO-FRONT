import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option-selection-component',
  imports: [],
  templateUrl: './option-selection-component.html',
  styleUrl: './option-selection-component.css',
})
export class OptionSelectionComponent {

  private router = inject(Router);

  menuOpen = false;


  desplegationMenu() {
    console.log('Click');
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }

  public goHome(): void {
    this.router.navigate(['']);
  }

  public navegateQUIENSOY(): void {
    this.router.navigate(['sobreMi']);
  }

  public navegateEXPERIENCIALABORAL(): void {
    this.router.navigate(['experienciaLaboral']);
  }

  public navegateESTUDIOS(): void {
    this.router.navigate(['estudios']);
  }

  public navegatePROYECTOS(): void {
    this.router.navigate(['proyectos']);
  }

  public navegateAPLICACIONES(): void {
    this.router.navigate(['aplicaciones']);
  }

  public navegateSOBREMIWEB(): void {
    this.router.navigate(['sobreMiWeb']);
  }

  public navegateACTUALIZACIONES(): void {
    this.router.navigate(['actualizaciones'])
  }

}


