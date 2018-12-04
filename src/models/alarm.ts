const mongoose = require("mongoose"); //chequear porque no levanta en ES6

const Schema = mongoose.Schema;

let calendarHour = {
  A1: { type: Number, required: "Required" },
  A2: { type: Number, required: "Required" },
  A3: { type: Number, required: "Required" },
  A4: { type: Number, required: "Required" },
  A5: { type: Number, required: "Required" },
  A6: { type: Number, required: "Required" },
  A7: { type: Number, required: "Required" },
  A8: { type: Number, required: "Required" },
  A9: { type: Number, required: "Required" },
  A10: { type: Number, required: "Required" },
  A11: { type: Number, required: "Required" },
  A12: { type: Number, required: "Required" },
  A13: { type: Number, required: "Required" },
  A14: { type: Number, required: "Required" },
  A15: { type: Number, required: "Required" },
  A16: { type: Number, required: "Required" },
  A17: { type: Number, required: "Required" },
  A18: { type: Number, required: "Required" },
  A19: { type: Number, required: "Required" },
  A20: { type: Number, required: "Required" },
  A21: { type: Number, required: "Required" },
  A22: { type: Number, required: "Required" },
  A23: { type: Number, required: "Required" },
  A24: { type: Number, required: "Required" }
};

const AlarmSchema = new Schema({
  platform: {
    type: String,
    required: "Enter a platform"
  },
  brand: {
    type: String,
    required: "Enter a brand"
  },
  promo: {
    type: String,
    required: "Enter a promo"
  },
  source: {
    type: String,
    required: "Enter a source"
  },
  chatID: {
    type: String,
    required: "Enter a chat Id"
  },
  calendar: {
    dom: {
      type: calendarHour,
      required: "Required"
    },
    lun: {
      type: calendarHour,
      required: "Required"
    },
    mar: {
      type: calendarHour,
      required: "Required"
    },
    mie: {
      type: calendarHour,
      required: "Required"
    },
    jue: {
      type: calendarHour,
      required: "Required"
    },
    vie: {
      type: calendarHour,
      required: "Required"
    },
    sab: {
      type: calendarHour,
      required: "Required"
    }
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

AlarmSchema.plugin(require("mongoose-paginate"));

export default mongoose.model("Alarm", AlarmSchema);
