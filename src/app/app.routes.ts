import { Routes } from '@angular/router';
import { PaginaInicioComponent } from './paginaInicio/pagina-inicio/pagina-inicio.component';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./paginaInicio/pagina-inicio/pagina-inicio.component').then(m => m.PaginaInicioComponent)
    },
    {
        path:'personaje/:id',
        loadComponent: () => import('./personajesIndividuales/home/home.component').then(m => m.HomeComponent)
    }
];
