import {sequelize} from './database.state.js';
import  './models/index.js'

export const initDatabase = async () => {
    try {
        await sequelize.sync();
        console.log('Connect with DB....')
     } catch (e) {
         console.log('CONNECT ERROR___!!!!:', e)
     }
}