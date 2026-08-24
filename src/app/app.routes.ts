import { Routes } from '@angular/router';
import { Home } from './components/home/pages/home/home';
import { HomeExperience } from './components/experience/pages/home-experience/home-experience';
import { HomeStudies } from './components/studies/pages/home-studies/home-studies';
import { HomeProjects } from './components/projects/pages/home-projects/home-projects';
import { HomeAplications } from './components/aplications/pages/home-aplications/home-aplications';
import { HomeAboutMyWeb } from './components/aboutMyWeb/pages/home-about-my-web/home-about-my-web';
import { HomeUpdates } from './components/updates/pages/home-updates/home-updates';
import { HomeAboutMe } from './components/aboutMe/pages/home-about-me/home-about-me';
import { CalculadoraHipoteca } from './components/aplications/pages/management/calculadora-hipoteca/calculadora-hipoteca';
import { CalculadoraHipotecaInversion } from './components/aplications/pages/inversion/calculadora-hipoteca-inversion/calculadora-hipoteca-inversion';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'sobreMi', component: HomeAboutMe},
    {path: 'experienciaLaboral', component: HomeExperience},
    {path: 'estudios', component: HomeStudies},
    {path: 'proyectos', component: HomeProjects},
    {path: 'aplicaciones', component: HomeAplications},
    {path: 'sobreMiWeb', component: HomeAboutMyWeb},
    {path: 'actualizaciones', component: HomeUpdates},
    {path: 'calculadoraHipoteca', component: CalculadoraHipoteca},
    //{path: 'calculadoraHipotecaINV', component: CalculadoraHipotecaInversion}
];
