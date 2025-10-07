import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { BrowseRecipes } from './pages/browse-recipes/browse-recipes';
import { RecipeDetail } from './pages/recipe-detail/recipe-detail';
import { About } from './pages/about/about';

export const routes: Routes = [
    { path: '', component: Homepage },
    { path: 'recipes', component: BrowseRecipes },
    { path: 'recipes/:slug', component: RecipeDetail },
    { path: 'about', component: About },
];