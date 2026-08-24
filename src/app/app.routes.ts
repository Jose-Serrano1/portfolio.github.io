import { Routes } from '@angular/router';
import { Past } from './past/past';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '1',
        component: Past
    },
    {
        path: '2',
        component: Home
    },
    {
        path: '**',
        redirectTo: ''
    }
];
