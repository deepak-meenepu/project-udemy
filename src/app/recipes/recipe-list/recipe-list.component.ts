import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('This is Name', 'This is Discription', 'https://www.halfbakedharvest.com/wp-content/uploads/2021/09/Healthier-Homemade-One-Pot-Hamburger-Helper-4.jpg'),
    new Recipe('This is another Name', 'This is Discription', 'https://www.halfbakedharvest.com/wp-content/uploads/2021/09/Healthier-Homemade-One-Pot-Hamburger-Helper-4.jpg')

  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor(){}

  ngOnInit(){

  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
