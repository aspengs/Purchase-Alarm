import { Request, Response } from "express";
import * as express from "express";
import alarmController from "../controllers/alarmController";
import brandController from "../controllers/brandController";
import platformController from "../controllers/platformController";
import path = require("path");

export class Routes {
  public routes(app: any): void {
    if (process.env.NODE_ENV === "production") {
      // Serve any static files
      app.use(express.static(path.join(__dirname, "../../client/build")));
      // Handle React routing, return all requests to React app
      app.route("*").get(function(req: Request, res: Response) {
        res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
      });
    }

    app
      .route("/alarm")
      .get(alarmController.getAlarms)
      .post(alarmController.addNewAlarm);

    app
      .route("/alarm/:alarmId")
      .get(alarmController.getAlarmWithID)
      .put(alarmController.updateAlarm)
      .delete(alarmController.deleteAlarm);

    app
      .route("/brand")
      .get(brandController.getBrands)
      .post(brandController.addNewBrand);

    app
      .route("/brand/:brandId")
      .get(brandController.getBrandWithID)
      .put(brandController.updateBrand)
      .delete(brandController.deleteBrand);

    app
      .route("/platform")
      .get(platformController.getPlatforms)
      .post(platformController.addNewPlatform);

    app
      .route("/platform/:platformId")
      .get(platformController.getPlatformWithID)
      .put(platformController.updatePlatform)
      .delete(platformController.deletePlatform);
  }
}
