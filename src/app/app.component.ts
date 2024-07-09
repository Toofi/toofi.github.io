import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialsComponent } from "./components/socials/socials.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ProfileComponent } from './components/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    SocialsComponent, 
    MenuComponent, 
    ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'toofi.github.io';
}
