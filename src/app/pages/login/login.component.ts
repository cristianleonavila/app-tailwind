import { Component } from '@angular/core';
import { ThemeSelectorComponent } from "../../shared/components/theme-selector/theme-selector.component";

@Component({
  selector: 'app-login',
  imports: [ThemeSelectorComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {

}
