// mobile nav

$(function() {
    // open mobile menu
    $("#menu").on("click", function() {
        var x = document.getElementById("slideMenu");
        var y = document.getElementById("menu");
        x.classList.toggle("show-sidenav");
        y.classList.toggle("closebtn");
        $("body").css("overflow-y", "hidden");
    });

    // close the side menu (close button)
    $("#closebtn").on("click", function() {
        document.getElementById("slideMenu").classList.remove("show-sidenav");
        document.getElementById("menu").classList.remove("closebtn");
        $("body").css("overflow-y", "scroll");
    });

    // close the menu (after selecting a link)
    $("link[href]").on("click", function() {
        document.getElementById("slideMenu").classList.remove("show-sidenav");
        document.getElementById("menu").classList.remove("closebtn");
        $("body").css("overflow-y", "scroll");
    });
});
