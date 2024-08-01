import { Schema, model } from "mongoose";

const TicketSchema = new Schema({
    code: { type: String },
    purchase_DateTime: { type: new Date().toLocaleDateString() },
    amount: { type: Number },
    purchaser: {
        type: Schema.Types.ObjectId,
        ref: "users",
    }
})

export const TicketModel = model("tickets", TicketSchema);
