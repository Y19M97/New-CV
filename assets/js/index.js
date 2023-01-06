

// // console.log($('#me img').offset());
// var imgOffset =$('#me img').offset().top;

// $(window).scroll(function(){
//     // console.log($(window).scrollTop());
//     var widowScroll =$(window).scrollTop()
//     $('#scrollBtn').click(function(){
//         widowScroll=0
//     })
//     if(widowScroll>imgOffset){
//         $('#x').css('backgroundColor' , '#2B3A55')
        
        
//     }
//     else if(widowScroll ==0){
        
//         $('#x').css('backgroundColor' , 'transparent')
        
//     }
// })



// -----------------------
$(document).ready(function(){
    $('.loading').fadeOut(1000,function(){
        $('.isLoading').slideUp(1000,function(){
            $('.isLoading').remove()
            $('body').css('overflow','auto')
            $('#me').slideDown(1000,function(){
                $('#me .col-md-6').show(1000,function(){
                    $('#me .col-md-4').slideDown(1000,function(){
                        $('.navbar').show(1000)
                        $('.down').show(1000)
                    })
                })
            })
            
            
            
        })
    })
})



let scrollBtn = document.getElementById('scrollBtn');
let imgSection= document.querySelector('.details h1') .offsetTop
let navbar = document.querySelector('.navbar')
let windowScrollY





window.addEventListener('scroll',function(){
    windowScrollY= window.scrollY;
    
    if(windowScrollY> imgSection){
        scrollBtn.classList.remove(`d-none`)
    }
    else if(windowScrollY==0)
    {
        scrollBtn.classList.add(`d-none`)
        // navbar.style.backgroundColor = `transparent`
        // navbar.classList.add('d-flex')
    }
})


let btnScroll = ()=>{
    window.scrollTo(0,window.scrollY==0)
}


scrollBtn.addEventListener('click',btnScroll )


// ------------------------

let aboutOffset = $('.about-me').offset().top
let expereinceOffset = $('#experience').offset().top
let companiesOffset = $('#companies').offset().top
// let expereinceOffset = $('#experience').offset().top


$(window).scroll(function(){
    let widowScroll =$(window).scrollTop()
    console.log(widowScroll);
    if (widowScroll >aboutOffset -100 ){
        // console.log('hello');
        $('.about-me h3').fadeIn(1000,function(){
            $('.about-me p').slideDown(1000)
        })
    }
    if(widowScroll >expereinceOffset ){    
        $('.up').slideDown(1000,function(){
            $('.Expereince').slideDown(1000,function(){
                $('.Expereince-caption h3').fadeIn(1000,function(){
                    $('.Expereince .skills').fadeIn(1000,function(){
                        $('.Expereince .experience').fadeIn(1000 ,function(){
                            $('#companies').show(1000,function(){
                                $('.companies h3').show(1000,function(){
                                    $('.companies .company-image').slideDown(1000,function(){
                                        $('.contancts').slideDown(1000,function(){
                                            $('.contacts h3').show(1000,function(){
                                                $('.contacts .contact').show(1000)
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
            
        })    
       
    }
    if(widowScroll > companiesOffset){
            
        
    }
})