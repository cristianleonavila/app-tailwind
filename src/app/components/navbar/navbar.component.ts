import { Component, effect, signal } from '@angular/core';
import { ThemeSelectorComponent } from "../../shared/components/theme-selector/theme-selector.component";
import { ProfileOptionsComponent } from "../profile-options/profile-options.component";
import { NavbarSearchComponent } from "./navbar-search/navbar-search.component";

@Component({
  selector: 'app-navbar',
  imports: [ThemeSelectorComponent, ProfileOptionsComponent, NavbarSearchComponent],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent  {

  /*today = signal<Date>(new Date());

  updatedClock = effect(() => {
    setInterval(() => {
      this.today.set(new Date());
    }, 1000);
  });*/

}
