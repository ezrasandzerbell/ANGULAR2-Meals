import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
     <label>Meal Name:</label><br>
     <input [(ngModel)]="childSelectedMeal.name"><br>
     <label>Meal Type:</label><br>
     <input [(ngModel)]="childSelectedMeal.details"><br>
     <label>Calories:</label><br>
     <input [(ngModel)]="childSelectedMeal.calories"><br>
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
