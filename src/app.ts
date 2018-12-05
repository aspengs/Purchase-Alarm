import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/routes";
import path = require("path");
import morgan = require("morgan");
import * as mongoose from "mongoose";
import { purchaseCheck1Min } from "./jobs/alarmJob";
let config = require("../config/config");

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  public mongoUrl: string = config.database.url;
  public job: any;

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
    this.startJob();
  }

  private config(): void {
    this.app.set("port", process.env.PORT || 5000);
    //log all requests
    this.app.use(morgan("common"));
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    // mongoose.Promise = global.Promise;
    mongoose.connect(
      this.mongoUrl,
      { useNewUrlParser: true }
    );
  }

  private startJob(): void {
    this.job = purchaseCheck1Min;
  }
}

export default new App().app;
