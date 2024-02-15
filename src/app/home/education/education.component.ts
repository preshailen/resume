import { Component, Input, TemplateRef, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QualificationComponent } from './qualification/qualification.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  private modalService = inject(NgbModal);
  educationItems: EducationItem[] = [
    {
      name: 'Bsc IT',
      description: '',
      school: 'University of Johannesburg',
      start: '2015',
      end: '2020',
      qualificationUrl: 'assets/uni.jpg'
    },
    {
      name: 'Typescript Course',
      description: '',
      school: 'Udemy',
      start: '2024',
      end: '2024',
      qualificationUrl: 'assets/typescript.jpg'
    }
  ]
	open(qualificationUrl: string) {
		const modalRef = this.modalService.open(QualificationComponent, { size: "xl", backdrop: 'static' });
		modalRef.componentInstance.qualificationUrl = qualificationUrl;
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
