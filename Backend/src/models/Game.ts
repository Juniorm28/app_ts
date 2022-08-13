//import { Model, DataTypes } from 'sequelize'
import { database } from '../database/db';
const { Model, DataTypes } = require ('sequelize');

export class Game extends Model {
    public title!:  string;
    public description!:  string;
    public image!:  string;
}

interface GameI {
    title:  string;
    description:  string;
    image:  string;
}

Game.init(
    {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    },
    {
        tableName: "games",
        sequelize: database,
        timestamp: true
    } 
);