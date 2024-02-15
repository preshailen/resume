import { Component } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css', '../../app.component.css']
})

export class OtherComponent {
  otherventures: OtherVenture[] = [
    {
      name: 'Volunteering',
      description: 'I volunteer to tutor underprivileged kids with the Rose Act Saturday School',
      imageUrl: 'roseact.jpeg',
      duration: 'February 2022 - present',
      extUrl: 'https://raysofhope.co.za/grade4-11saturday-school/'
    },
    {
      name: 'Podcast',
      description: 'I host a podcast discussing the politics in movies',
      imageUrl: 'podcast.png',
      duration: 'March 2023 - present',
      extUrl: 'https://paicip.com'
    },
    {
      name: 'Review Blog',
      description: 'I write a blog where I review places and experiences in and around the Greater Johannesburg Area',
      imageUrl: 'blog.png',
      duration: 'December 2023 - present',
      extUrl: 'https://preshreviewblog.000webhostapp.com/'
    }
  ]
}
export class OtherVenture {
  name!: string;
  description!: string;
  imageUrl!: string;
  duration!: string;
  extUrl: string | undefined;
}
