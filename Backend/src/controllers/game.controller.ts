import {Request, Response } from 'express';

import { Game } from '../models/Game';

export class GameController {

 async index(req: Request, res: Response){

    let games:Array<Game>;
    try{
        games = await Game.findAll();
        res.json(games);
    } catch(error){
        (err: Error) => res.status(500).json(err)
    }
}
}