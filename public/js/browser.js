$(document).ready(function () {
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