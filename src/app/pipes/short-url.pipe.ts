import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortUrl'
})
export class ShortUrlPipe implements PipeTransform {

  transform(link: string, args?: any): any {
    if (link) {
      const textleng = link.length;
      if (textleng > 30)
        return link.substr(0, 21) + '...' + link.substring(textleng - 9, textleng);
      return link;
    }
    return link;
  }

}