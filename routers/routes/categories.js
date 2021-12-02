
import { Router } from "../core/Router.js";

export const categoriesRouter = new Router();

categoriesRouter.get('', (req, res) => {
    console.log(`I'm categories GET router`)
    res.end()
})