import { Component, computed, inject } from '@angular/core';
import { LangService } from '../../i18n/lang.service';
import { RevealDirective } from '../../directives/reveal.directive';

interface Bilingual {
  fr: string;
  en: string;
}

interface StackCard {
  category: Bilingual;
  title: Bilingual;
  description: Bilingual;
  tags: string[];
}

const SECTION = {
  fr: 'Stack technique',
  en: 'Tech stack',
};

const CARDS: StackCard[] = [
  {
    category: { fr: 'Back-end', en: 'Back-end' },
    title: { fr: 'ASP.NET Core', en: 'ASP.NET Core' },
    description: {
      fr: 'APIs robustes et scalables, architectures hexagonales, event-driven avec brokers de messages.',
      en: 'Robust, scalable APIs, hexagonal architectures, event-driven with message brokers.',
    },
    tags: ['C#', 'ASP.NET Core', 'EF Core', 'RabbitMQ', 'Kafka'],
  },
  {
    category: { fr: 'Front-end', en: 'Front-end' },
    title: { fr: 'Angular & Blazor', en: 'Angular & Blazor' },
    description: {
      fr: 'Interfaces réactives, composants standalone, Signals, et UI soignée avec Blazor ou Angular.',
      en: 'Reactive interfaces, standalone components, Signals, and polished UI in Blazor or Angular.',
    },
    tags: ['Angular', 'TypeScript', 'RxJS', 'Blazor', 'Tailwind'],
  },
  {
    category: { fr: 'Architecture', en: 'Architecture' },
    title: { fr: 'DDD & CQRS', en: 'DDD & CQRS' },
    description: {
      fr: 'Des patterns éprouvés en production industrielle, sur des systèmes critiques à fort volume.',
      en: 'Patterns proven in industrial production, on high-volume safety-critical systems.',
    },
    tags: ['DDD', 'CQRS', 'Event Sourcing', 'Clean Arch', 'REST'],
  },
  {
    category: { fr: 'Données', en: 'Data' },
    title: { fr: 'SQL & NoSQL', en: 'SQL & NoSQL' },
    description: {
      fr: 'Modélisation relationnelle et NoSQL selon les besoins du domaine métier.',
      en: 'Relational and NoSQL modelling, picked to fit the business domain.',
    },
    tags: ['SQL Server', 'MongoDB'],
  },
  {
    category: { fr: 'DevOps & qualité', en: 'DevOps & quality' },
    title: { fr: 'CI/CD & Tests', en: 'CI/CD & Tests' },
    description: {
      fr: 'CI/CD fiable, tests automatisés, revue de code systématique et bonne hygiène de projet.',
      en: 'Reliable CI/CD, automated tests, systematic code review and clean project hygiene.',
    },
    tags: ['Azure DevOps', 'GitHub Actions', 'Docker', 'xUnit', 'FluentAssertions'],
  },
  {
    category: { fr: 'Méthodes', en: 'Methods' },
    title: { fr: 'Agile & Craft', en: 'Agile & Craft' },
    description: {
      fr: 'Agile/Scrum, documentation, code review, formation des nouveaux arrivants, démos de sprint.',
      en: 'Agile/Scrum, documentation, code review, onboarding of newcomers, sprint demos.',
    },
    tags: ['Agile / Scrum', 'Clean Code', 'Release Mgmt', 'Mentoring'],
  },
];

@Component({
  selector: 'app-stack',
  imports: [RevealDirective],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class StackComponent {
  private readonly langService = inject(LangService);
  protected readonly lang = this.langService.current;
  protected readonly sectionLabel = computed(() => SECTION[this.lang()]);
  readonly cards = CARDS;
}
