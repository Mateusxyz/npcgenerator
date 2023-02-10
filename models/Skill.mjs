import mongoose, { Schema } from "mongoose";


const SkillSchema = new Schema({
  skill: {
    type: String,
    required: true
  },
  stat: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    default: 0
  }
});

export const Skill = mongoose.model('Skill', SkillSchema);
