const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AlarmBrandSchema = new Schema({
  brand: {
    type: String,
    required: "Enter a brand"
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

AlarmBrandSchema.plugin(require("mongoose-paginate"));

export default mongoose.model("Brand", AlarmBrandSchema);
