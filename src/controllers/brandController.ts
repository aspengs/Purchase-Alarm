import { Request, Response } from "express";
import Brand from "../models/alarmBrand";

class CartController {
  public addNewBrand(req: Request, res: Response) {
    let newBrand = new Brand(req.body);

    newBrand.save((err, brand) => {
      if (err) {
        res.send(err);
      }
      res.json(brand);
    });
  }
  public getNBrands(req: Request, res: Response) {
    Brand.find()
      .skip(req.params.skip)
      .limit(req.params.limit);
  }

  public getBrands(req: Request, res: Response) {
    if (req.query.limit && req.query.page) {
      Brand.paginate(
        {},
        { page: parseInt(req.query.page), limit: parseInt(req.query.limit) },
        (err, brand) => {
          if (err) {
            res.send(err);
          }
          res.json(brand);
        }
      );
    } else {
      Brand.find({}, (err, brand) => {
        if (err) {
          res.send(err);
        }
        res.json(brand);
      });
    }
  }

  public getBrandWithID(req: Request, res: Response) {
    Brand.findById(req.params.brandId, (err, brand) => {
      if (err) {
        res.send(err);
      }
      res.json(brand);
    });
  }
  public updateBrand(req: Request, res: Response) {
    Brand.findOneAndUpdate(
      { _id: req.params.brandId },
      req.body,
      { new: true },
      (err, brand) => {
        if (err) {
          res.send(err);
        }
        res.json(brand);
      }
    );
  }
  public deleteBrand(req: Request, res: Response) {
    Brand.deleteOne({ _id: req.params.brandId }, err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted brand!" });
    });
  }
}
export default new CartController();
