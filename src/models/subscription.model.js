import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    subscriber: {
      type: mongoose.Schema.Types.ObjectId, // onw who is subscribing
      ref: "User",
    },
    channel: {
      type: mongoose.Schema.Types.ObjectId, // onw to whom subscriber is subscribing
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
