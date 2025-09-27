import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { BrowseRecipes } from './pages/browse-recipes/browse-recipes';

export const routes: Routes = [
    { path: '', component: Homepage },
    { path: 'recipes', component: BrowseRecipes }
];