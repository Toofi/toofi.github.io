import { Component, computed, inject } from '@angular/core';
import { LangService } from '../../i18n/lang.service';
import { RevealDirective } from '../../directives/reveal.directive';

interface Bilingual {
  fr: string;
  en: string;
}

interface Experience {
  date: Bilingual;
  sector: Bilingual;
  type: Bilingual;
  title: Bilingual;
  description: Bilingual;
  tags: string[];
  delay: 1 | 2;
}

const SECTION = {
  fr: 'Expériences',
  en: 'Experience',
};

const EXPERIENCES: Experience[] = [
  {
    date: { fr: "2024 → aujourd'hui", en: '2024 → present' },
    sector: { fr: 'Industrie lourde', en: 'Heavy industry' },
    type: { fr: 'Freelance', en: 'Freelance' },
    title: {
      fr: 'Développeur Fullstack — Applications industrielles critiques',
      en: 'Fullstack Developer — Critical industrial applications',
    },
    description: {
      fr: "Renfort d'une équipe produit dans un grand groupe industriel européen. Développement et maintenance d'une suite d'applications métier couvrant la <strong>gestion logistique de containers</strong>, la <strong>planification des opérateurs terrain</strong>, le <strong>contrôle d'accès des véhicules</strong>, les <strong>alertes de sécurité sur sites de production</strong>, la <strong>génération de rapports via vues SQL génériques</strong>, le <strong>suivi des incidents de production</strong> et la <strong>gestion des réparations d'équipements lourds</strong>.",
      en: 'Reinforcing a product team within a large European industrial group. Development and maintenance of a suite of business applications covering <strong>container logistics</strong>, <strong>field operator scheduling</strong>, <strong>vehicle access control</strong>, <strong>safety alerts on production sites</strong>, <strong>report generation via generic SQL views</strong>, <strong>production incident tracking</strong> and <strong>heavy equipment repair management</strong>.',
    },
    tags: ['C# / .NET', 'Angular', 'RabbitMQ', 'Kafka', 'DDD', 'CQRS', 'Azure DevOps', 'Docker'],
    delay: 1,
  },
  {
    date: { fr: '2024', en: '2024' },
    sector: { fr: 'Ferroviaire', en: 'Railway' },
    type: { fr: 'Salarié', en: 'Employee' },
    title: {
      fr: 'Développeur — Systèmes embarqués de signalisation',
      en: 'Developer — Embedded signalling systems',
    },
    description: {
      fr: "Intégration dans une équipe spécialisée en <strong>systèmes embarqués ferroviaires</strong>. Maintenance d'applications legacy et développement de nouvelles fonctionnalités pour des systèmes de signalisation critiques, avec des contraintes temps-réel et des exigences de fiabilité élevées.",
      en: 'Joined a team specialising in <strong>embedded railway systems</strong>. Legacy application maintenance and new-feature development for safety-critical signalling systems, under real-time constraints and demanding reliability requirements.',
    },
    tags: ['Blazor', 'WebAssembly', 'C++', 'VB.NET', 'Python', 'WebSockets'],
    delay: 2,
  },
  {
    date: { fr: '2023 → 2024', en: '2023 → 2024' },
    sector: { fr: 'Transport aérien', en: 'Air transport' },
    type: { fr: 'Salarié', en: 'Employee' },
    title: {
      fr: "Développeur Front-end — Gestion de portes d'embarquement",
      en: 'Front-end Developer — Boarding gate management',
    },
    description: {
      fr: "Conception et développement <em>from scratch</em> d'une application WebAssembly pour un <strong>écosystème de contrôle de portes aéroportuaires</strong>. Validation des passagers par scan de billets, gestion des caractéristiques de chaque porte, administration des droits utilisateurs. Choix techniques et architecturaux assurés en autonomie.",
      en: 'Designed and built <em>from scratch</em> a WebAssembly application for an <strong>airport gate-control ecosystem</strong>. Passenger validation via ticket scanning, per-gate configuration management, user permissions admin. Technical and architectural decisions owned end-to-end.',
    },
    tags: ['Blazor', 'WebAssembly', 'SignalR', 'MudBlazor', 'DDD', 'REST API'],
    delay: 1,
  },
  {
    date: { fr: '2021 → 2023', en: '2021 → 2023' },
    sector: { fr: 'Industrie lourde', en: 'Heavy industry' },
    type: { fr: 'Salarié', en: 'Employee' },
    title: {
      fr: 'Développeur Fullstack — MES & écosystème microservices',
      en: 'Fullstack Developer — MES & microservices ecosystem',
    },
    description: {
      fr: "Participation à la conception d'un <strong>écosystème microservices</strong> pour la gestion de la production industrielle. Back-end structuré autour de DDD, Event Sourcing et CQRS pour tracer l'historique complet des événements de production. Dashboard Angular de pilotage en temps réel. Réécriture de <strong>services legacy de gestion des accès et badges</strong> sur plusieurs sites.",
      en: 'Contributed to the design of a <strong>microservices ecosystem</strong> for industrial production management. Back-end structured around DDD, Event Sourcing and CQRS to capture the full history of production events. Real-time Angular control dashboard. Rewrote <strong>legacy access and badge management services</strong> across multiple sites.',
    },
    tags: [
      'C# / .NET',
      'Angular',
      'RabbitMQ',
      'Event Sourcing',
      'CQRS',
      'DDD',
      'SQL Server',
      'Docker',
    ],
    delay: 2,
  },
  {
    date: { fr: '2021', en: '2021' },
    sector: { fr: 'Mobilité / IoT', en: 'Mobility / IoT' },
    type: { fr: 'Stage', en: 'Internship' },
    title: {
      fr: 'Développeur Fullstack — Tracking de véhicules électriques',
      en: 'Fullstack Developer — Electric vehicle tracking',
    },
    description: {
      fr: "Développement d'un proof of concept de <strong>suivi GPS de véhicules électriques</strong> : collecte temps réel, stockage cloud, API REST et carte interactive des trajets (consommation, vitesse, historique). Architecture et choix techniques assurés en autonomie.",
      en: 'Built a proof of concept for <strong>GPS tracking of electric vehicles</strong>: real-time data collection, cloud storage, REST API and an interactive trip map (consumption, speed, history). Architecture and tech choices owned end-to-end.',
    },
    tags: ['NestJS', 'Angular', 'MongoDB', 'Tailwind', 'JWT', 'Leaflet'],
    delay: 1,
  },
];

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  private readonly langService = inject(LangService);
  protected readonly lang = this.langService.current;
  protected readonly sectionLabel = computed(() => SECTION[this.lang()]);
  readonly experiences = EXPERIENCES;
}
