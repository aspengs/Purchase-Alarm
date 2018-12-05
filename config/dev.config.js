"use strict";

module.exports = (ROOT_PATH, timeoutRatio) => {
  var config = {
    services: {
      checkout: {
        core: {
          base_url: "http://api-global-ci.garbarino.com",
          resource: "/carts",
          timeout: 2000 * timeoutRatio,
          ttl: 1
        },
        monitor: {
          url: "http://api.garbarino.com/payments/monitor.php",
          api_key: "2d3d3655bf6aa36615e3ea79d605e728b8bc379a"
        }
      },
      telegram_bot: {
        token: "655824168:AAH78FIQFcwHzOJmP6PDXimwqpBzctoYRkw"
      }
    },
    database: {
      url: "mongodb://localhost/db"
    }
  };
  return config;
};
