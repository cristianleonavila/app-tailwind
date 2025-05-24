import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  imports: [],
  templateUrl: './theme-selector.component.html'
})
export class ThemeSelectorComponent {

  themeSelectorIsChecked = signal<boolean>(this.loadFromLocalStorage());

  private loadFromLocalStorage():boolean {
    const item:string = localStorage.getItem('darkTheme') ?? 'true';
    return JSON.parse(item);
  }

  changeTheme(element:HTMLInputElement) {
    const { checked } = element;
    localStorage.setItem('darkTheme', JSON.stringify(checked));
  }
}
