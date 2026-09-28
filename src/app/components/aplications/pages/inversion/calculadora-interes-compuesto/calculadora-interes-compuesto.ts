import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-calculadora-interes-compuesto',
  imports: [RouterLink, FormsModule, DecimalPipe],
  templateUrl: './calculadora-interes-compuesto.html',
  styleUrl: './calculadora-interes-compuesto.css',
})
export class CalculadoraInteresCompuesto {

  invIni: number = 0;
  invMonth: number = 200;
  porcentajeMedio: number = 10;
  yearsDuration: number = 40;

  dineroFinal: number = 0;

  public calculator(): void {

    if (
      this.invIni < 0 ||
      this.invMonth < 0 ||
      this.porcentajeMedio < 0 ||
      this.yearsDuration < 1
    ) {
      return;
    }

    this.dineroFinal = this.invIni;

    for (let i: number = 0; i < this.yearsDuration; i++) {

      this.dineroFinal += this.invMonth * 12;
      this.dineroFinal *= (1 + this.porcentajeMedio / 100);

    }

    this.dineroFinal = Number(this.dineroFinal.toFixed(2));

  }

}
