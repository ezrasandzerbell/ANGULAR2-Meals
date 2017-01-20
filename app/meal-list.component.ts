import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <h3 class="mealList">Meal List</h3>
    <div class="selectBox">
      <select (change)="onChange($event.target.value)" class="selectWidth">
        <option value="allCal" selected="selected"> Show All Meals </option>
        <option value="lowCal"> Show Low Calorie Meals </option>
        <option value="highCal"> Show High Calorie Meals </option>
      </select>
    </div>

    <div *ngFor="let meal of childMealList | filterPipe:calorieFilter" class="mealDiv">
      {{meal.name}} for {{meal.details}} ({{meal.calories}} calories) <button type="button" class="btn buttonStyle" (click)="editMeal(meal)">Edit</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() editClickSender = new EventEmitter();

  calorieFilter: string = "allCal";

  onChange(selection) {
    this.calorieFilter = selection;
    console.log(this.calorieFilter)
  }

  editMeal(clickedMeal) {
    this.editClickSender.emit(clickedMeal);
  }


}
