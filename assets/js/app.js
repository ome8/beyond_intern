window.onload = () => {
    try {
        // $(selector).countMe(delay,speed)
        $(".counter_box1").countMe(100, 200);
        $(".counter_box2").countMe(100, 200);
        $(".counter_box3").countMe(100, 200);
        $(".counter_box4").countMe(100, 200);
    } catch (error) {
        console.log(error);
    }

    try {
        new Filterizr('.gallery_container',{});
    } catch (error) {
        console.log(error);
    }

    try {
        $(".banner_slider").owlCarousel({
            items: 1,
            dots: true,
            nav: true,
            autoplay: true,
            animateOut: 'animate__backOutLeft',
            loop: true,
            navText: [
                "<button class=\"my_banner_nav\">prev</button>",
                "<button>next</button>",
            ],
            // margin: 20,
            // center:true,
        });
    } catch (error) {
        console.log(error)
    }
   
    try {
        $(".client_slider").owlCarousel({
            items: 2,
            dots: true,
            nav: true,
            autoplay: true,
            animateOut: 'animate__backOutLeft',
            loop: true,
            navText: [
                "<button class=\"my_banner_nav\">prev</button>",
                "<button>next</button>",
            ],
            // margin: 20,
            stagePadding: 5,
            // center:true,
        });
    } catch (error) {
        console.log(error)
    }
}



