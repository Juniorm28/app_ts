import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameI } from '../models/game-i';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  updateClient(id: any, game: any) {
    throw new Error('Method not implemented.');
  }

  API_URI = 'http://localhost:5000';
  game: GameI | undefined;

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(`${this.API_URI}/games`);
  }

  getGame(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  addGame(game: GameI)  {
    return this.http.post(`${this.API_URI}/games`,game);
  }

  updateGame(id: string | number, updatedGame: GameI){
    return this.http.put(`${this.API_URI}/games/${id}`,updatedGame);
  }

  deleteGame(id: string)  {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }
}
