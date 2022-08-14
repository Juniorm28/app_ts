import { Component, HostBinding, OnInit } from '@angular/core';
import { GameI } from 'src/app/models/game-i';
import { GamesService } from '../../../services/games.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes ='row';

  game: any  = {
    id: 0,
    title: '',
    description: '',
    image: ''
}

  edit: boolean= false;

  constructor(private gamesService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params =  this.activatedRoute.snapshot.params;
    // console.log(params);
    if(params['id']){
      this.gamesService.getGame(params['id'])
        .subscribe(
          res=>{
            console.log(res);
            this.game = res;
            this.edit = true;
          },
          err=>console.error(err)

        )
    }
  }

  saveNewGame(){
    delete this.game.createdAt;
    delete this.game.id;
    
    this.gamesService.addGame(this.game).subscribe(
      res => {
        // console.log(res)
        this.router.navigate(['/games'])
      },
      err=>console.error(err)
    )
  }

  updateGame(){
    console.log(this.game);
        this.gamesService.updateGame(this.game.id, this.game)
        .subscribe(
          res=>{
            this.router.navigate(['/games']);
            console.log(res);
          },
          err=> console.log(err)
        )
    }

}
