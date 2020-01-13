$("#contact-btn").on("click", function () {
    $("#contact").css({ "display": "block" })
});

$(".div")
    .mouseover(function () {
        $(".overlay", this).css({ "visibility": "visible" })

        $(this).stop().animate({
            opacity: 1
        }, 300);
    })
    .mouseout(function () {
        $(".overlay", this).css({ "visibility": "hidden" })
    });


