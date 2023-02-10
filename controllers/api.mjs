import Character from "../models/Character.mjs";
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

    const char = attribute_value;
    char.wounded = SeriouslyWounded;
    char.hitpoints = TotalHitPoints;
    char.weapons = weaponArr;

    let charObj = await saveChar(char)

    let magazine = selectedWeapon[selectedWeaponName].magazine
    let damage = selectedWeapon[selectedWeaponName].damage  

    let skills = [
      {
        skill: "Perception",
        stat: attribute_value.INT,
        level: 0,
      },
      {
        skill: "Cryptography",
        stat: attribute_value.INT,
        level: 0,
      },
      {
        skill: "Deduction",
        stat: attribute_value.INT,
        level: 0,
      },
      {
        skill: "Brawling",
        stat: attribute_value.DEX,
        level: 0,
      },
      {
        skill: "Evasion",
        stat: attribute_value.DEX,
        level: 0, 
      },
      {
        skill: "Melee Weapon",
        stat: attribute_value.DEX,
        level: 0,
      },
      {
        skill: "Science",
        stat: attribute_value.INT,
        level: 0,
      }
    ]

    res.render('elements/card',{SeriouslyWounded, TotalHitPoints, attributes, attribute_value, body, will, selectedWeaponName, damage, magazine, skills});
    
}

export async function delChar(req, res) {

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function saveChar(char) { 
  
  if(char.weapons != undefined){
    let weapons = []
    char.weapons.forEach((el)=>{
      weapons.push(el._id)
      //console.log(charid._id)
    })

    char.weapons = weapons;

    
    /* 
    try {
      console.log(await CharacterWeapon.insertMany(weapons))
    } catch (error) {
      console.error(error)
    } */

    const charDoc = new Character(char);
    return char = await charDoc.save();
    

  }
}