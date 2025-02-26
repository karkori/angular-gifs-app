import { Component, input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-trending-item',
  imports: [],
  templateUrl: './trending-item.component.html',
})
export class TrendingItemComponent {
  gif = input.required<Gif>();
}
