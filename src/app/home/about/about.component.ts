import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  educationItems: EducationItem[] = [
    {
      name: 'Primary School',
      description: '',
      school: 'Mitchford Primary School',
      start: '2003',
      end: '2004'
    },
    {
      name: 'Primary School',
      description: '',
      school: 'School for S Primary School',
      start: '2005',
      end: '2005'
    },
    {
      name: 'Primary School',
      description: '',
      school: 'Eastleigh Primary School',
      start: '2006',
      end: '2009'
    },
  ]
  download() {

  }
}
export class EducationItem {
  name!: string;
  description!: string;
  school!: string;
  start!: string;
  end!: string;
}
