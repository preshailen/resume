import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  public qualificationUrl: string = '';
  educationItems: EducationItem[] = [
    {
      name: 'Bsc IT',
      description: '',
      school: 'University of Johannesburg',
      start: '2015',
      end: '2020',
      qualificationUrl: 'uni.jpg'
    },
    {
      name: 'Typescript Course',
      description: '',
      school: 'Udemy',
      start: '2024',
      end: '2024',
      qualificationUrl: 'typescript.jpg'
    }
  ]
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
