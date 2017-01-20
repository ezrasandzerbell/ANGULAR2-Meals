import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-md-8 leftDiv">
      <meal-list [childMealList]="meals" (editClickSender)="editMeal($event)"></meal-list>
      </div>
      <div class="col-md-4 rightDiv">
      <new-meal [newMealForm]="newMealForm" (newMealSender)="addMeal($event)" (newMealFormSender)="showMealForm()"></new-meal>
      <edit-meal [childSelectedMeal]="selectedMeal" (clickSender)="finishedEditing()"></edit-meal>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {

  selectedMeal: Meal = null;
  newMealForm: boolean = false;

   editMeal(clickedMeal) {
     this.selectedMeal = clickedMeal;
     console.log(clickedMeal);
   }

   finishedEditing() {
     this.selectedMeal = null;
   }

   addMeal(meal) {
     this.newMealForm = false;
     this.meals.push(meal);
   }

   showMealForm() {
    this.newMealForm = true;
  }

  meals: Meal[] = [
    new Meal('Toast', 'breakfast', 75),
    new Meal('Eggs', 'breakfast', 156),
    new Meal('Hashbrowns', 'breakfast', 160),
    new Meal('Sandwich', 'lunch', 540),
    new Meal('Kombucha', 'lunch', 60),
    new Meal('Red Curry', 'dinner', 520),
    new Meal('Rice', 'dinner', 206),
    new Meal('Fortune Cookie', 'dinner', 107)
  ];
}
