import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit() {

  }
  download() {
    console.log('here')
  }
  change(name: string) {
    document.querySelector(".active-btn")!.classList.remove("active-btn");
    document.getElementById(name + 'Control')!.classList.add('active-btn');
    document.querySelector(".active")!.classList.remove("active");
    document.getElementById(name)!.classList.add("active");
  }
}
