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

async create (req: Request, res: Response){

    let games:Array<Game>;
    try{
        games = await Game.create(req.body);
        res.status(201).send({message:'Juego creado de forma satisfactoria'})
    } catch(error){
        (err: Error) => res.status(500).json(err)
    }
}

async update(req: Request, res: Response) {
    try {

        const games = await Game.findByPk(req.params.id);

        //validar si existe
        if (!games) {
            return res.status(404).send('El juego que intenta altualizar no existe');
        }
        //actualizar usuario
        await Game.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        //respuesta
        res.status(200).send({message:'El juego ha sido modificado'});

        //capturamos errores
    } catch (e) {
        res.status(500).send('error interno, intente mas tarde');
    }
};


async delete(req: Request, res: Response){
    try {

        const games = await Game.findByPk(req.params.id);
        if (!games) {
            return res.status(404).send({ error: 'El juego que desea eliminar no existe' });
        }
        await Game.destroy({
            where: {
                id: games.id
            }
        })
        res.send({ message: 'Juego Borrado' });

    } catch (e) {
        res.status(500).send();

    }
};
}