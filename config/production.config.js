"use strict";

module.exports = (ROOT_PATH, timeoutRatio) => {
  var config = {
    base_url: "/carrito",
    server: {
      port: 3000
    },
    services: {
      checkout_core: {
        base_url: "http://api-global-ci.garbarino.com",
        resource: "/carts",
        timeout: 2000 * timeoutRatio,
        ttl: 1
      }
    },
    database:{
      url : "mongodb://purchase-user:purch453-db-u53r@ds241493.mlab.com:41493/purchase-alarm",
      pass : "purch453-db-u53r",
      user : "purchase-user"
    }
  };
  return config;
};
