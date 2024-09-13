import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseSchema } from '../models/baseSchema';
import { Character } from '../models/character';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { 

  }

  getCharacters(page: number = 1) : Observable<BaseSchema<Character>> {
    const params = new HttpParams().set("page", page);

    return this.http.get<BaseSchema<Character>>(environment.api.characters, {
      params: params
    });
  }

  getSingleCharacter(id: number) : Observable<Character> {
    const url = `${environment.api.characters}/${id}`;

    return this.http.get<Character>(url, {});
  }

  getByUrl(url: string) : Observable<Character> {
    return this.http.get<Character>(url, {});
  }
}
