// mobile nav

$(function() {
    // open mobile menu
    $("#menu-icon").on("click", function() {
        document.getElementById("slideMenu").style.width = "100%";
        $("body").css("overflow-y", "hidden");
    });

    // close the side menu (close button)  
    $("#closebtn").on("click", function() {
        document.getElementById("slideMenu").style.width = "0px";
        $("body").css("overflow-y", "scroll");
    });

    // close the menu (after selecting a link) 
    $("link[href]").on("click", function() {
        document.getElementById("slideMenu").style.width = "0px";
        $("body").css("overflow-y", "scroll");
    });
});