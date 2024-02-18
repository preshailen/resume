import { Component, NgModule } from '@angular/core';
import * as data from '../../../assets/data/education.json';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  public qualificationUrl: string = '';
  public educationItems: EducationItem[] = (data as any).default;
  openModal(qUrl: string) {
    this.qualificationUrl = qUrl;
    document.getElementById("myModal")!.style.display = 'block';
  }
  close() {
    this.qualificationUrl = '';
    document.getElementById("myModal")!.style.display = "none";
  }
}

export class EducationItem {
  name!: string;
  description!: string;
  school!: string;
  start!: string;
  end!: string;
  qualificationUrl!: string;
}
