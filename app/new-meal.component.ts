import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
    template: `
    <p class="mealForms">Meal Forms</p>
    <div class="mealFormDivs"><button *ngIf="!newMealForm" (click)="showMealForm()" class="btn buttonStyle">Add A New Meal</button>
      <div *ngIf="newMealForm" class="formatMealForm">
        <h2>New Meal</h2>
        <div>
          <input #name placeholder="Food Name">
          <br>
          <input #details placeholder="Type of Meal">
          <br>
          <input #calories placeholder="Number of Calories">
          <br>
          <button (click)="submitMeal(name.value, details.value, calories.value); name.value=''; details.value=''; calories.value='';" class="btn buttonStyle">Submit</button>
        </div>
      </div>
    </div>
    `
})

  export class NewMealComponent {
    @Input() newMealForm: boolean;
    @Output() newMealSender = new EventEmitter();
    @Output() newMealFormSender = new EventEmitter();

    submitMeal(name: string, details: string, calories: number) {
      var newMealToAdd: Meal = new Meal(name, details, calories);
      this.newMealSender.emit(newMealToAdd);
    }

    showMealForm() {
      this.newMealFormSender.emit();
    }
}
