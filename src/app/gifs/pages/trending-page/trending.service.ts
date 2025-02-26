import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@envs/environment';
import type { GiphyResponse } from '../../interfaces/giphy.interfaces';
import { Gif } from '../../interfaces/gif.interface';
import { GiphyMapper } from '../../giphy.mapper';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  trendingGifs = signal<Gif[]>([]);

  http = inject(HttpClient);

  constructor() {
    this.fetchTrending();
  }

  fetchTrending = () => {
    const apikey = environment.giphy_api_key;
    const url = environment.giphy_api_url;
    this.http
      .get<GiphyResponse>(`${url}/trending`, 
        {
          params: {
            api_key: apikey,
            limit: 20
          },
        }
      )
      .subscribe((response) => {
        const gifs = response.data.map(GiphyMapper.mapToGif);
        this.trendingGifs.set(gifs);
      });
  };
}
