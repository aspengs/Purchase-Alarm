import { Request, Response } from "express";
import Platform from "../models/alarmPlatform";

class CartController {
  public addNewPlatform(req: Request, res: Response) {
    let newPlatform = new Platform(req.body);

    newPlatform.save((err: any, platform: any) => {
      if (err) {
        res.send(err);
      }
      res.json(platform);
    });
  }

  public getPlatforms(req: Request, res: Response) {
    if (req.query.limit && req.query.page) {
      Platform.paginate(
        {},
        { page: parseInt(req.query.page), limit: parseInt(req.query.limit) },
        (err: any, platform: any) => {
          if (err) {
            res.send(err);
          }
          res.json(platform);
        }
      );
    } else {
      Platform.find({}, (err: any, platform: any) => {
        if (err) {
          res.send(err);
        }
        res.json(platform);
      });
    }
  }

  public getPlatformWithID(req: Request, res: Response) {
    Platform.findById(req.params.platformId, (err: any, platform: any) => {
      if (err) {
        res.send(err);
      }
      res.json(platform);
    });
  }
  public updatePlatform(req: Request, res: Response) {
    Platform.findOneAndUpdate(
      { _id: req.params.platformId },
      req.body,
      { new: true },
      (err: any, platform: any) => {
        if (err) {
          res.send(err);
        }
        res.json(platform);
      }
    );
  }
  public deletePlatform(req: Request, res: Response) {
    Platform.deleteOne({ _id: req.params.platformId }, (err: any) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted platform!" });
    });
  }
}
export default new CartController();
