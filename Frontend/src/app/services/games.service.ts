import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameI } from '../models/game-i';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get(`${this.API_URI}/games`);
  }
}
