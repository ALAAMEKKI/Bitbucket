const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

//Agent Schema
const agentSchema = new mongoose.Schema(
  {
    os: {
      type: String,
      required: true,
    },
    lastKeepAlive: {
      type: Date,
      required: true,
    },
    dateAdd: {
      type: Date,
      required: true,
    },
    ip: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      default: 0,
      unique: true,
    },
    version: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "disconnected", "pending", "never_connected"],
    },
  },
  {
    timestamps: true,
  }
);

//Increment Id if needed
// agentSchema.plugin(AutoIncrement, { inc_field: "id" });

//Creating Agent Model
const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
