import Character from "../models/Character.mjs";
import { CharSkill } from "../models/CharSkill.mjs";
import { Skill } from "../models/Skill.mjs";
import { Weapon } from "../models/Weapon.mjs";

export async function listChar(req, res) {
   const char = await Character.find().populate("weapons");
   res.send(char)
}

export async function createChar(req, res) {

}

export async function editChar(req, res) {

}

export async function generateChar(req, res) {
    //Cria a array attributes e randomiza os valores de cada atributo dentro dela
    let attribute_value = {}
    let attributes = [
        'int',
        'ref',
        'dex',
        'tech',
        'cool',
        'will',
        'luck',
        'move',
        'body',
        'emp'
    ]
    attributes.forEach(attribute => {
        attribute_value[attribute] = Math.floor(Math.random() * (5 - 1) + 2)
    });
    //Calculates the hitpoints
    let will = attribute_value.will
    let body = attribute_value.body
    let TotalHitPoints = Math.ceil(10 + (5 * Math.round((will + body) / 2)))

    //Calculates seriously wounded and death save
    let SeriouslyWounded = Math.round(TotalHitPoints / 2)

    //Read the whole weapon collection
    let weapons = await Weapon.find();
    let weaponAmount = getRandomInt(1, 3);
    let weaponArr = []
      
    for (let i = 0; i < weaponAmount; i++) {
      let wIndex = getRandomInt(0, weaponAmount);
      if (wIndex == 0) {
        continue;
      }
      weaponArr.push(weapons[wIndex]);
    }

    //Read the whole armor

    const char = attribute_value;
    char.wounded = SeriouslyWounded;
    char.hitpoints = TotalHitPoints;
    char.weapons = weaponArr;
    char.skills = await Skill.find()
    await(char.skills).map(element => {
      element.skill_id = element._id
      delete element._id
    });

    let charObj = await saveChar(char)  


    res.send(charObj)
    //res.render('elements/card',{char});
    
}

export async function delChar(req, res) {

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function saveChar(char) { 
  const charDoc = new Character(char);
  const returnChar = await charDoc.save();
  if (char.skills != undefined) {
    char.skills.forEach(element => {
      element.char = returnChar._id
      
    });

    console.log(char.skills)


    try {
      await CharSkill.create(char.skills)
      
    } catch (error) {
      console.error(error)
    }
    //
  }

  return returnChar
}