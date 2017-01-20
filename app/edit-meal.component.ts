import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="selectedMeal">
     <label>Meal Name:</label><br>
     <input [(ngModel)]="selectedMeal.name"><br>
     <label>Meal Type:</label><br>
     <input [(ngModel)]="selectedMeal.details"><br>
     <label>Calories:</label><br>
     <input [(ngModel)]="selectedMeal.calories"><br>
     <button (click)="finishedEditing()">Done</button>
   </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() clickSender = new EventEmitter();

  finishedEditing() {
    this.clickSender.emit();
  }
}
