import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        customerName: { type: String, required: true },
        contactInfo: { type: String },
        productType: { type: String, required: true },
        quantity: { type: Number, required: true },
        size: { type: String, enum: ["Color", "Black"], default: "Black" }, //finishing size
        color: { type: String }, //contain color pages
        paperType: { type: String }, // add paper types
        finishing: { tupe: String }, // add cover options and other
        orderStatus: {
            type: String,
            enum: ["Pending", "Print", "Bind", "Trim", "Edge", "HCover", "Pack", "Complite", "Delivered"],
            default: "Pending"
        },
        notes: { type: String },
        dueDate: { type: Date },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;