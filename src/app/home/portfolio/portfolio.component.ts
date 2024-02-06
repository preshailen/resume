import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css', '../../app.component.css']
})
export class PortfolioComponent {
  portfolios: Portfolio[] = [
    {
      name: 'E-Moderator',
      description: 'Tool built in Angular that allows teachers to electronically moderate tests',
      imageUrl: 'emoderator.png',
      gitUrl: 'https://github.com/preshailen/moderator',
      ytUrl: 'https://youtu.be/q2l-ZrL8Ceg'
    },
    {
      name: 'Recipe Book Frontend',
      description: 'Tool built in Angular to managedfgfgdfgdfgdfgd',
      imageUrl: 'port2.jpg',
      gitUrl: 'https://github.com/preshailen/moderator',
      ytUrl: 'https://youtu.be/q2l-ZrL8Ceg'
    }
  ]
}
export class Portfolio {
  name!: string;
  description!: string;
  imageUrl!: string;
  gitUrl: string | undefined;
  ytUrl: string | undefined;
}

