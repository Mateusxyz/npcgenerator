import mongoose from 'mongoose';

const ArmorSchema = new mongoose.Schema({
  armorType: {
    type: String,
    required: true,
  },
  armorDescription: {
    type: String,
    required: true,
  },
  damageStoppingPower: {
    type: Number,
    required: true,
  },
  armorPenalty: {
    type: Number,
    min: 0,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
});

const Armor = mongoose.model('Armor', ArmorSchema);

export default Armor;
