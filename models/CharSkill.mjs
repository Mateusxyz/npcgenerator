import mongoose, { Schema } from "mongoose";

//fazer referecia para a tabela de skills
const CharSkillSchema = new Schema({
  char:{
    type: Schema.Types.ObjectId,
    ref: "Character"
  },
  skill_id: {
    type: Schema.Types.ObjectId,
    ref: "Skill"
  },
  level: {
    type: Number,
    default: 0
  }
});

export const CharSkill = mongoose.model('CharSkill', CharSkillSchema);
