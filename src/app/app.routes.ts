import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./pages/paginaInicio/home/pagina-inicio.component').then(m => m.PaginaInicioComponent)
    },
    {
        path:'personaje/:id',
        loadComponent: () => import('./pages/personajesIndividuales/home/home.component').then(m => m.HomeComponent)
    },
    {
        path:'episodios/:id',
        loadComponent: () => import('./pages/paginaEpisodio/home/pagina-inicio-episodio.component').then(m => m.PaginaInicioEpisodioComponent)
    },
    {
        path:'location/:id',
        loadComponent: () => import('./pages/paginaLocation/home/pagina-inicio-location.component').then(m => m.PaginaInicioLocationComponent)
    },
    {
        path:'especie/:id',
        loadComponent: () => import('./pages/paginaEspecie/home/home.component').then(m => m.HomeComponent)
    },
    {
        path:'formulario',
        loadComponent: () => import('./pages/paginaFormulario/home/home.component').then(m => m.HomeComponent)
    },

];
