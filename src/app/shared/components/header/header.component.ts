import { Component } from '@angular/core';
import { ThemeSelectorComponent } from "../theme-selector/theme-selector.component";

@Component({
  selector: 'app-header',
  imports: [ThemeSelectorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
