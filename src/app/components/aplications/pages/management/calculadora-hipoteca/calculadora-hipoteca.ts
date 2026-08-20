import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValueChangeEvent } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calculadora-hipoteca',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './calculadora-hipoteca.html',
  styleUrl: './calculadora-hipoteca.css',
})
export class CalculadoraHipoteca {

  //VARIABLES
  hipotecaGenerated: boolean = false;

  // DATES USER
  formDatesBEFOREHipoteca = new FormGroup({

    inmueblePrice: new FormControl<number | null>(null, {
      validators: [
        Validators.required,
        Validators.min(0)
      ]
    }),
    hipotecaPrice: new FormControl<number | null>(null, {
      validators: [
        Validators.required,
        Validators.min(0)
      ]
    }),
    hipotecaYears: new FormControl<number | null>(null, {
      validators: [
        Validators.required,
        Validators.min(0)
      ]
    }),
    annualInterest: new FormControl<number | null>(null, {
      validators: [
        Validators.required,
        Validators.min(0)
      ]
    })

  });

  onGeneratedHipoteca() {

    if (this.formDatesBEFOREHipoteca.invalid) {
      return;
    }
    this.hipotecaGenerated = true;
  }

  calculateMonth(): number {

    const hipotecaPrince = this.formDatesBEFOREHipoteca.get('hipotecaPrice')?.value;
    const years = this.formDatesBEFOREHipoteca.get('hipotecaYears')?.value;
    const anualInterested = this.formDatesBEFOREHipoteca.get('annualInterest')?.value;

    if (hipotecaPrince == null || years == null || anualInterested == null) {
      return 0;
    }

    const monthInterested = anualInterested / 100 / 12; // esto es porque el valor viene en decimal y hay que pasarlo a entero y después entre todos los meses
    const numberPagament = years * 12;

    let monthCuota = //usamos let para que se pueda variar el contenido, si no, si quisieramos que fuera fijo sería const
      hipotecaPrince *
      (monthInterested * Math.pow(1 + monthInterested, numberPagament)) /
      (Math.pow(1 + monthInterested, numberPagament) - 1);

    monthCuota = Number(monthCuota.toFixed(2));
    return (monthCuota);
  }

  calculateYear() {
    return (Number(this.calculateMonth().toFixed(2)) * 12);
  }

  interestPaid() {
    const yearHipoteca = this.formDatesBEFOREHipoteca.get('hipotecaYears')?.value;
    const hipotecaPrince = this.formDatesBEFOREHipoteca.get('hipotecaPrice')?.value;

    if (hipotecaPrince == null || yearHipoteca == null) {
      return 0;
    }

    return (Number((this.calculateYear() * yearHipoteca - hipotecaPrince).toFixed(2)));
  }

  finalPrice() {
    const yearHipoteca = this.formDatesBEFOREHipoteca.get('hipotecaYears')?.value;

    if (yearHipoteca == null) {
      return 0;
    }

    return (Number((this.calculateYear() * yearHipoteca).toFixed(2)));
  }

}

