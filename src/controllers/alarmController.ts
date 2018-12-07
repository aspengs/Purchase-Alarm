import { Request, Response } from "express";
import Alarm from "../models/alarm";

class CartController {
  public addNewAlarm(req: Request, res: Response) {
    let newAlarm = new Alarm(req.body);

    newAlarm.save((err: any, alarm: any) => {
      if (err) {
        res.send(err);
      }
      res.json({ alarm });
    });
  }

  public getAlarms(req: Request, res: Response) {
    if (req.query.limit && req.query.page) {
      Alarm.paginate(
        {},
        { page: parseInt(req.query.page), limit: parseInt(req.query.limit) },
        (err: any, alarm: any) => {
          if (err) {
            res.send(err);
          }
          res.json(alarm);
        }
      );
    } else {
      Alarm.find({}, (err: any, alarm: any) => {
        if (err) {
          res.send(err);
        }
        res.json(alarm);
      });
    }
  }

  public getAlarmWithID(req: Request, res: Response) {
    Alarm.findById(req.params.alarmId, (err: any, alarm: any) => {
      if (err) {
        res.send(err);
      }
      res.json(alarm);
    });
  }
  public updateAlarm(req: Request, res: Response) {
    Alarm.findOneAndUpdate(
      { _id: req.params.alarmId },
      req.body,
      { new: true },
      (err: any, alarm: any) => {
        if (err) {
          res.send(err);
        }
        res.json(alarm);
      }
    );
  }
  public deleteAlarm(req: Request, res: Response) {
    Alarm.deleteOne({ _id: req.params.alarmId }, (err: any) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted alarm!" });
    });
  }
}
export default new CartController();
