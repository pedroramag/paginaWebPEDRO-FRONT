import { Component } from '@angular/core';
import { OptionSelectionComponent } from '../../../components/option-selection-component/option-selection-component';
import { LinkedinComponent } from '../../../components/linkedin-component/linkedin-component';

@Component({
  selector: 'app-home-studies',
  imports: [OptionSelectionComponent, LinkedinComponent],
  templateUrl: './home-studies.html',
  styleUrl: './home-studies.css',
})
export class HomeStudies {}
