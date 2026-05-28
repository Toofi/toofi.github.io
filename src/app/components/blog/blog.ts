import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface BlogPost {
  label: string;
  titleHtml: string;
  excerpt: string;
  date: string;
  link: string;
}

@Component({
  selector: 'app-blog',
  imports: [RevealDirective],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class BlogComponent {
  readonly posts: BlogPost[] = [
    {
      label: 'Architecture',
      titleHtml: 'Clean Architecture en .NET : <em>pourquoi et comment</em>',
      excerpt:
        'Un retour d\'expérience sur la mise en place d\'une architecture hexagonale dans un projet .NET réel.',
      date: 'À venir',
      link: '#',
    },
    {
      label: 'Angular',
      titleHtml: 'Signals : migration <em>douce</em> d\'une app existante',
      excerpt:
        'Les pièges à éviter et les patterns qui fonctionnent vraiment pour migrer vers les Signals.',
      date: 'À venir',
      link: '#',
    },
    {
      label: 'Craft',
      titleHtml: 'Code review : ce que <em>j\'ai appris</em> en 5 ans',
      excerpt: 'La code review n\'est pas un contrôle qualité, c\'est un outil de collaboration.',
      date: 'À venir',
      link: '#',
    },
  ];
}
