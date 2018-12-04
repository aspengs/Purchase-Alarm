const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AlarmSourceSchema = new Schema({
  source: {
    type: String,
    required: "Enter a source"
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

AlarmSourceSchema.plugin(require("mongoose-paginate"));

export default mongoose.model("Source", AlarmSourceSchema);
