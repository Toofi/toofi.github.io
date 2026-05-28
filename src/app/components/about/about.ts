import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  readonly values = [
    { n: '01', label: 'Architecture propre & principes SOLID' },
    { n: '02', label: 'DDD, CQRS, Event Sourcing en production' },
    { n: '03', label: 'Code review rigoureux, doc soignée' },
    { n: '04', label: 'Agile/Scrum, livraison continue' },
  ];
}
