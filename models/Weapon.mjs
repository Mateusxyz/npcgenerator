import mongoose from 'mongoose';

const WeaponSchema = new mongoose.Schema({
  weaponType: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  skill: {
    type: String,
    required: true,
  },
  singleShotDamage: {
    type: Number,
    required: true,
  },
  standard: {
    type: Boolean,
    required: true,
  },
  magazine: {
    type: Number,
    required: true,
  },
  rateOfFire: {
    type: Number,
    required: true,
  },
  handsRequired: {
    type: Number,
    required: true,
  },
  canBeConcealed: {
    type: Boolean,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  }
});

export const Weapon = mongoose.model('Weapon', WeaponSchema);
