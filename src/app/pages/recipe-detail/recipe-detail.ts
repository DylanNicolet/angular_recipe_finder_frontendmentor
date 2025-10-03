import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data';
import { ThreeRandomRecipes } from "../../components/three-random-recipes/three-random-recipes";

@Component({
    selector: 'app-recipe-detail',
    imports: [ThreeRandomRecipes],
    templateUrl: './recipe-detail.html',
    styleUrl: './recipe-detail.scss'
})
export class RecipeDetail {
    slug: string | null = null;
    recipe: any = null;

    constructor (
        private route: ActivatedRoute,
        private dataService: DataService,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Adds the smooth scroll effect
            });

            // Capture from URL which recipe should be shown
            this.slug = this.route.snapshot.paramMap.get('slug');
            
            // Emulate data being fetch from API (currently JSON file in assets folder)
            this.dataService.getData().subscribe((data) => {
                this.recipe = data.find((r: any) => r.slug === this.slug);
                this.cdr.detectChanges(); // force update template
            });
        });
    }
}
