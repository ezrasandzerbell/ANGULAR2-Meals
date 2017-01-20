import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allCal" selected="selected"> All Meals </option>
    <option value="lowCal"> Low Calorie </option>
    <option value="highCal"> High Calorie </option>
  </select>

  <ul>
    <li *ngFor="let meal of childMealList | filterPipe:calorieFilter">Name: {{meal.name}}, Details: {{meal.details}}, Calories: {{meal.calories}} <br><a class="waves-effect waves-light btn" (click)="editMeal(meal)">Edit</a></li>
  </ul>
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
