let schedule = require("node-schedule");

export let purchaseCheck5Mins = schedule.scheduleJob("*/5 * * * *", function() {
  console.log("This runs every 5 minutes");
});
