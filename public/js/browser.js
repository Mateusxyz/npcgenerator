$(document).ready(function () {
    $(document).on('click','.dice', function () {
        let thisDice = $(this).data().roll 
        let rolls = thisDice.split('d')
        function roll() {
            let values = []
            for (let i = 0; i < rolls[0]; i++) {
              values.push(Math.floor(Math.random() * rolls[1]) + 1);
            }
            console.log(values,values.reduce((partialSum, a) => partialSum + a, 0))
            let mappedValues = values.map(value => value === 6 ? "six" : value);
            if (mappedValues.filter(value => value === "six").length >= 2) {
                console.log("Critical Wound");
            }
          } 
          roll()
    })

    $(document).on('click','.skills-item', function () {
        let thisDice = $(this).data().roll 
        let thisBonus = $(this).data().bonus
        let rolls = thisDice.split('d')
        let bonus = thisBonus.split('+').map(function(num) {
            return parseInt(num, 10)});

        function roll() {
            let total = 0;
            for (let i = 0; i < rolls[0]; i++) {
              total += Math.floor(Math.random() * rolls[1]) + 1;
            }
            console.log(total+bonus[0]+bonus[1])
          }
          
          roll()
    })

    var origin   = window.location.origin;
    console.log(origin)
    $("#generate").click(function () {
        $.ajax({
            type: "get",
            url: origin+"/api/generate-char",
            success: function (response) {
                console.log("success")
                console.log(response)
                $(".cards-container").append(response);
            },
            error: function (response) {
                console.log("error")
            }
        }); 
        
    });
});