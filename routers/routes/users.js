import { UsersController } from "../controllers/users-controller.js";
import { Router } from "../core/Router.js";

export const usersRouter = new Router();
const usersController = new UsersController();

usersRouter.get('', usersController.getUsersList.bind(usersController));
usersRouter.post('', usersController.createUser.bind(usersController))

// usersRouter.get('', (req, res) => {
//     res.end(`I'm categories GET router`)
// })