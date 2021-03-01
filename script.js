$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    })

    // toggle menu button
    $('.menu-btn').click(function() {
        $(".directory").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    })
});