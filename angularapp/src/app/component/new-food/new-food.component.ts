/*import { Component } from '@angular/core';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent {

}*/
import { Component, OnInit } from '@angular/core';
import { Food } from './../../interface/food';
import { items } from './../../interface/foods';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {

  items!: Food[];
  newFoodName = 'Enter Food Name';
  newFoodCalories = 0;
  newFoodImage = '';

  constructor() {
   }

  ngOnInit(): void {
    this.items = items;
  }

  addFood()
  {
    const newFood = {
      name: this.newFoodName,
      calories: this.newFoodCalories,
      image: this.newFoodImage,
      count: 0
    };

    this.items.unshift(newFood);
  }

  addCount(count: any, item: { count: any; }): any{
    item.count += count;
  }

}
