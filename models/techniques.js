const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const techniqueSchema = new Schema({
  technique: { type: String, required: true },
  description: {
    type: String,
    required: true,
    maxlength: [250, "Description cannot be more than 250 characters"],
  },
  link: { type: String, required: true },
  creator: { type: String },
  player: { type: String },
  tags: [String],
  comments: { type: [String], default: [] },
  createdAt: { type: Date, default: new Date() },
});

const Technique = mongoose.model("Technique", techniqueSchema);

module.exports =  mongoose.models.Technique || Technique
