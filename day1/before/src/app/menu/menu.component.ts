import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  dish: Dish;

  constructor() { }

  ngOnInit() {
  }

}
