import { Controller } from "../core/Controller.js";
import { UsersService } from "../service/users-service.js";
import url from "url";


export class UsersController extends Controller {

    constructor() {
        const userService = new UsersService();
        super(userService);
    }

    getUsersList(req, res) {
        const parsedUrl = url.parse(req.url, true);
        const age = parsedUrl.query.age;

        const usersList = this.service.getUsersList(age);

        res.end(usersList)
    }
}