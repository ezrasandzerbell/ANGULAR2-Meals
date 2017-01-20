import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal List</h1>
    <meal-list [childMealList]="meals" (editClickSender)="editMeal($event)"></meal-list>
    <edit-meal [childSelectedMeal]="selectedMeal" (clickSender)="finishedEditing()"></edit-meal>
    <new-meal [newMealForm]="newMealForm" (newMealSender)="addMeal($event)" (newMealFormSender)="showMealForm()"></new-meal>
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
    new Meal('Sandwich', 'lunch', 340),
    new Meal('Kombucha', 'lunch', 60),
    new Meal('Red Curry', 'dinner', 420),
    new Meal('Rice', 'dinner', 206),
    new Meal('Fortune Cookie', 'dinner', 107)
  ];
}
