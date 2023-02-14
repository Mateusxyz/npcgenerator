import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
    name: String,
    will: Number,
    luck: Number,
    move: Number,
    body: Number,
    emp: Number,
    int: Number,
    ref: Number,
    dex: Number,
    tech: Number,
    cool: Number,
    hitpoints: Number,
    wounded: Number,
    deathsave: Number,
    weapons: [{
        type: mongoose.Types.ObjectId,
        ref: 'Weapon',
        required: false,
    }],
    skills: [{
        type: mongoose.Types.ObjectId,
        ref: 'CharSkill',
        required: false,
    }]

})

const Character = mongoose.model('Character', CharacterSchema);

export default Character;