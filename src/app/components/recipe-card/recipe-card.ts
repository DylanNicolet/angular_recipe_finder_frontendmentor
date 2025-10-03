import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-recipe-card',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './recipe-card.html',
    styleUrl: './recipe-card.scss'
})
export class RecipeCard {
    @Input() imgSmallSrc!: string;
    @Input() imgLargeSrc!: string;
    @Input() title!: string;
    @Input() overview!: string;
    @Input() servings!: number;
    @Input() prepMinutes!: number;
    @Input() cookMinutes!: number;
    @Input() slug!: string;
}
