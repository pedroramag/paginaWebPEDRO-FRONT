import { Component } from '@angular/core';
import { OptionSelectionComponent } from '../../../components/option-selection-component/option-selection-component';
import { LinkedinComponent } from '../../../components/linkedin-component/linkedin-component';

@Component({
  selector: 'app-home-aplications',
  imports: [OptionSelectionComponent, LinkedinComponent],
  templateUrl: './home-aplications.html',
  styleUrl: './home-aplications.css',
})
export class HomeAplications {}
