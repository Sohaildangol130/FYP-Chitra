$('.nav-item--mobile-burger').click(function(){
    $('.header-nav-bar-mobile').toggleClass('header-nav-bar-mobile--display');
})

$('.notification-bell').click(function(){
    $('.nav-item--notification-box').toggleClass('display-block');
})

$('.shopping-cart').click(function(){
    $('.nav-item--checkout-box').toggleClass('display-block');
})

$('.profile-btn').click(function(){
    $('.nav-item--profile-box').toggleClass('display-block');
})

const display_checkout_items = () => {
    $.ajax({
        type: "POST",
        url: "/checkout/show",
        data: {'items': items},
        datatype: 'json',
        success: (data) => {
            if(items.includes($(".post__buy").data("id"))){
                $('.post__buy p').text("Added to cart!!");
            }
            $('.nav-item--checkout-box__container__all-checkout-items').empty();
            $.each(data, (key, value)=>{
                value.forEach(element => {
                    $('.nav-item--checkout-box__container__all-checkout-items').prepend(
                        "<div class='nav-item--checkout-box__container__all-checkout-items--checkout-item col-lg-12'><div class='row align-items-center'><div class='col-4'><img class='checkout-item--photo' src='../media/"+element.img_url+"'></div><div class='col-8'><h6 class='checkout-item--name'>"+element.post_title+"</h6><p class='checkout-item--price'>Rs "+element.price+"</p></div></div></div>" 
                    );
                });
            })
            
        }
    })
}

let items = Cookies.get("items") == undefined ? []:JSON.parse(Cookies.get("items"));

if(items.length > 0){
    $('.checkout--total-items-number').removeClass('display-none');
    $('.checkout--total-items-number p').text(items.length);
}

display_checkout_items();

// var csrftoken = $.cookie('csrftoken');

// function csrfSafeMethod(method) {
//     // these HTTP methods do not require CSRF protection
//     return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
// }

// $.ajaxSetup({
//     beforeSend: function(xhr, settings) {
//         if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
//             xhr.setRequestHeader("X-CSRFToken", csrftoken);
//         }
//     }
// });

$(".post__buy").on('click',(e)=>{
    if ($(".post__buy").data("id")){
        e.preventDefault(); 
        if (!items.includes($(".post__buy").data("id"))){
            items.push($(".post__buy").data("id"));
            Cookies.set("items", items)
            $('.checkout--total-items-number').removeClass('display-none');
            $('.checkout--total-items-number p').text(items.length);
        }

        display_checkout_items();
        $('.post__buy p').text("Added to cart!!")
        }
})

// nav-buttons working only one at a time

// $('.nav-item').click(function(){
//     var a = $(".nav-item");
//     for (var i=0; i<a.length; i++){  
//         // console.log(a[i].getAttribute("data-click"));  
//         a[i].setAttribute("data-click","false");
//         // console.log(a[i].getAttribute("data-click"));  
//     }
//     $(this).attr("data-click","true");
//      console.log($(this).attr("data-click"));  
//     for (var i = 0; i<a.length; i++){
//         if (a[i].getAttribute("data-click")==="true"){
//             console.log($(this).parent().find('.nav-box'));
//             var c = $(this).parent().find('.nav-box');
//             $(c).addClass('display-block');
//         }
//         else{  
//             $(this).parent().find('.nav-box').removeClass('display-block');
//         }
//     }
// })

// checking if there is any checkout items

// add_checkout_items();
// view_checkout_items();

// var checkout_arr = {};
// var id = 0;
// $(".post__buy").click(function(){
//     id++;
//     checkout_item_index = "item-"+id;
//     var post_name = $('.post-name').text();
//     var post_price = $('.post__price').text();
//     var post_image = $('.image').attr("src");

//     var single_item = {
//                 post_name: post_name,
//                 post_price: post_price,
//                 post_image: post_image
//                 }

//     checkout_arr[checkout_item_index] = single_item;    
//     localStorage.setItem("checkout_items", JSON.stringify(checkout_arr));    

//     $('.checkout-box__container').prepend( 
//         "<div class='nav-item--checkout-box__container__all-checkout-items--checkout-item col-lg-12'><div class='row align-items-center'><div class='col-4'><img class='checkout-item--photo' src='"+post_image+"'></div><div class='col-8'><h6 class='checkout-item--name'>"+post_name+"</h6><p class='checkout-item--price'>"+post_price+"</p></div></div></div>" 
//     );
//     add_checkout_items();
// })

// function add_checkout_items(){
//     if (localStorage.getItem("checkout_items") != null){
//         var checkout_item_length = Object.keys(JSON.parse(localStorage.getItem("checkout_items"))).length;
//         if (checkout_item_length == 0){
//             $('.checkout--total-items-number').addClass("display-none");
//         }else{
//             $('.checkout--total-items-number').removeClass("display-none");
//             $('.checkout--total-items-number p').text(checkout_item_length);
//         }    
//     } else{
//         $('.checkout--total-items-number').addClass("display-none");
//     }
// }

// function view_checkout_items(){
//     if (localStorage.getItem("checkout_items") != null){
//         var checkout_item = Object.keys(JSON.parse(localStorage.getItem("checkout_items")));

//         for (let i = 1; i < 4; i++){
//             var items = checkout_item[checkout_item.length-i];
//             var main = JSON.parse(localStorage.getItem("checkout_items"))[items];
            

//             if (items != undefined){
//                 $('.checkout-box__container').prepend( 
//                     "<div class='nav-item--checkout-box__container__all-checkout-items--checkout-item col-lg-12'><div class='row align-items-center'><div class='col-4'><img class='checkout-item--photo' src='"+main["post_image"]+"'></div><div class='col-8'><h6 class='checkout-item--name'>"+main["post_name"]+"</h6><p class='checkout-item--price'>"+main["post_price"]+"</p></div></div></div>" 
//                 );
//             }
//         }
        
//     }
// }



