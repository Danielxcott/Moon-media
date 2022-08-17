$(".search-btn").click(function(){
    $(".input-box").toggleClass("active");
});
// $('.category-lists').slick({
//     infinite: false,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });

const nav = document.querySelector(".nav-menu"),
            toggleBtn = nav.querySelector(".toggle-btn");
            toggleBtn.addEventListener("click",()=>{
                nav.classList.toggle("open")
            })
