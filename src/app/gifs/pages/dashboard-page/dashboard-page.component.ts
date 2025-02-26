import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarMenuComponent } from "../../components/sidebar-menu/sidebar-menu.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SidebarMenuComponent],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent { 

  
}
