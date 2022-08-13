import { Request, Response, Application  } from 'express';

import { GameController  } from '../controllers/game.controller';

export class GameRoutes {

    public gameController: GameController = new GameController();

    public ruta(app: Application) {

        app.route("/games").get(this.gameController.index)
    }
}