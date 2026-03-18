import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeAboutMyWeb } from '../../../aboutMyWeb/pages/home-about-my-web/home-about-my-web';
import { HomeAplications } from '../../../aplications/pages/home-aplications/home-aplications';
import { HomeExperience } from '../../../experience/pages/home-experience/home-experience';
import { HomeProjects } from '../../../projects/pages/home-projects/home-projects';
import { HomeStudies } from '../../../studies/pages/home-studies/home-studies';
import { HomeUpdates } from '../../../updates/pages/home-updates/home-updates';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    HomeAboutMyWeb, HomeAplications, HomeExperience, HomeProjects, HomeStudies, HomeUpdates
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
