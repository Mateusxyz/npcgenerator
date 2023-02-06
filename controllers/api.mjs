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

    res.render('elements/card',{SeriouslyWounded, TotalHitPoints, attributes, attribute_value, body, will});
}

export function delChar(req, res) {

}