import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "filterPipe",
  pure: false
})

export class FilterCaloriesPipe implements PipeTransform {
  transform(input: Meal[], query: string) {
    var output: Meal[] = [];
    if (query === "lowCal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories <= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (query === "highCal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
