import { Component, input } from '@angular/core';

@Component({
  selector: 'app-trending-item',
  imports: [],
  templateUrl: './trending-item.component.html',
})
export class TrendingItemComponent {
  imageUrl = input.required<string>();
}
