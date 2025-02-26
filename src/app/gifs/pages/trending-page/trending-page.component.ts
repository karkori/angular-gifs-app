import { Component, inject } from '@angular/core';
import { TrendingItemComponent } from "../../components/trending-item/trending-item.component";
import { TrendingService } from './trending.service';

@Component({
  selector: 'app-trending-page',
  imports: [TrendingItemComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent { 

  trendeingService = inject(TrendingService)
}
