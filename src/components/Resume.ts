import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { experienceInterface, socialMedia } from '../app/app.component';

@Component({
  standalone: true,
  selector: 'resume',
  imports: [CommonModule],
  template: `<h1>Резюме {{ name }}</h1>
    <h2>Досвід роботи</h2>
    <div *ngFor="let job of experience">
      <h3>{{ job.position }} - {{ job.company }}</h3>
      <p>{{ job.duration }}</p>
      <p>{{ job.description }}</p>
    </div>
    skills
    <ul *ngFor="let skill of skills">
      <li>{{ skill }}</li>
    </ul>
    knowledges
    <ul *ngFor="let knowledge of knowledges">
      <li>{{ knowledge }}</li>
    </ul>
    certificates
    <ul *ngFor="let certificate of certificates">
      <li>{{ certificate }}</li>
    </ul>
    <img src="{{ photo }}" width="150" />
    <h2>Соціальні мережі</h2>
    <ul>
      <li *ngFor="let resource of resources">
        <a [href]="resource.link" target="_blank">{{ resource.name }}</a>
      </li>
    </ul> `,
})
export default class Resume {
  @Input() name: string = '';
  @Input() skills: string[] = [];
  @Input() knowledges: string[] = [];
  @Input() certificates: string[] = [];
  @Input() experience: experienceInterface[] = [];
  @Input() resources: socialMedia[] = [];
  @Input() photo: string = '';
}
