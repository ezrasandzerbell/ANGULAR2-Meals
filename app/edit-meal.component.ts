import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div class="mealFormDivs">
    <div *ngIf="childSelectedMeal">
    <br>
      <div class="formatMealForm">
        <h2>Edit Meal Details</h2>
           <label>Meal Name:</label><br>
           <input [(ngModel)]="childSelectedMeal.name"><br>
           <label>Meal Type:</label><br>
           <input [(ngModel)]="childSelectedMeal.details"><br>
           <label>Calories:</label><br>
           <input [(ngModel)]="childSelectedMeal.calories"><br>
           <br>
           <button (click)="finishedEditing()" class="buttonStyle">Done</button>
       </div>
     </div>
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
