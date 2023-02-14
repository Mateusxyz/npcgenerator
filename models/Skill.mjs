import mongoose, { Schema } from "mongoose";


const SkillSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  linkedattribute: {
    type: String,
    required: true
  }
});

export const Skill = mongoose.model('Skill', SkillSchema);
