import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/routes";
import path = require('path');
import morgan = require('morgan');
import * as mongoose from "mongoose";
let config = require('../config/config');
let schedule = require('node-schedule');

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
    this.app.use(morgan('combined'))
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

  }

  private mongoSetup(): void {
    // mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
  }
  
  private startJob(): void {
    this.job = schedule.scheduleJob("*/1 * * * *", function() {
      console.log('This runs every 5 minutes');
  });
  }
}

export default new App().app;