import { Schema, model } from "mongoose";

const OpportunitySchema = new Schema(
  {
    id_op: Number,
    title: String,
    value: Number,
    createdAt: Date,
    updatedAt: Date,
    stage_id: Number,
    currency: String,
    add_time: Date,
    update_time: Date,
    active: Boolean,
    deleted: Boolean,
    status: String,
    close_time: Date,
    won_time: Date,
    first_won_time: Date,
    person_name: String,
    org_name: String,
    owner_name: String,
    cc_email: String,
  },
  {
    timestamps: true,
  }
);

export default model('Opportunity', OpportunitySchema);
