import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ExperienceComponent } from './components/experience/experience';
import { StackComponent } from './components/stack/stack';
import { BlogComponent } from './components/blog/blog';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    StackComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
