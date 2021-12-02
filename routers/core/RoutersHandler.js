import path from "path/posix";
import url from "url"


export class RoutersHandler {
    constructor(router) {
        this.routers = router.routers
    }

    handleRequest(req, res) {
        const urlParsed = url.parse(req.url, true) 
        const pathName = urlParsed.pathname.split('/')
        
        let route = this.routers;
        pathName.forEach((path, i) => {
            if(i) {
                route = route[path]
            }
        })
    }
}