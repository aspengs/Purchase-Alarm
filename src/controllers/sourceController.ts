import { Request, Response } from "express";
import Source from "../models/alarmSource";

class SourceController {
  public addNewSource(req: Request, res: Response) {
    let newSource = new Source(req.body);

    newSource.save((err: any, source: any) => {
      if (err) {
        res.send(err);
      }
      res.json(source);
    });
  }

  public getSources(req: Request, res: Response) {
    if (req.query.limit && req.query.page) {
      Source.paginate(
        {},
        { page: parseInt(req.query.page), limit: parseInt(req.query.limit) },
        (err: any, source: any) => {
          if (err) {
            res.send(err);
          }
          res.json(source);
        }
      );
    } else {
      Source.find({}, (err: any, source: any) => {
        if (err) {
          res.send(err);
        }
        res.json(source);
      });
    }
  }

  public getSourceWithID(req: Request, res: Response) {
    Source.findById(req.params.sourceId, (err: any, source: any) => {
      if (err) {
        res.send(err);
      }
      res.json(source);
    });
  }
  public updateSource(req: Request, res: Response) {
    Source.findOneAndUpdate(
      { _id: req.params.sourceId },
      req.body,
      { new: true },
      (err: any, source: any) => {
        if (err) {
          res.send(err);
        }
        res.json(source);
      }
    );
  }
  public deleteSource(req: Request, res: Response) {
    Source.deleteOne({ _id: req.params.sourceId }, (err: any) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted source!" });
    });
  }
}
export default new SourceController();
