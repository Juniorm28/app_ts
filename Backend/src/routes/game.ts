import { Request, Response, Application  } from 'express';

import { GameController  } from '../controllers/game.controller';

export class GameRoutes {

    public gameController: GameController = new GameController();

    public ruta(app: Application) {

        app.route("/games").get(this.gameController.index);
        app.route("/games/:id").get(this.gameController.getOne);
        app.route("/games/:id").put(this.gameController.update);
        app.route("/games").post(this.gameController.create);
        app.route("/games/:id").delete(this.gameController.delete);

        
    }
}