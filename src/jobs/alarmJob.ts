let schedule = require("node-schedule");
const fetch = require("node-fetch");
const TelegramBot = require("node-telegram-bot-api");

import Brand from "../models/alarmBrand";
import Promo from "../models/alarmPromo";
import Platfrom from "../models/alarmPlatform";
import Source from "../models/alarmSource";
import Alarm from "../models/alarm";

const token = "655824168:AAH78FIQFcwHzOJmP6PDXimwqpBzctoYRkw";
const bot = new TelegramBot(token, { polling: true });

export let purchaseCheck5Mins = schedule.scheduleJob("*/1 * * * *", function() {
  console.log("Check runs every 1 minutes");
  var now = new Date();
  var options = {
    headers: {
      apikey: "2d3d3655bf6aa36615e3ea79d605e728b8bc379a"
    }
  };
  var brands = {};
  Brand.find({}, (err: any, data: any) => {
    if (err) {
      console.log(err);
    }
    brands = data;
  });

  var promos = {};
  Promo.find({}, (err: any, data: any) => {
    if (err) {
      console.log(err);
    }
    promos = data;
  });

  var platforms = {};
  Platfrom.find({}, (err: any, data: any) => {
    if (err) {
      console.log(err);
    }
    platforms = data;
  });
  var sources = {};
  Source.find({}, (err: any, data: any) => {
    if (err) {
      console.log(err);
    }
    sources = data;
  });
  var alarms: any[] = [];
  Alarm.find({}, (err: any, data: any) => {
    if (err) {
      console.log(err);
    }
    alarms = data;
  });

  fetch("http://api.garbarino.com/payments/monitor.php", options)
    .then((Response: any) => Response.json())
    .then((data: any) => {
      data.forEach((transaction: any) => {
        var transactionDate = new Date(transaction.timestamp);
        transaction.minutesFromLastTransaction = Math.floor(
          (now.getTime() - transactionDate.getTime()) / 60000
        );
      });
      return data;
    })
    .then((data: any[]) => {
      alarms.forEach(alarmElement => {
        var alarmMatch = data.find(function(dataElement) {
          if (
            alarmElement.promo.toUpperCase() == dataElement.payment_id &&
            alarmElement.source.toUpperCase() == dataElement.sale_source &&
            alarmElement.platform.toUpperCase() == dataElement.sale_platform &&
            alarmElement.brand.toUpperCase() == dataElement.brand
          ) {
            if (
              getCurrentTolerance(alarmElement) <
              dataElement.minutesFromLastTransaction
            ) {
              bot.sendMessage(
                alarmElement.chatID,
                getmessage(alarmElement, dataElement.minutesFromLastTransaction)
              );
              return dataElement;
            }
          }
        });
      });
    });
});
function getmessage(alarmElement: any, since: number) {
  return (
    "[TEST] No hay ventas en " +
    alarmElement.brand +
    " con medio de pago " +
    alarmElement.promo +
    " desde hace al menos " +
    since +
    " minutos."
  );
}

function getCurrentTolerance(alarmElement: any) {
  let myDays = ["dom", "lun", "mar", "mie", "jue", "vie", "sab", "dom"];
  let now = new Date();
  var hour = now.getHours();
  return alarmElement.calendar[myDays[now.getDay()]][
    "A" + (now.getHours() + 1)
  ];
}
