import { Component } from '@angular/core';
import { OptionSelectionComponent } from '../../../options/option-selection-component/option-selection-component';
import { LinkedinComponent } from '../../../options/linkedin-component/linkedin-component';

@Component({
  selector: 'app-home-studies',
  imports: [OptionSelectionComponent],
  templateUrl: './home-studies.html',
  styleUrl: './home-studies.css',
})
export class HomeStudies {}
