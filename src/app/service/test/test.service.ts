import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterInterface } from 'src/assets/data/Character';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  //private url = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  /* public sendGetRequest() {
     return this.http.get(this.url);
   }*/

  /*loadCharacters(): Observable<CharacterInterface[]> {
    return this.http.get<CharacterInterface[]>('https://rickandmortyapi.com/api/character/2');
  }*/

  getCharacter(id: string): Observable<CharacterInterface> {
    return this.http.get<CharacterInterface>(`https://rickandmortyapi.com/api/character/${id}`);
  }

}
