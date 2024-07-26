import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./paginaInicio/home/pagina-inicio.component').then(m => m.PaginaInicioComponent)
    },
    {
        path:'personaje/:id',
        loadComponent: () => import('./personajesIndividuales/home/home.component').then(m => m.HomeComponent)
    },
    {
        path:'episodios/:id',
        loadComponent: () => import('./paginaEpisodio/home/pagina-inicio-episodio.component').then(m => m.PaginaInicioEpisodioComponent)
    },
    {
        path:'location/:id',
        loadComponent: () => import('./paginaLocation/home/pagina-inicio-location.component').then(m => m.PaginaInicioLocationComponent)
    },
    {
        path:'especie/:id',
        loadComponent: () => import('./paginaEspecie/home/home.component').then(m => m.HomeComponent)
    }
];
