import { Component, computed, inject } from '@angular/core';
import { LangService } from '../../i18n/lang.service';

const TRANSLATIONS = {
  fr: {
    headerLabel: 'Fullstack .NET & Angular',
    date: 'Mouscron, Belgique · 2026',
    eyebrow: 'Développeur Freelance',
    taglineHtml: "Je crée des choses aussi bien<br>pour le web que pour l'industrie.",
    ctaPrimary: 'Travailler ensemble',
    ctaGhost: 'Mon parcours →',
    stat1Label: "Ans d'expérience",
    stat2Label: '.NET & Angular',
    stat3Label: 'Clean code',
    photoAlt: 'Portrait de Quentin Herpoel',
  },
  en: {
    headerLabel: 'Fullstack .NET & Angular',
    date: 'Mouscron, Belgium · 2026',
    eyebrow: 'Freelance Developer',
    taglineHtml: 'I build things that work<br>on the web and in heavy industry.',
    ctaPrimary: "Let's work together",
    ctaGhost: 'My journey →',
    stat1Label: 'Years of experience',
    stat2Label: '.NET & Angular',
    stat3Label: 'Clean code',
    photoAlt: 'Portrait of Quentin Herpoel',
  },
} as const;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  private readonly lang = inject(LangService);
  protected readonly t = computed(() => TRANSLATIONS[this.lang.current()]);
}
