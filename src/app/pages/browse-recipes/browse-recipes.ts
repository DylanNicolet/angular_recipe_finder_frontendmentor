import { Component } from '@angular/core';
import { RecipeCard } from "../../components/recipe-card/recipe-card";
import { DataService } from '../../data';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
    selector: 'app-browse-recipes',
    standalone: true,
    imports: [RecipeCard, ReactiveFormsModule],
    templateUrl: './browse-recipes.html',
    styleUrl: './browse-recipes.scss'
})
export class BrowseRecipes {
    recipes: any[] = [];
    filteredRecipes: any[] = [];

    // Filter input trackers
    prepTime = new FormControl<number | null>(null);
    cookTime = new FormControl<number | null>(null);

    constructor(private dataService: DataService) {}

    ngOnInit() {
        // Emulate data being fetch from API (currently JSON file in assets folder)
        this.dataService.getData().subscribe((data) => {
            this.recipes = data;
            this.filteredRecipes = data;
        });

        // Track changes to Prep Time filter
        this.prepTime.valueChanges.subscribe(value => {
            if (value !== null) {
                // Clear cookTime filter without triggering its subscription
                this.cookTime.setValue(null, { emitEvent: false });
            }

            if (value === null) {
                // Reset recipes
                this.filteredRecipes = this.recipes;
            } else {
                // Filter the filteredRecipes array to update recipe list
                this.filteredRecipes = this.recipes.filter(recipe => recipe.prepMinutes <= value);
            }
        });

        // Track changes to Cook Time filter
        this.cookTime.valueChanges.subscribe(value => {
            if (value !== null) {
                // Clear prepTime filter without triggering its subscription
                this.prepTime.setValue(null, { emitEvent: false });
            }

            if (value === null) {
                // Reset recipes
                this.filteredRecipes = this.recipes;
            } else {
                // Filter the filteredRecipes array to update recipe list
                this.filteredRecipes = this.recipes.filter(recipe => recipe.cookMinutes <= value);
            }
        });
    }

    // Reset prepTime filter
    clearPrepTime() {
        this.prepTime.setValue(null);
    }

    // Reset cookTime filter
    clearCookTime() {
        this.cookTime.setValue(null);
    }
}