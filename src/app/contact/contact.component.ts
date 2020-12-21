import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getLogoURL4(): string {

    return 'assets/marion.jpg';
  }
  getLogoURL5(): string {

    return 'assets/canelle.jpg';
  }
  getLogoURL6(): string {

    return 'assets/lucile.jpeg';
  }

}
