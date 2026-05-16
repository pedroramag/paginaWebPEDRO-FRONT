import { Routes } from '@angular/router';
import { Home } from './features/home/pages/home/home';
import { HomeExperience } from './features/experience/pages/home-experience/home-experience';
import { HomeStudies } from './features/studies/pages/home-studies/home-studies';
import { HomeProjects } from './features/projects/pages/home-projects/home-projects';
import { HomeAplications } from './features/aplications/pages/home-aplications/home-aplications';
import { HomeAboutMyWeb } from './features/aboutMyWeb/pages/home-about-my-web/home-about-my-web';
import { HomeUpdates } from './features/updates/pages/home-updates/home-updates';
import { HomeAboutMe } from './features/aboutMe/pages/home-about-me/home-about-me';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'sobreMi', component: HomeAboutMe},
    {path: 'experienciaLaboral', component: HomeExperience},
    {path: 'estudios', component: HomeStudies},
    {path: 'proyectos', component: HomeProjects},
    {path: 'aplicaciones', component: HomeAplications},
    {path: 'sobreMiWeb', component: HomeAboutMyWeb},
    {path: 'actualizaciones', component: HomeUpdates},
];
