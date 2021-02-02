window.onscroll = function () {
    myFunction()
};

var header = document.getElementById("header-adsigma");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > (sticky + 75)) {
        header.classList.add("stricky-fixed");
        header.classList.add("stricked-menu");
    } else {
        header.classList.remove("stricky-fixed");
        header.classList.remove("stricked-menu");
    }
}
