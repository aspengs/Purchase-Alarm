import {Request, Response} from "express";
import {CartController} from '../controllers/alarmController'

export class Routes {    

    public alarmController: CartController = new CartController();
    
    public routes(app:any): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'API routes'
            })
        })

        app.route('/api/world').post(this.alarmController.cart);

        app.route('/api/hello').get((req: Request, res: Response) => {
            res.send({ express: 'Hello From Express' });
        });

        app.route('/alarm')
        .get(this.alarmController.getAlarm)
        .post(this.alarmController.addNewAlarm);
        
        app.route('/alarm/:alarmId')
        .get(this.alarmController.getAlarmWithID)
        .put(this.alarmController.updateAlarm)
        .delete(this.alarmController.deleteAlarm)

    }
}