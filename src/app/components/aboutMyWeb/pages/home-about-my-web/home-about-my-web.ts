import { Component } from '@angular/core';
import { OptionSelectionComponent } from '../../../options/option-selection-component/option-selection-component';
import { LinkedinComponent } from '../../../options/linkedin-component/linkedin-component';

@Component({
  selector: 'app-home-about-my-web',
  imports: [OptionSelectionComponent],
  templateUrl: './home-about-my-web.html',
  styleUrl: './home-about-my-web.css',
})
export class HomeAboutMyWeb {}
