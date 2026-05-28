import { Component, computed, inject } from '@angular/core';
import { LangService } from '../../i18n/lang.service';
import { RevealDirective } from '../../directives/reveal.directive';

const TRANSLATIONS = {
  fr: {
    sectionLabel: 'À propos',
    titleHtml:
      '<span class="t-line"><span class="t-w">Code</span> <span class="t-w">propre,</span></span><span class="t-line"><span class="t-w">produits</span> <span class="t-w"><em>durables.</em></span></span>',
    p1Html:
      "Je suis <strong>Quentin Herpoel</strong>, alias <strong>Toofi</strong>, développeur fullstack freelance spécialisé en <strong>.NET/C#</strong> et <strong>Angular</strong>. Avec plus de 4 ans d'expérience, je conçois des applications web robustes, de l'architecture back-end à l'expérience utilisateur.",
    p2Html:
      "Avant de me lancer dans le développement, j'ai travaillé dans le <strong>transport et la logistique</strong> de 2014 à 2021 — une expérience qui m'a appris la rigueur opérationnelle, le travail en équipe et la résistance au stress.",
    p3Html:
      "Ce qui me différencie ? Une obsession pour la <strong>qualité du code</strong> — pas seulement un code qui fonctionne, mais un code qui se maintient, se teste et s'adapte dans la durée.",
    values: [
      { n: '01', label: 'Architecture propre & principes SOLID' },
      { n: '02', label: 'DDD, CQRS, Event Sourcing en production' },
      { n: '03', label: 'Code review rigoureux, doc soignée' },
      { n: '04', label: 'Agile/Scrum, livraison continue' },
    ],
  },
  en: {
    sectionLabel: 'About',
    titleHtml:
      '<span class="t-line"><span class="t-w">Clean</span> <span class="t-w">code,</span></span><span class="t-line"><span class="t-w">lasting</span> <span class="t-w"><em>products.</em></span></span>',
    p1Html:
      "I'm <strong>Quentin Herpoel</strong>, a.k.a. <strong>Toofi</strong>, a freelance fullstack developer specialised in <strong>.NET/C#</strong> and <strong>Angular</strong>. With over 4 years of experience, I design robust web applications — from back-end architecture to the user experience.",
    p2Html:
      'Before moving into development, I spent 2014 to 2021 working in <strong>transport and logistics</strong> — an experience that taught me operational rigour, teamwork and resilience under pressure.',
    p3Html:
      'What sets me apart? An obsession with <strong>code quality</strong> — not just code that works, but code that stays maintainable, testable and adaptable over time.',
    values: [
      { n: '01', label: 'Clean architecture & SOLID principles' },
      { n: '02', label: 'DDD, CQRS, Event Sourcing in production' },
      { n: '03', label: 'Rigorous code review, polished docs' },
      { n: '04', label: 'Agile/Scrum, continuous delivery' },
    ],
  },
} as const;

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  private readonly lang = inject(LangService);
  protected readonly t = computed(() => TRANSLATIONS[this.lang.current()]);
}
