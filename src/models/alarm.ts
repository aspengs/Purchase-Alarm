const mongoose = require("mongoose"); //chequear porque no levanta en ES6

const Schema = mongoose.Schema;

let calendarHour = {
  A1: { type: Number },
  A2: { type: Number },
  A3: { type: Number },
  A4: { type: Number },
  A5: { type: Number },
  A6: { type: Number },
  A7: { type: Number },
  A8: { type: Number },
  A9: { type: Number },
  A10: { type: Number },
  A11: { type: Number },
  A12: { type: Number },
  A13: { type: Number },
  A14: { type: Number },
  A15: { type: Number },
  A16: { type: Number },
  A17: { type: Number },
  A18: { type: Number },
  A19: { type: Number },
  A20: { type: Number },
  A21: { type: Number },
  A22: { type: Number },
  A23: { type: Number },
  A24: { type: Number }
};

const AlarmSchema = new Schema({
  platform: {
    type: String,
    required: "Enter a promo"
  },
  brand: {
    type: String
  },
  promo: {
    type: String
  },
  source: {
    type: String
  },
  calendar: {
    dom: {
      type: calendarHour
    },
    lun: {
      type: calendarHour
    },
    mar: {
      type: calendarHour
    },
    mie: {
      type: calendarHour
    },
    jue: {
      type: calendarHour
    },
    vie: {
      type: calendarHour
    },
    sab: {
      type: calendarHour
    }
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

AlarmSchema.plugin(require("mongoose-paginate"));

export default mongoose.model("Alarm", AlarmSchema);
