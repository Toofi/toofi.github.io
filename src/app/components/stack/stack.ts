import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface StackCard {
  category: string;
  title: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-stack',
  imports: [RevealDirective],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class StackComponent {
  readonly cards: StackCard[] = [
    {
      category: 'Back-end',
      title: 'ASP.NET Core',
      description:
        'APIs robustes et scalables, architectures hexagonales, event-driven avec brokers de messages.',
      tags: ['C#', 'ASP.NET Core', 'EF Core', 'RabbitMQ', 'Kafka'],
    },
    {
      category: 'Front-end',
      title: 'Angular & Blazor',
      description:
        'Interfaces réactives, composants standalone, Signals, et UI soignée avec Blazor ou Angular.',
      tags: ['Angular', 'TypeScript', 'RxJS', 'Blazor', 'Tailwind'],
    },
    {
      category: 'Architecture',
      title: 'DDD & CQRS',
      description:
        'Des patterns éprouvés en production industrielle, sur des systèmes critiques à fort volume.',
      tags: ['DDD', 'CQRS', 'Event Sourcing', 'Clean Arch', 'REST'],
    },
    {
      category: 'Données',
      title: 'SQL & NoSQL',
      description: 'Modélisation relationnelle et NoSQL selon les besoins du domaine métier.',
      tags: ['SQL Server', 'MongoDB', 'Oracle'],
    },
    {
      category: 'DevOps & qualité',
      title: 'CI/CD & Tests',
      description:
        'CI/CD fiable, tests automatisés, revue de code systématique et bonne hygiène de projet.',
      tags: ['GitHub Actions', 'Azure DevOps', 'Docker', 'xUnit', 'FluentAssertions'],
    },
    {
      category: 'Méthodes',
      title: 'Agile & Craft',
      description:
        'Agile/Scrum, documentation, code review, formation des nouveaux arrivants, démos de sprint.',
      tags: ['Agile / Scrum', 'Clean Code', 'Release Mgmt', 'Mentoring'],
    },
  ];
}
