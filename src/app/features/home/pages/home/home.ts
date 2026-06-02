import { Component } from '@angular/core';
import { HomeAboutMyWeb } from '../../../aboutMyWeb/pages/home-about-my-web/home-about-my-web';
import { HomeAplications } from '../../../aplications/pages/home-aplications/home-aplications';
import { HomeExperience } from '../../../experience/pages/home-experience/home-experience';
import { HomeProjects } from '../../../projects/pages/home-projects/home-projects';
import { HomeStudies } from '../../../studies/pages/home-studies/home-studies';
import { HomeUpdates } from '../../../updates/pages/home-updates/home-updates';
import { OptionSelectionComponent } from '../../../components/option-selection-component/option-selection-component';
import { LinkedinComponent } from '../../../components/linkedin-component/linkedin-component';

@Component({
  selector: 'app-home',
  imports: [
    OptionSelectionComponent, LinkedinComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
