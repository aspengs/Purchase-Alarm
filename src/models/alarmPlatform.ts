const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AlarmPlatformSchema = new Schema({
  platform: {
    type: String,
    required: "Enter a platform"
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

AlarmPlatformSchema.plugin(require("mongoose-paginate"));

export default mongoose.model("Platform", AlarmPlatformSchema);
