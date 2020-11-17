import { Component, OnInit } from '@angular/core';
import { ItemMenu } from '../classes/item-menu';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  itemsMenu = new Array<ItemMenu>();
  constructor() { }

  ngOnInit(): void {

    this.itemsMenu.push(new ItemMenu('Accueil', '/', false));
    this.itemsMenu.push(new ItemMenu('Page deux', '/second', false));
  }

  getLogoURL(): string {

    return 'assets/logo2.png';
  }
}
