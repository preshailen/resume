import { Component } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css', '../../app.component.css']
})

export class OtherComponent {
  otherworks: OtherWork[] = [
    {
      name: 'Podcast',
      description: 'Host of a podcast discussing the politics in movies',
      imageUrl: 'podcast.png',
      extUrl: 'https://paicip.com'
    },
    {
      name: 'Volunteering',
      description: 'Volunteered to tutor underprivileged kids with the Rose Act Saturday School',
      imageUrl: 'roseact.jpeg',
      extUrl: 'https://raysofhope.co.za/grade4-11saturday-school/'
    },
    {
      name: 'Review Blog',
      description: 'Blog where I review places and experiences in and around the Greater Johannesburg Area',
      imageUrl: 'blog.png',
      extUrl: 'https://preshreviewblog.000webhostapp.com/'
    }
  ]
}
export class OtherWork {
  name!: string;
  description!: string;
  imageUrl!: string;
  extUrl: string | undefined;
}
