import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = "https://swapi.dev/api/"
  constructor(private http: HttpClient) { }

  getCharacters():Observable<any>{
    return this.http.get(this.baseUrl + "people/");
  }

  getCharacterById(id: number): Observable<any>{
    return this.http.get(this.baseUrl + "people/" + id + "/");
  }

  getPlanets(): Observable<any> {
    return this.http.get(this.baseUrl + "planets/");
  }

  getPlanetById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "planets/" + id + "/");
  }

  getFilms(): Observable<any> {
    return this.http.get(this.baseUrl + "films/");
  }

  getFilmById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "films/" + id + "/");
  }

  getStarships(): Observable<any> {
    return this.http.get(this.baseUrl + "starships/");
  }

  getStarshipById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "starships/" + id + "/");
  }

  getSpecies(): Observable<any> {
    return this.http.get(this.baseUrl + "species/");
  }

  getSpecieById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "species/" + id + "/");
  }

  searchPlanets(query: string): Observable<any> {
    return this.http.get(this.baseUrl + "planets/?search=" + query);
  }

  searchCharacters(query: string): Observable<any> {
    return this.http.get(this.baseUrl + "people/?search=" + query);
  }

  searchSpecies(query: string): Observable<any> {
    return this.http.get(this.baseUrl + "species/?search=" + query);
  }

  searchStarships(query: string): Observable<any> {
    return this.http.get(this.baseUrl + "starships/?search=" + query);
  }

  searchFilms(query: string): Observable<any> {
    return this.http.get(this.baseUrl + "films/?search=" + query);
  }
  

}
