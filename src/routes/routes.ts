import {Request, Response} from "express";
import {Controller} from "../controllers/controller";

export class Routes {
    public controller: Controller = new Controller();

    public routes(app): void {
        // UI
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'UI endpoint'
                })
            });
        // Add new screenshot
        app.route('/screenshots')
            .post(this.controller.addScreenshot);
        app.route('/screenshots/:id')
            .get(this.controller.getScreenshot)
            .delete(this.controller.deleteScreenshot);
    }
}