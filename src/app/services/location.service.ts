import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseSchema } from '../models/baseSchema';
import { environment } from '../../environments/environment';
import { UrlJoinerService } from './url-joiner.service';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private http: HttpClient,
    private joiner: UrlJoinerService
  ) { 

  }

  getLocations(page: number = 1) : Observable<BaseSchema<Location>> {
    let params = new HttpParams().set("page", page);

    return this.http.get<BaseSchema<Location>>(environment.api.locations, {
      params: params
    })
  }

  getSingleLocation(id: number) : Observable<Location> {
    let url = `${environment.api.locations}/${id}`;

    return this.http.get<Location>(url, {});
  }

  getByUrl(url: string, params?: HttpParams) : Observable<Location> {
    return this.http.get<Location>(url, {
      params: params
    });
  }

  getManyByIds(ids: Array<number>) : Observable<Array<Location>> {
    let joined = ids.join(",");
    let url = `${environment.api.locations}/[${joined}]`;

    return this.http.get<Array<Location>>(url, {});
  }
  
  getManyByUrls(urls: Array<string>) : Observable<Array<Location>> {
    let url = this.joiner.joinUrls(urls, environment.api.locations);

    return this.http.get<Array<Location>>(url, {});
  }
}
