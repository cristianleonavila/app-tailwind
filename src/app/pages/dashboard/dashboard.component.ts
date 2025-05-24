import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { DrawerComponent } from "../../components/drawer/drawer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, DrawerComponent, RouterOutlet],
  templateUrl: './dashboard.component.html'
})
export default class DashboardComponent {

}
