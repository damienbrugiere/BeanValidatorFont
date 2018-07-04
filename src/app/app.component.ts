import { Component } from '@angular/core';
import { MenuList } from './menu-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle: boolean;
  list: Array<MenuList>;
  constructor(){
    this.toggle = true;
    this.list = [
      new MenuList("Home","fas fa-home","/home"),
      new MenuList("Bean validations","fas fa-home","/bean-listing"),
      new MenuList("Projets","fas fa-home","/project"),
      new MenuList("Classes","fas fa-home","/classes"),
    ];
  }

  getStyle() {
    if(this.toggle) {
      return "20%";
    } else {
      return "";
    }
  }




}
