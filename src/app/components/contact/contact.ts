import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LangService } from '../../i18n/lang.service';
import { RevealDirective } from '../../directives/reveal.directive';

interface Bilingual {
  fr: string;
  en: string;
}

type ContactItem =
  | {
      kind: 'protected';
      scheme: 'mailto:' | 'tel:';
      /** Char codes of the real value. Never appears as a literal string in source. */
      codes: number[];
      /** Display teaser shown before reveal (same in both languages). */
      mask: string;
      hint: Bilingual;
    }
  | {
      kind: 'public';
      href: string;
      label: string;
      external?: boolean;
    };

const REVEAL_HINT: Bilingual = {
  fr: 'Cliquer pour révéler',
  en: 'Click to reveal',
};

const TRANSLATIONS = {
  fr: {
    sectionLabel: 'Contact',
    titleHtml: 'Travaillons<br><em>ensemble!</em>',
    description:
      'Disponible pour des missions freelance, du consulting technique ou des collaborations long terme. Basé à Mouscron, Belgique. Réponse sous 24h.',
    formTitle: 'Envoyer un message',
    nameLabel: 'Nom',
    namePlaceholder: 'Jean Dupont',
    emailLabel: 'Email',
    emailPlaceholder: 'jean@startup.fr',
    messageLabel: 'Message',
    messagePlaceholder: 'Décrivez votre projet...',
    submit: 'Envoyer →',
  },
  en: {
    sectionLabel: 'Contact',
    titleHtml: "Let's work<br><em>together!</em>",
    description:
      'Available for freelance assignments, technical consulting or long-term collaborations. Based in Mouscron, Belgium. Reply within 24 hours.',
    formTitle: 'Send a message',
    nameLabel: 'Name',
    namePlaceholder: 'Jane Doe',
    emailLabel: 'Email',
    emailPlaceholder: 'jane@startup.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about your project...',
    submit: 'Send →',
  },
} as const;

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  private readonly langService = inject(LangService);
  protected readonly lang = this.langService.current;
  protected readonly t = computed(() => TRANSLATIONS[this.lang()]);

  readonly contactLinks: ContactItem[] = [
    {
      kind: 'protected',
      scheme: 'mailto:',
      codes: [
        104, 101, 114, 112, 111, 101, 108, 46, 113, 117, 101, 110, 116, 105, 110, 64, 103, 109,
        97, 105, 108, 46, 99, 111, 109,
      ],
      mask: 'herpoel•••••••@gmail•com',
      hint: REVEAL_HINT,
    },
    {
      kind: 'public',
      href: 'https://www.linkedin.com/in/herpoelquentin/',
      label: 'linkedin.com/in/herpoelquentin',
      external: true,
    },
    {
      kind: 'protected',
      scheme: 'tel:',
      codes: [43, 51, 50, 52, 55, 56, 51, 50, 53, 51, 54, 56],
      mask: '(+32) 4•• •• •• ••',
      hint: REVEAL_HINT,
    },
  ];

  private readonly revealed = signal<ReadonlySet<number>>(new Set());

  name = '';
  email = '';
  message = '';

  isRevealed(index: number): boolean {
    return this.revealed().has(index);
  }

  displayLabel(item: ContactItem, index: number): string {
    if (item.kind === 'public') return item.label;
    return this.isRevealed(index) ? this.decode(item.codes) : item.mask;
  }

  hrefFor(item: ContactItem, index: number): string | null {
    if (item.kind === 'public') return item.href;
    if (!this.isRevealed(index)) return null;
    return item.scheme + this.decode(item.codes);
  }

  ariaLabel(item: ContactItem, index: number): string {
    if (item.kind === 'public') return item.label;
    return this.isRevealed(index) ? this.decode(item.codes) : item.hint[this.lang()];
  }

  onContactClick(event: Event, item: ContactItem, index: number): void {
    if (item.kind === 'public') return;
    if (this.isRevealed(index)) return; // second click → real navigation
    event.preventDefault();
    const next = new Set(this.revealed());
    next.add(index);
    this.revealed.set(next);
  }

  submit(): void {
    // TODO: wire up real backend
  }

  private decode(codes: number[]): string {
    return String.fromCharCode(...codes);
  }
}
