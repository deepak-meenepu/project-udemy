import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    new Recipe('Chicken Biriyani',
    'Hyderabadi chicken biryani is an aromatic, mouth watering and authentic Indian dish with succulent chicken in layers of fluffy rice, fragrant spices and fried onions',
    'https://www.forbesindia.com/media/images/2021/Dec/img_175063_whyisbiryanigettingbrandedalloverthecountry.jpg',
    [
      new Ingredient('Raita', 1),
      new Ingredient('Kabab', 4)
    ]),
    new Recipe('Chicken Butter Masala',
    'Finger licking and loaded with flavours. An Indian dish that connects soul with every bite',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tTGbGbIlRxgIyEbCtXmDRxVA-BAyJegRGA&usqp=CAU',
    [
      new Ingredient('Salad', 1),
      new Ingredient('Lassi', 1)
    ])
  ];
  constructor(private slService: ShoppingListService){}
  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients)
  }
  getRecipe(index: number){
    return this.recipes[index];
  }
 }
