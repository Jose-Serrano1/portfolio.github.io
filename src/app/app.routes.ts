import { Routes } from '@angular/router';
import { Past } from './past/past';
import { Home } from './home/home';
import { Present } from './present/present';
import { Future } from './future/future';
import { Methods } from './methods/methods';
import { Measures } from './measures/measures';
import { Passions } from './passions/passions';
import { Best } from './best/best';
import { World } from './world/world';
import { Live } from './live/live';
import { Final } from './final/final';

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
        component: Present
    },
    {
        path: '3',
        component: Future
    },
    {
        path: '4',
        component: Methods
    },
    {
        path: '5',
        component: Measures
    },
    {
        path: '6',
        component: Passions
    },
    {
        path: '7',
        component: Best
    },
    {
        path: '8',
        component: World
    },
    {
        path: '9',
        component: Live
    },
    {
        path: '10',
        component: Final
    },
    {
        path: '**',
        redirectTo: ''
    }
];
