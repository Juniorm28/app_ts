import { Component, HostBinding, OnInit } from '@angular/core';
import { GamesService } from '../../../services/games.service';
import { GameI } from '../../../models/game-i';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes ='row';

  games: any = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getGame();
  }

  getGame() {
    this.gamesService.getGames().subscribe(
      res => {
        this.games = res;
        // console.log(this.games)
      },
      err => console.error(err)
    );
  }

  deleteGame(id:string) {
    // console.log(id);
    this.gamesService.deleteGame(id).subscribe(
      res=> {
        console.log(res);
        this.getGame();
      }
    )
  }

}
