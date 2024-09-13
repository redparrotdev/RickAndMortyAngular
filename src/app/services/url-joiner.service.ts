import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlJoinerService {

  constructor() { }

  joinUrls(urls: Array<string>, base: string) : string {
    let ids = urls.map(e => {
      let tokens = e.split("/");
      return tokens[tokens.length - 1];
    })

    let joined = ids.join(",");

    return `${base}/[${joined}]`;
  }
}
