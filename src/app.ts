import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/routes";
import path = require('path');
import morgan = require('morgan');
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost/db'; 

    constructor() {
        this.app = express();
        this.config();      
        this.routePrv.routes(this.app);    
        this.mongoSetup();
    }

    private config(): void{    
        this.app.use(morgan('combined'))
        this.app.set("port", process.env.PORT || 5000);
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

        if (process.env.NODE_ENV === 'production') {
          // Serve any static files
          this.app.use(express.static(path.join(__dirname, 'client/build')));
          // Handle React routing, return all requests to React app
          this.app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
          });
        }
    }
    private mongoSetup(): void{
      mongoose.Promise = global.Promise;
      mongoose.connect(this.mongoUrl);    
  }

}

export default new App().app;