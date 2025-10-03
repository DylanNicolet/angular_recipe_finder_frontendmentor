import { Component, signal, ChangeDetectorRef } from '@angular/core';
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

    isSearchActive = signal<boolean>(false);

    // Search input
    searchInput = new FormControl<string>('');

    // Filter input trackers
    prepTime = new FormControl<number | null>(null);
    cookTime = new FormControl<number | null>(null);

    constructor(
        private dataService: DataService,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        // Emulate data being fetch from API (currently JSON file in assets folder)
        this.dataService.getData().subscribe((data) => {
            this.recipes = data;
            this.filteredRecipes = data;
            this.cdr.detectChanges(); // force update template
        });

        // Track changes to Search input field
        this.searchInput.valueChanges.subscribe(value => {
            // Reset both filters
            this.prepTime.setValue(null, { emitEvent: false });
            this.prepTime.setValue(null, { emitEvent: false });

            if (!value) {
                // Reset recipes
                this.filteredRecipes = this.recipes;
                this.isSearchActive.set(false);
            } else {
                const search = value.toString().toLowerCase();

                this.filteredRecipes = this.recipes.filter(recipe => {
                    // Does the search match any titles
                    const inTitle = recipe.title.toLowerCase().includes(search);

                    // Does the search match any ingredients
                    const inIngredients = Array.isArray(recipe.ingredients) &&
                        recipe.ingredients.some((ing: string) =>
                            ing.toLowerCase().includes(search)
                        );

                    return inTitle || inIngredients;
                });

                this.isSearchActive.set(true);
            }
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
                if (this.isSearchActive()) { // If a search is already active
                    // Filter the filteredRecipes (already searched) array to update recipe list
                    this.filteredRecipes = this.filteredRecipes.filter(recipe => recipe.prepMinutes <= value);
                } else {
                    // Filter the original recipes array to update recipe list
                    this.filteredRecipes = this.recipes.filter(recipe => recipe.prepMinutes <= value);
                }
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
                if (this.isSearchActive()) { // If a search is already active
                    // Filter the filteredRecipes (already searched) array to update recipe list
                    this.filteredRecipes = this.filteredRecipes.filter(recipe => recipe.cookMinutes <= value);
                } else {
                    // Filter the original recipes array to update recipe list
                    this.filteredRecipes = this.recipes.filter(recipe => recipe.cookMinutes <= value);
                }
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