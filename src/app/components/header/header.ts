import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  OnInit,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';
import { LangService } from '../../i18n/lang.service';

interface NavLink {
  href: string;
  label: { fr: string; en: string };
}

const AVAIL = {
  fr: 'Disponible en freelance',
  en: 'Available for freelance',
};

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly langService = inject(LangService);

  readonly activeSection = signal<string>('');

  readonly links: NavLink[] = [
    { href: 'about', label: { fr: 'À propos', en: 'About' } },
    { href: 'experience', label: { fr: 'Expériences', en: 'Experience' } },
    { href: 'stack', label: { fr: 'Stack', en: 'Stack' } },
    { href: 'blog', label: { fr: 'Blog', en: 'Blog' } },
    { href: 'contact', label: { fr: 'Contact', en: 'Contact' } },
  ];

  /** Label shown in the button = the language we'd switch TO (i.e. the other one). */
  protected readonly languageSwitchLabel = computed(() =>
    this.langService.current() === 'fr' ? '→ EN' : '→ FR',
  );

  protected readonly availLabel = computed(() => AVAIL[this.langService.current()]);

  protected readonly lang = this.langService.current;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateActiveSection();
    }
  }

  toggleLang(): void {
    this.langService.toggle();
  }

  goToTop(event: Event): void {
    event.preventDefault();
    if (!isPlatformBrowser(this.platformId)) return;
    document.body.style.transition = 'opacity 0.15s ease';
    document.body.style.opacity = '0.85';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 150);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollTo(event: Event, id: string): void {
    event.preventDefault();
    if (!isPlatformBrowser(this.platformId)) return;
    const target = document.getElementById(id);
    if (!target) return;
    target.classList.add('section-hl');
    setTimeout(() => target.classList.remove('section-hl'), 500);
    const offset = this.getHeaderHeight() + 8;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth',
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const headerH = this.getHeaderHeight();
    let current = '';
    for (const link of this.links) {
      const el = document.getElementById(link.href);
      if (el && window.scrollY >= el.offsetTop - headerH - 60) {
        current = link.href;
      }
    }
    this.activeSection.set(current);
  }

  private getHeaderHeight(): number {
    const topbar = document.querySelector('.topbar') as HTMLElement | null;
    const navbar = document.querySelector('.navbar') as HTMLElement | null;
    return (topbar?.offsetHeight ?? 0) + (navbar?.offsetHeight ?? 0);
  }
}
