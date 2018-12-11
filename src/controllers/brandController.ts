import { Request, Response } from "express";
import Brand from "../models/alarmBrand";

class BrandController {
  public addNewBrand(req: Request, res: Response) {
    let newBrand = new Brand(req.body);

    newBrand.save((err: any, brand: any) => {
      if (err) {
        res.send(err);
      }
      res.json(brand);
    });
  }

  public getBrands(req: Request, res: Response) {
    if (req.query.limit && req.query.page) {
      Brand.paginate(
        {},
        { page: parseInt(req.query.page), limit: parseInt(req.query.limit) },
        (err: any, brand: any) => {
          if (err) {
            res.send(err);
          }
          res.json(brand);
        }
      );
    } else {
      Brand.find({}, (err: any, brand: any) => {
        if (err) {
          res.send(err);
        }
        res.json(brand);
      });
    }
  }

  public getBrandWithID(req: Request, res: Response) {
    Brand.findById(req.params.brandId, (err: any, brand: any) => {
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
      (err: any, brand: any) => {
        if (err) {
          res.send(err);
        }
        res.json(brand);
      }
    );
  }
  public deleteBrand(req: Request, res: Response) {
    Brand.deleteOne({ _id: req.params.brandId }, (err: any) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted brand!" });
    });
  }
}
export default new BrandController();
