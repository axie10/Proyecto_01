import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./paginaInicio/pagina-inicio/pagina-inicio.component').then(m => m.PaginaInicioComponent)
    },
    {
        path:'personaje/:id',
        loadComponent: () => import('./personajesIndividuales/home/home.component').then(m => m.HomeComponent)
    },
    {
        path:'episodios/:id',
        loadComponent: () => import('./paginaEpisodio/pagina-inicio-episodio/pagina-inicio-episodio.component').then(m => m.PaginaInicioEpisodioComponent)
    }
];
