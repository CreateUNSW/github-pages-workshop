// make external links to open in a new tab
$("document").ready(function() {
    $("a[href^='http://']").attr("target", "_blank");
    $("a[href^='https://']").attr("target", "_blank");
});