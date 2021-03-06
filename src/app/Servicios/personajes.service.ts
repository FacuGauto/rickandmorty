import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'https://rickandmortyapi.com/api';
  }

  getAll(page = 1): Promise<any>{
    return this.http.get(`${this.baseUrl}/character?page=${page}`).toPromise();
  }

  getMessage(page  = 1) {
    return this.http.get(`${this.baseUrl}/character?page=${page}`);
  }
}
