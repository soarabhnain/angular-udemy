import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Masala Dosa',
         'A tasty South Indian Dish',
          'https://cdn-images-1.medium.com/max/1200/0*NsaoQuhkfTvO-h40.',
          [
              new Ingredient('Potato',2),
              new Ingredient('Batter',1)
          ]),
        new Recipe('Biryani',
         'Awesome Chicken Biryani', 'https://www.thedeliciouscrescent.com/wp-content/uploads/2016/05/Easy-Hyderabadi-Chicken-Biryani.jpg',[
             new Ingredient('Rice',200),
             new Ingredient('Chicken',200)
         ])
      ];

      constructor(private slService:ShoppingListService){}
      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToSL(ingredients:Ingredient[]){
          this.slService.addIngredients(ingredients);
      }
}