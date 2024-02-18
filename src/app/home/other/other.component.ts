import { Component } from '@angular/core';
import * as data from '../../../assets/data/otherVentures.json';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css', '../../app.component.css']
})

export class OtherComponent {
  otherventures: OtherVenture[] = (data as any).default;
}
export class OtherVenture {
  name!: string;
  description!: string;
  imageUrl!: string;
  duration!: string;
  extUrl: string | undefined;
}
