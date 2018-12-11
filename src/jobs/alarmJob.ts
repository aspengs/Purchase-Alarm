import Alarm from "../models/alarm";
const fetch = require("node-fetch");
const TelegramBot = require("node-telegram-bot-api");
let schedule = require("node-schedule");
let config = require("../../config/config");

const token = config.services.telegram_bot.token;
const bot = new TelegramBot(token, { polling: true });

export let purchaseCheck1Min = schedule.scheduleJob("*/1 * * * *", function() {
  console.log("Check runs every 1 minutes");
  var now = new Date();
  var options = {
    headers: {
      apikey: config.services.checkout.monitor.api_key
    }
  };

  var alarms: any[] = [];
  Alarm.find({}, (err: any, data: any) => {
    if (err) {
      console.log(err);
    }
    alarms = data;
  });

  fetch(config.services.checkout.monitor.url, options)
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
    "No hay ventas en " +
    alarmElement.brand +
    " con el medio de pago " +
    alarmElement.promo +
    " para la plataforma " +
    alarmElement.platform +
    " desde hace al menos " +
    since +
    " minuto/s."
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
