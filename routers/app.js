import http from 'http';
import { RoutersHandler } from './core/RoutersHandler.js';
import { router } from './routes/main.js';
import {initDatabase} from './database/initDatabase.js';

const PORT = 5000;

const RoutesHandler = new RoutersHandler(router);

console.log(JSON.stringify(RoutesHandler))

http.createServer( (req, res) => {
    
    RoutesHandler.handleRequest(req, res)

}).listen(PORT, async () => {

    console.log(`Server was started on PORT ${PORT}....`);
    await initDatabase();

})