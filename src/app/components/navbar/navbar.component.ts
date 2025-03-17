import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomTitlePipe } from '../../pipes/custom-title.pipe';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CustomTitlePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'tp01_ANGULAR_ePsi';
}
