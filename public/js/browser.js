$(document).ready(function () {
    $(document).on('click','.dice', function () {
        let thisDice = $(this).data().roll 
        let rolls = thisDice.split('d')
        function rolld6() {
            let total = 0;
            for (let i = 0; i < rolls[0]; i++) {
              total += Math.floor(Math.random() * 6) + 1;
            }
            console.log(total);
          }
          rolld6()
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