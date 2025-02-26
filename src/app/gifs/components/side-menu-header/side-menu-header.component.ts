import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '@envs/environment';

@Component({
  selector: 'app-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.component.html',
})
export class SideMenuHeaderComponent {
  env = environment;
}
