export function listChar(req, res) {
    res.render('elements/card');
}

export function createChar(req, res) {

}

export function editChar(req, res) {

}

export function generateChar(req, res) {
    //Cria a array attributes e randomiza os valores de cada atributo dentro dela
    let attribute_value = {}
    let attributes = [
        'INT',
        'REF',
        'DEX',
        'TECH',
        'COOL',
        'WILL',
        'LUCK',
        'MOVE',
        'BODY',
        'EMP'
    ]
    attributes.forEach(attribute => {
        attribute_value[attribute] = Math.floor(Math.random() * (5 - 1) + 2)
    });
    //Calculates the hitpoints
    let will = attribute_value.WILL
    let body = attribute_value.BODY
    let TotalHitPoints = Math.ceil(10 + (5 * Math.round((will + body) / 2)))

    //Calculates seriously wounded and death save
    let SeriouslyWounded = Math.round(TotalHitPoints / 2)

    //Get the rest from the book
    let weapons = [
        {
          pistol: [
            {
              "Medium Pistol": {
                damage: "2d6",
                magazine: 12
              }
            },
            {
              "Heavy Pistol": {
                damage: "3d6",
                magazine: 8
              }
            },
            {
              "Very Heavy Pistol": {
                damage: "4d6",
                magazine: 8
              }
            }
          ]
        },
        {
          smg: [
            {
              "SMG": {
                damage: "2d6",
                magazine: 30
              }
            },
            {
              "Heavy SMG": {
                damage: "3d6",
                magazine: 40
              }
            }
          ]
        }
      ];

    let weaponTypeRandom = Math.floor(Math.random() * weapons.length)
    let selectedWeaponType = weapons[weaponTypeRandom]
    let selectedWeaponTypeName = Object.keys(selectedWeaponType)

    let weaponRandom = Math.floor(Math.random() * selectedWeaponType[selectedWeaponTypeName].length)
    let selectedWeapon = selectedWeaponType[selectedWeaponTypeName][weaponRandom]
    let selectedWeaponName = Object.keys(selectedWeapon)

    let magazine = selectedWeapon[selectedWeaponName].magazine
    let damage = selectedWeapon[selectedWeaponName].damage  

    res.render('elements/card',{SeriouslyWounded, TotalHitPoints, attributes, attribute_value, body, will, selectedWeaponName, damage, magazine});
    
}

export function delChar(req, res) {

}