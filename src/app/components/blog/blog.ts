import { Component, computed, inject } from '@angular/core';
import { LangService } from '../../i18n/lang.service';
import { RevealDirective } from '../../directives/reveal.directive';

interface Bilingual {
  fr: string;
  en: string;
}

interface BlogPost {
  label: Bilingual;
  titleHtml: Bilingual;
  excerpt: Bilingual;
  date: Bilingual;
  link: string;
}

const SECTION = { fr: 'Blog', en: 'Blog' };
const READ = { fr: "Lire l'article →", en: 'Read article →' };

const POSTS: BlogPost[] = [
  {
    label: { fr: 'Architecture', en: 'Architecture' },
    titleHtml: {
      fr: 'Clean Architecture en .NET : <em>pourquoi et comment</em>',
      en: 'Clean Architecture in .NET: <em>why and how</em>',
    },
    excerpt: {
      fr: "Un retour d'expérience sur la mise en place d'une architecture hexagonale dans un projet .NET réel.",
      en: 'A look back on rolling out a hexagonal architecture in a real-world .NET project.',
    },
    date: { fr: 'À venir', en: 'Coming soon' },
    link: '#',
  },
  {
    label: { fr: 'Angular', en: 'Angular' },
    titleHtml: {
      fr: "Signals : migration <em>douce</em> d'une app existante",
      en: 'Signals: a <em>smooth</em> migration for an existing app',
    },
    excerpt: {
      fr: 'Les pièges à éviter et les patterns qui fonctionnent vraiment pour migrer vers les Signals.',
      en: 'Pitfalls to avoid and the patterns that actually work when migrating to Signals.',
    },
    date: { fr: 'À venir', en: 'Coming soon' },
    link: '#',
  },
  {
    label: { fr: 'Craft', en: 'Craft' },
    titleHtml: {
      fr: "Code review : ce que <em>j'ai appris</em> en 5 ans",
      en: 'Code review: what <em>I learned</em> over 5 years',
    },
    excerpt: {
      fr: "La code review n'est pas un contrôle qualité, c'est un outil de collaboration.",
      en: 'Code review is not a QA gate — it is a collaboration tool.',
    },
    date: { fr: 'À venir', en: 'Coming soon' },
    link: '#',
  },
];

@Component({
  selector: 'app-blog',
  imports: [RevealDirective],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class BlogComponent {
  private readonly langService = inject(LangService);
  protected readonly lang = this.langService.current;
  protected readonly sectionLabel = computed(() => SECTION[this.lang()]);
  protected readonly readLabel = computed(() => READ[this.lang()]);
  readonly posts = POSTS;
}
