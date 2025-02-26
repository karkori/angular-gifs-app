import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from "../side-menu-header/side-menu-header.component";
import { SideMenuOptionsComponent } from "../side-menu-options/side-menu-options.component";

@Component({
  selector: 'app-sidebar-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './sidebar-menu.component.html',
})
export class SidebarMenuComponent { }
