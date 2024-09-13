import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseSchema } from '../models/baseSchema';
import { Episode } from '../models/episode';
import { environment } from '../../environments/environment';
import { UrlJoinerService } from './url-joiner.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(
    private http: HttpClient,
    private joiner: UrlJoinerService
  ) { 

  }

  getEpisodes(page:number = 1) : Observable<BaseSchema<Episode>> {
    let params = new HttpParams().set("page", page);

    return this.http.get<BaseSchema<Episode>>(environment.api.episodes, {
      params: params
    });
  }

  getSingleEpisode(id: number) : Observable<Episode> {
    let url = `${environment.api.episodes}/${id}`;

    return this.http.get<Episode>(url, {});
  }

  getByUrl(url: string, params?: HttpParams) : Observable<Episode> {
    return this.http.get<Episode>(url, {
      params: params
    })
  }

  getManyByIds(ids: Array<number>) : Observable<Array<Episode>> {
    let joined = ids.join(",");
    let url = `${environment.api.episodes}/[${joined}]`;

    return this.http.get<Array<Episode>>(url, {});
  }

  getManyByUrls(urls: Array<string>) : Observable<Array<Episode>> {
    let url = this.joiner.joinUrls(urls, environment.api.episodes);
    
    return this.http.get<Array<Episode>>(url, {});
  }
}
