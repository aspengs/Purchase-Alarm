const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AlarmPromoSchema = new Schema({
  promo: {
    type: String,
    required: "Enter a promo"
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

AlarmPromoSchema.plugin(require("mongoose-paginate"));

export default mongoose.model("Promo", AlarmPromoSchema);
