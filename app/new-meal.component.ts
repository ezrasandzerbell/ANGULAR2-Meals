import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
    template: `
    <button *ngIf="!newMealForm" (click)="showMealForm()">Add New Meal</button>
    <div *ngIf="newMealForm">
      <h1>New Meal</h1>
      <div>
        <label>name: </label>
        <input #name>
        <label>details: </label>
        <input #details>
        <label>calories: </label>
        <input #calories>
        <button (click)="submitMeal(name.value, details.value, calories.value); name.value=''; details.value=''; price.value=''; calories.value='';">Submit</button>
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
