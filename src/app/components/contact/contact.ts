import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';

interface ContactLink {
  href: string;
  label: string;
  external?: boolean;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  readonly contactLinks: ContactLink[] = [
    { href: 'mailto:herpoel.quentin@gmail.com', label: 'herpoel.quentin@gmail.com' },
    {
      href: 'https://bento.me/quentinherpoel',
      label: 'bento.me/quentinherpoel',
      external: true,
    },
    { href: 'tel:+32478325368', label: '(+32) 478 32 53 68' },
  ];

  name = '';
  email = '';
  message = '';

  submit(): void {
    // TODO: wire up real backend
  }
}
