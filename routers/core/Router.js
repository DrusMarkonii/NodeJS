export class Router {
    routes = {}

    use(path, router) {
       this.routers[path] = router.routes
    }

    get(path, cb) {
        this.createRoute(path, 'GET', cb)
    }

    post(path, cb) {
        this.createRoute(path, 'POST', cb)
    }

    createRoute(path, method, cb) {
        this.routes[path] = this.routes[path] || {};
        this.routes[path]['GET'] = cb
    }
}