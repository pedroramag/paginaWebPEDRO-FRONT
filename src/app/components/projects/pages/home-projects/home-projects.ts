import { Component } from '@angular/core';
import { OptionSelectionComponent } from '../../../options/option-selection-component/option-selection-component';
import { LinkedinComponent } from '../../../options/linkedin-component/linkedin-component';

@Component({
  selector: 'app-home-projects',
  imports: [OptionSelectionComponent],
  templateUrl: './home-projects.html',
  styleUrl: './home-projects.css',
})
export class HomeProjects {}
