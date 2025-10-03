import { Component, signal } from '@angular/core';
import { DataService } from '../../data';
import { RecipeCard } from "../recipe-card/recipe-card";

@Component({
selector: 'app-three-random-recipes',
imports: [RecipeCard],
templateUrl: './three-random-recipes.html',
styleUrl: './three-random-recipes.scss'
})
export class ThreeRandomRecipes {
    threeRandomRecipe = signal<any>([]);

    constructor (
        private dataService: DataService
    ) {}

    ngOnInit() {
        // Emulate data being fetch from API (currently JSON file in assets folder)
        this.dataService.getData().subscribe((data) => {
            const selectedIndexes = new Set<number>();

            // Grab 3 randoms indexes from the full list of recipes
            while (selectedIndexes.size < 3) {
                const randomIndex = Math.floor(Math.random() * data.length);
                selectedIndexes.add(randomIndex);
            }

            // Use the 3 randoms indexes to add the 3 recipe's data to an array
            this.threeRandomRecipe.set(Array.from(selectedIndexes).map(index => data[index]));
            console.log(this.threeRandomRecipe());
        });
    }
}