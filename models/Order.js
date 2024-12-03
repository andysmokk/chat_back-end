const { model, Schema } = require("mongoose");

const orderSchema = Schema(
  {},
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id;
        return ret;
      },
    },
    toObject: { virtuals: true },
  }
);

module.exports = model("order", orderSchema);
