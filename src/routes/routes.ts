import { Request, Response } from "express";
import * as express from "express";
import alarmController from "../controllers/alarmController";
import brandController from "../controllers/brandController";
import platformController from "../controllers/platformController";
import sourceController from "../controllers/sourceController";
import promoController from "../controllers/promoController";
import path = require("path");

export class Routes {
  public routes(app: any): void {
    if (process.env.NODE_ENV === "dev-prod") {
      // Serve any static files
      app.use(express.static(path.join(__dirname, "../../client/build")));
      // Handle React routing, return all requests to React app
      app.route("*").get(function(req: Request, res: Response) {
        res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
      });
    }

    app.route("/health").get(function(req: Request, res: Response) {
      res.json({ status: "ok" });
    });

    app
      .route("/api/alarm")
      .get(alarmController.getAlarms)
      .post(alarmController.addNewAlarm);

    app
      .route("/api/alarm/:alarmId")
      .get(alarmController.getAlarmWithID)
      .put(alarmController.updateAlarm)
      .delete(alarmController.deleteAlarm);

    app
      .route("/api/brand")
      .get(brandController.getBrands)
      .post(brandController.addNewBrand);

    app
      .route("/api/brand/:brandId")
      .get(brandController.getBrandWithID)
      .put(brandController.updateBrand)
      .delete(brandController.deleteBrand);

    app
      .route("/api/platform")
      .get(platformController.getPlatforms)
      .post(platformController.addNewPlatform);

    app
      .route("/api/platform/:platformId")
      .get(platformController.getPlatformWithID)
      .put(platformController.updatePlatform)
      .delete(platformController.deletePlatform);

    app
      .route("/api/source")
      .get(sourceController.getSources)
      .post(sourceController.addNewSource);

    app
      .route("/api/source/:sourceId")
      .get(sourceController.getSourceWithID)
      .put(sourceController.updateSource)
      .delete(sourceController.deleteSource);

    app
      .route("/api/promo")
      .get(promoController.getPromos)
      .post(promoController.addNewPromo);

    app
      .route("/api/promo/:promoId")
      .get(promoController.getPromoWithID)
      .put(promoController.updatePromo)
      .delete(promoController.deletePromo);
  }
}
