import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';

export type Lang = 'fr' | 'en';

const STORAGE_KEY = 'toofi-lang';

@Injectable({ providedIn: 'root' })
export class LangService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly current = signal<Lang>(this.detectInitial());

  constructor() {
    effect(() => {
      const value = this.current();
      if (!isPlatformBrowser(this.platformId)) return;
      try {
        localStorage.setItem(STORAGE_KEY, value);
      } catch {
        // localStorage unavailable (private mode, quota, etc.) — silently skip
      }
      document.documentElement.lang = value;
    });
  }

  toggle(): void {
    this.current.update((v) => (v === 'fr' ? 'en' : 'fr'));
  }

  set(lang: Lang): void {
    this.current.set(lang);
  }

  private detectInitial(): Lang {
    if (!isPlatformBrowser(this.platformId)) return 'fr';
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'fr' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    const nav = navigator.language?.toLowerCase() ?? '';
    return nav.startsWith('en') ? 'en' : 'fr';
  }
}
