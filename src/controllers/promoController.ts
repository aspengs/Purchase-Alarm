import { Request, Response } from "express";
import Promo from "../models/alarmPromo";

class CartController {
  public addNewPromo(req: Request, res: Response) {
    let newPromo = new Promo(req.body);

    newPromo.save((err: any, promo: any) => {
      if (err) {
        res.send(err);
      }
      res.json(promo);
    });
  }

  public getPromos(req: Request, res: Response) {
    if (req.query.limit && req.query.page) {
      Promo.paginate(
        {},
        { page: parseInt(req.query.page), limit: parseInt(req.query.limit) },
        (err: any, promo: any) => {
          if (err) {
            res.send(err);
          }
          res.json(promo);
        }
      );
    } else {
      Promo.find({}, (err: any, promo: any) => {
        if (err) {
          res.send(err);
        }
        res.json(promo);
      });
    }
  }

  public getPromoWithID(req: Request, res: Response) {
    Promo.findById(req.params.promoId, (err: any, promo: any) => {
      if (err) {
        res.send(err);
      }
      res.json(promo);
    });
  }
  public updatePromo(req: Request, res: Response) {
    Promo.findOneAndUpdate(
      { _id: req.params.promoId },
      req.body,
      { new: true },
      (err: any, promo: any) => {
        if (err) {
          res.send(err);
        }
        res.json(promo);
      }
    );
  }
  public deletePromo(req: Request, res: Response) {
    Promo.deleteOne({ _id: req.params.promoId }, (err: any) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted promo!" });
    });
  }
}
export default new CartController();
