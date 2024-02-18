import { Component } from '@angular/core';
import * as data from '../../../assets/data/portfolio.json';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css', '../../app.component.css']
})
export class PortfolioComponent {
  portfolios: Portfolio[] = (data as any).default;
}
export class Portfolio {
  name!: string;
  description!: string;
  imageUrl!: string;
  gitUrl: string | undefined;
  ytUrl: string | undefined;
  hostedUrl: string | undefined;
}

