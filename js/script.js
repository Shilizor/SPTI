function slowScroll (classname) {
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(classname).offset ().top - offset
    }, 500);
    return false;
}