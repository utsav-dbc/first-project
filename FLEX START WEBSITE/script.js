
//---------TAB IN CODE----------------//

function myBlog(evt, blogs) {
    let tabContent = document.getElementsByClassName("tabcontent");

   for(let i = 0; i<tabContent.length; i++){
        tabContent[i].style.display = "none";
   };
   
   let button = document.getElementsByClassName("tabbutton");
   
   for(let i = 0; i < button.length; i++){
       button[i].className = button[i].className.replace("active","");
    }
    
    document.getElementById(blogs).style.display = "block";
    evt.currentTarget.className += " active";
};

    //---------CLIENT SLIDER CODE--------------------//

$(document).ready(function(){
    $(document).ready(function(){
        $('.customer-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed:1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            }, { 
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }]
        });
    });
})

    //-----TESTIMONIAL SLIDER CODE-------//

$(document).ready(function(){
    $(document).ready(function(){
        $('.testimonial_slider').slick({
            slidesToShow:3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed:5000,
            arrows:false,
            dots:false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            }, { 
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }]
        });
    });
})

    //-------PORTFOLIO FILTER CODE----------//

$(document).ready(function(){

    $(".portfolio-btn").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.all').show('1000');
        }
        else
        {
            //$('.filter[filter-item="'+value+'"]').removeClass('hidden');
            // $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".all").not('.'+value).hide('3000');
            $('.all').filter('.'+value).show('3000');
        }
    });

    if ($(".portfolio-btn").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
});