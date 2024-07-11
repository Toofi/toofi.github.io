import { Component, ViewEncapsulation } from '@angular/core';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SocialsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class ProfileComponent {

}
