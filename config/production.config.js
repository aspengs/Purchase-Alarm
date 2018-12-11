"use strict";

module.exports = (ROOT_PATH, timeoutRatio) => {
  var config = {
    services: {
      checkout: {
        monitor: {
          url: "http://api.garbarino.com/payments/monitor.php",
          api_key: "2d3d3655bf6aa36615e3ea79d605e728b8bc379a"
        }
      }
    },
    database: {
      url:
        "mongodb://purchase-user:purch453-db-u53r@ds241493.mlab.com:41493/purchase-alarm",
      pass: "purch453-db-u53r",
      user: "purchase-user"
    }
  };
  return config;
};
