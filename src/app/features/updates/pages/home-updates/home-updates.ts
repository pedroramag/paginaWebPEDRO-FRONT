import { Component } from '@angular/core';
import { OptionSelectionComponent } from '../../../components/option-selection-component/option-selection-component';
import { LinkedinComponent } from '../../../components/linkedin-component/linkedin-component';

@Component({
  selector: 'app-home-updates',
  imports: [OptionSelectionComponent],
  templateUrl: './home-updates.html',
  styleUrl: './home-updates.css',
})
export class HomeUpdates {}
