import { Component } from '@angular/core';
import {Dish} from './dish';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  dish: Dish = {
    id: 1,
    name: 'Pizza Margherita',
    price: 8
  };
}
