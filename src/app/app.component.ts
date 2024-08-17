import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import Resume from './../components/Resume';

export interface experienceInterface {
  position: string;
  company: string;
  duration: string;
  description: string;
}
export interface socialMedia {
  name: string;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Resume],
  template: `
    <resume
      name="John Doe"
      [experience]="[
        {
          position: 'Software Developer',
          company: 'Tech Company',
          duration: 'Jan 2020 - Present',
          description: 'Розробка веб-застосунків на Angular та React.'
        },
        {
          position: 'Junior Developer',
          company: 'Another Tech Company',
          duration: 'Jun 2018 - Dec 2019',
          description: 'Підтримка та розробка фронтенд частини застосунків.'
        }
      ]"
      [resources]="[
        { name: 'GitHub', link: 'https://github.com/johndoe' },
        { name: 'Twitter', link: 'https://twitter.com/johndoe' },
        { name: 'LinkedIn', link: 'https://linkedin.com/in/johndoe' }
      ]"
      [skills]="['JavaScript', 'Angular', 'TypeScript']"
      [knowledges]="[
        'Software Development',
        'Web Technologies',
        'Agile Methodologies'
      ]"
      [certificates]="['Certified Angular Developer', 'Scrum Master']"
      photo="https://www.caldervets.co.uk/images/pet-care/rabbits/rabbits-how-to-care-for-a-new-pet-rabbit-01.jpg"
    ></resume>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularResume';
}
