// mobile nav

$(function() {
    // open mobile menu
    $("#menu").on("click", function() {
        var x = document.getElementById("slideMenu");
        var y = document.getElementById("menu");
        var b = document.getElementById("body");
        x.classList.toggle("show-menu");
        y.classList.toggle("close-button");
        b.classList.toggle("fixed-body");
    });

    // close the menu (after selecting a link)
    $(".link[href]").on("click", function() {
        document.getElementById("slideMenu").classList.remove("show-menu");
        document.getElementById("menu").classList.remove("close-button");
        document.getElementById("body").classList.remove("fixed-body");
    });
});
