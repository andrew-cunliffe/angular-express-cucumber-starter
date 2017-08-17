import { Request, Response, Router } from 'express';

class DemoController {

    constructor(private router: Router) {
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/ping', this.getPing.bind(this));
        this.router.get('/version', this.getVersion.bind(this));
        this.router.get('/angular', this.getAngularLinks.bind(this));
        this.router.get('/material', this.getMaterialLinks.bind(this));
    }

    getPing(req: Request, res: Response) {
        res.send('OK');
    }

    getVersion(req: Request, res: Response) {
        res.send({ version: 'v1.0.0' });
    }

    getAngularLinks(req: Request, res: Response) {
        res.send({
            links: [
                {
                    name: 'Tutorial',
                    link: 'https://angular.io/tutorial'
                },
                {
                    name: 'CLI Documentation',
                    link: 'https://github.com/angular/angular-cli/wiki'
                },
                {
                    name: 'Angular Blog',
                    link: 'https://blog.angular.io'
                }
            ]
        });
    }

    getMaterialLinks(req: Request, res: Response) {
        res.send({
            links: [
                {
                    name: 'Flex Layout',
                    link: 'https://tburleson-layouts-demos.firebaseapp.com'
                }
            ]
        });
    }

}

export { DemoController };
