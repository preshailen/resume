import { Component } from '@angular/core';
import * as data from '../../../assets/data/about.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public skills: Skill[] = (data as any).default;

  /*
    span class + amount
    html = 80;
    css = 95;
    js = 75;
    react = 75;
    node = 87
    python = 70
  */
}

export class Skill {
  title!: string;
  amount!: string;
  span!: string;
}
