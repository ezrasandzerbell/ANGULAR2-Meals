import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
    <li *ngFor="let meal of childMealList">Name: {{meal.name}}, Details: {{meal.details}}, Calories: {{meal.calories}} <br><button (click)="editMeal(meal)">Edit!</button><br></li>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() editClickSender = new EventEmitter();

  editMeal(clickedMeal) {
    this.editClickSender.emit(clickedMeal);
  }

}
