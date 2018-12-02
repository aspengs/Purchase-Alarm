import { Request, Response } from "express";
import * as checkout from "../client/checkoutSDK";
import * as mongoose from "mongoose";
import { AlarmSchema } from "../models/alarm";

const Alarm = mongoose.model("Alarm", AlarmSchema);

class CartController {
  public addNewAlarm(req: Request, res: Response) {
    let newAlarm = new Alarm(req.body);

    newAlarm.save((err, alarm) => {
      if (err) {
        res.send(err);
      }
      res.json(alarm);
    });
  }
  public getAlarms(req: Request, res: Response) {
    Alarm.find({}, (err, alarm) => {
      if (err) {
        res.send(err);
      }
      console.log(alarm);
      res.json(alarm);
    });
  }
  public getAlarmWithID(req: Request, res: Response) {
    Alarm.findById(req.params.alarmId, (err, alarm) => {
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
      (err, alarm) => {
        if (err) {
          res.send(err);
        }
        res.json(alarm);
      }
    );
  }
  public deleteAlarm(req: Request, res: Response) {
    Alarm.remove({ _id: req.params.alarmId }, err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted alarm!" });
    });
  }
  public cart = (req: Request, res: Response) => {
    let op = new checkout.Option(1000, "garbarino");
    checkout
      .getCart(req.body.post, op, checkout.Include.None, false)
      .then((res: any) => res.text())
      .then((body: any) => {
        res.send(body);
      });
  };
}
export default new CartController();
