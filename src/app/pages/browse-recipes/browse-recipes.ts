import { Component } from '@angular/core';
import { RecipeCard } from "../../components/recipe-card/recipe-card";
import { DataService } from '../../data';


@Component({
  selector: 'app-browse-recipes',
  imports: [RecipeCard],
  templateUrl: './browse-recipes.html',
  styleUrl: './browse-recipes.scss'
})
export class BrowseRecipes {
  recipes: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      console.log(data);
      
      this.recipes = data;
    });
  }
}