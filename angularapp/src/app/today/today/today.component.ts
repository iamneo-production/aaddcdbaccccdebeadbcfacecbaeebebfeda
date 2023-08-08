import { Component, OnInit } from '@angular/core';
import { Food } from '../../interface/food';
import { items } from '../../interface/foods';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  items: Food[] = [];
  newFood: any = {};

  constructor() {
  }

  ngOnInit(): void {
    this.items = items;
  }

  addCount(count: any, item: { count: any; }): any {
    item.count += count;
  }


}