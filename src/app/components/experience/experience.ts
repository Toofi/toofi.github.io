import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface Experience {
  date: string;
  sector: string;
  type: string;
  title: string;
  description: string;
  tags: string[];
  delay: 1 | 2;
}

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  readonly experiences: Experience[] = [
    {
      date: '2024 → aujourd\'hui',
      sector: 'Industrie lourde',
      type: 'Freelance',
      title: 'Développeur Fullstack — Applications industrielles critiques',
      description:
        'Renfort d\'une équipe produit dans un grand groupe industriel européen. Développement et maintenance d\'une suite d\'applications métier couvrant la <strong>gestion logistique de containers</strong>, la <strong>planification des opérateurs terrain</strong>, le <strong>contrôle d\'accès des véhicules</strong>, les <strong>alertes de sécurité sur sites de production</strong>, la <strong>génération de rapports via vues SQL génériques</strong>, le <strong>suivi des incidents de production</strong> et la <strong>gestion des réparations d\'équipements lourds</strong>.',
      tags: ['C# / .NET', 'Angular', 'RabbitMQ', 'Kafka', 'DDD', 'CQRS', 'Azure DevOps', 'Docker'],
      delay: 1,
    },
    {
      date: '2024',
      sector: 'Ferroviaire',
      type: 'Freelance',
      title: 'Développeur — Systèmes embarqués de signalisation',
      description:
        'Intégration dans une équipe spécialisée en <strong>systèmes embarqués ferroviaires</strong>. Maintenance d\'applications legacy et développement de nouvelles fonctionnalités pour des systèmes de signalisation critiques, avec des contraintes temps-réel et des exigences de fiabilité élevées.',
      tags: ['Blazor', 'WebAssembly', 'C++', 'VB.NET', 'Python', 'WebSockets'],
      delay: 2,
    },
    {
      date: '2023 → 2024',
      sector: 'Transport aérien',
      type: 'Freelance',
      title: 'Développeur Front-end — Gestion de portes d\'embarquement',
      description:
        'Conception et développement <em>from scratch</em> d\'une application WebAssembly pour un <strong>écosystème de contrôle de portes aéroportuaires</strong>. Validation des passagers par scan de billets, gestion des caractéristiques de chaque porte, administration des droits utilisateurs. Choix techniques et architecturaux assurés en autonomie.',
      tags: ['Blazor', 'WebAssembly', 'SignalR', 'MudBlazor', 'DDD', 'REST API'],
      delay: 1,
    },
    {
      date: '2021 → 2023',
      sector: 'Industrie lourde',
      type: 'Salarié',
      title: 'Développeur Fullstack — MES & écosystème microservices',
      description:
        'Participation à la conception d\'un <strong>écosystème microservices</strong> pour la gestion de la production industrielle. Back-end structuré autour de DDD, Event Sourcing et CQRS pour tracer l\'historique complet des événements de production. Dashboard Angular de pilotage en temps réel. Réécriture de <strong>services legacy de gestion des accès et badges</strong> sur plusieurs sites.',
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
      date: '2021',
      sector: 'Mobilité / IoT',
      type: 'Stage',
      title: 'Développeur Fullstack — Tracking de véhicules électriques',
      description:
        'Développement d\'un proof of concept de <strong>suivi GPS de véhicules électriques</strong> : collecte temps réel, stockage cloud, API REST et carte interactive des trajets (consommation, vitesse, historique). Architecture et choix techniques assurés en autonomie.',
      tags: ['NestJS', 'Angular', 'MongoDB', 'Tailwind', 'JWT', 'Leaflet'],
      delay: 1,
    },
  ];
}
