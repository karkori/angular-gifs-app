import { Gif } from "./interfaces/gif.interface";
import { GiphyItem } from "./interfaces/giphy.interfaces";

 export class GiphyMapper{

    static mapToGif(gif: GiphyItem): Gif {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
      };
    }

    static mapToGifs(gifs: GiphyItem[]): Gif[] {
      return gifs.map((gif) => this.mapToGif(gif));
    }
 }