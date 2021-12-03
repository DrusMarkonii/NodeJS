import { Router } from "../core/Router.js";
import { categoriesRouter } from "./categories.js";

const goods = {
    item1: '123234',
    item2: '4321',
}

export const goodsRouter = new Router();

goodsRouter.use('categories', categoriesRouter)


goodsRouter.get('', (req, res) => {

    let json = JSON.stringify(goods)
    res.end(json)
})

