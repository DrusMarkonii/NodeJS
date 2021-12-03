
import url from "url"


export class RoutersHandler {
    constructor(router) {
        this.routes = router.routes
    }

    handleRequest(req, res) {
        const urlParsed = url.parse(req.url, true) 
        const pathName = urlParsed.pathname.split('/')
        
        let route = this.getRout(pathName);
        

        if(!route) {
            res.statusCode = 404;
            res.end("No such route")
            return;
        }

        const cb = route[req.method] || route[''][req.method];
        cb(req, res)
    }


    getRout(pathName) {
        let route = this.routes;

        pathName.forEach((path, i) => {
            if(i) {
                route = route[path]
            }
        });

        return route;
    }
}