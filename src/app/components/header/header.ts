import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
  inject,
} from '@angular/core';

interface NavLink {
  href: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);

  readonly lang = signal<'FR' | 'EN'>('FR');
  readonly activeSection = signal<string>('');

  readonly links: NavLink[] = [
    { href: 'about', label: 'À propos' },
    { href: 'experience', label: 'Expériences' },
    { href: 'stack', label: 'Stack' },
    { href: 'blog', label: 'Blog' },
    { href: 'contact', label: 'Contact' },
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateActiveSection();
    }
  }

  ngOnDestroy(): void {}

  toggleLang(): void {
    this.lang.update((v) => (v === 'FR' ? 'EN' : 'FR'));
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
