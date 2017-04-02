$(document).ready(function () {
    var carouselList = $('#carousel ul');
    
    function changeSlidesLeft() {
        carouselList.animate({'marginLeft': -600}, 1000, moveFirstSlide);
    }
    
    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first'),
            lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({'marginLeft': 0});
    }
    
    var carouselTimer = setInterval(changeSlidesLeft, 5000);
    
    //Moje dodatki
    function changeSlidesRight() {
        moveLastSlide();
        carouselList.animate({'marginLeft': 0}, 1000);
    }
    
    function moveLastSlide() {
        var firstItem = carouselList.find('li:first'),
            lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.css({'marginLeft': -600});
    }
    
    var prev = $('span.prev'),
        next = $('span.next');
    
    prev.click(function () {
        clearInterval(carouselTimer);
        changeSlidesRight();
        carouselTimer = setInterval(changeSlidesLeft, 5000);
    });
    next.click(function () {
        clearInterval(carouselTimer);
        changeSlidesLeft();
        carouselTimer = setInterval(changeSlidesLeft, 5000);
    });
    
/*    // Kontrolki - do poprawy
    var indicatorsItem = $('#indicators li'),
        carouselItem = $('#carousel li');
    
    indicatorsItem.click(function () {
        //console.log(carouselItem[$(this).index()]);
        carouselList.prepend(carouselItem[$(this).index()]);
        clearInterval(carouselTimer);
        carouselTimer = setInterval(changeSlidesLeft, 5000);
    });*/
});