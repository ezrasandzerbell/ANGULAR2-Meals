import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal List</h1>
   <ul>
     <li *ngFor="let meal of meals">Name: {{meal.name}}, Details: {{meal.details}}, Calories: {{meal.calories}} <br><button (click)="editMeal(meal)">Edit!</button><br></li>
   </ul>
   <div *ngIf="selectedMeal">
      <label>Meal Name:</label><br>
      <input [(ngModel)]="selectedMeal.name"><br>
      <label>Meal Type:</label><br>
      <input [(ngModel)]="selectedMeal.details"><br>
      <label>Calories:</label><br>
      <input [(ngModel)]="selectedMeal.calories"><br>
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {

  selectedMeal: Meal = null;

     editMeal(clickedMeal) {
       this.selectedMeal = clickedMeal;
       console.log(clickedMeal);
     }

     finishedEditing() {
       this.selectedMeal = null;
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
//class declaration is our MODEL which is also data
export class Meal {
  constructor(public name: string, public details: string, public calories: number) { }
}


//TIP when a variable in a component's class declaration references another variable in the class, it must be prefaced with the this keyword.
