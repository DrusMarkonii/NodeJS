import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('development', 'postgres', '298518422', {
    host: 'localhost',
    dialect: 'postgres',
});

