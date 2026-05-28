import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';

type ContactItem =
  | {
      kind: 'protected';
      scheme: 'mailto:' | 'tel:';
      /** Char codes of the real value. Never appears as a literal string in source. */
      codes: number[];
      /** Display teaser shown before reveal. */
      mask: string;
      hint: string;
    }
  | {
      kind: 'public';
      href: string;
      label: string;
      external?: boolean;
    };

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  readonly contactLinks: ContactItem[] = [
    {
      kind: 'protected',
      scheme: 'mailto:',
      codes: [
        104, 101, 114, 112, 111, 101, 108, 46, 113, 117, 101, 110, 116, 105, 110, 64, 103, 109,
        97, 105, 108, 46, 99, 111, 109,
      ],
      mask: 'herpoel••••••• @ gmail•com',
      hint: 'Cliquer pour révéler',
    },
    {
      kind: 'public',
      href: 'https://bento.me/quentinherpoel',
      label: 'bento.me/quentinherpoel',
      external: true,
    },
    {
      kind: 'protected',
      scheme: 'tel:',
      codes: [43, 51, 50, 52, 55, 56, 51, 50, 53, 51, 54, 56],
      mask: '(+32) 4•• ## ## ##',
      hint: 'Cliquer pour révéler',
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
    return this.isRevealed(index) ? this.decode(item.codes) : item.hint;
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
