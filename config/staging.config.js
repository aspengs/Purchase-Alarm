"use strict";

module.exports = (ROOT_PATH, timeoutRatio) => {
  var config = {
    services: {
      checkout: {
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
      url: "mongodb://mongo-staging.garba/checkout-alarms"
    }
  };
  return config;
};
