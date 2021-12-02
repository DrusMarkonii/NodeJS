import { Router } from "../core/Router.js";

export const userRouter = new Router();


userRouter.get('', (req, res) => {

    res.end(`I'm users GET Router`)
})