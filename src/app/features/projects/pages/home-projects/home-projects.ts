import { Component } from '@angular/core';
import { OptionSelectionComponent } from '../../../components/option-selection-component/option-selection-component';
import { LinkedinComponent } from '../../../components/linkedin-component/linkedin-component';

@Component({
  selector: 'app-home-projects',
  imports: [OptionSelectionComponent, LinkedinComponent],
  templateUrl: './home-projects.html',
  styleUrl: './home-projects.css',
})
export class HomeProjects {}
