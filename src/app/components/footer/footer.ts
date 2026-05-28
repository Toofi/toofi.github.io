import { Component, computed, inject } from '@angular/core';
import { LangService } from '../../i18n/lang.service';

const TRANSLATIONS = {
  fr: 'Fait avec soin & Angular',
  en: 'Crafted with care & Angular',
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  private readonly langService = inject(LangService);
  readonly year = new Date().getFullYear();
  protected readonly madeWith = computed(() => TRANSLATIONS[this.langService.current()]);
}
