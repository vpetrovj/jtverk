$('.youplay-carousel').owlCarousel({
    loop:true,
    stagePadding: 00,
    nav:true,
    dots: false,
    navText: [
    "<img src='http://www.jtverk.is/wp-content/uploads/2019/04/arrowleft.png'>",
    "<img src='http://www.jtverk.is/wp-content/uploads/2019/04/arrowright.png'>"
  ],
    responsive:{
        0:{
            items:1
        },
        300:{
            items:2
        },
        600:{
            items:3
        },
        900:{
            items:4
        },
        1200:{
            items:5
        },
        1500:{
            items:6
        },
        1800:{
            items:7
        }
    }
});

$("#owl-mobile").owlCarousel({
	loop:true,
	navigation : true, 
	slideSpeed : 300,
	dots: false,
	items: 1,	
    singleItem: true,
});
