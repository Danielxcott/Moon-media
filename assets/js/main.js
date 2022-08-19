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
function commentBtn(x)
{
    $(".comment-asidenav").toggleClass("active");
}

$(".comment-aside-close").click(function(){
    $(".comment-asidenav").toggleClass("active");
})
$(".close-com-btn").click(function(){
    $(".comment-asidenav").toggleClass("active");
})

function viewerBtn(x)
{
    const viewer = $("#viewers"+x);
    const close = $("#viewerClose"+x);
    viewer.toggleClass("active");
    close.addClass("active");
}

function closeReaction(x)
{
    const closeBtn = $("#viewerClose"+x);
    const viewer = $("#viewers"+x);
    viewer.toggleClass("active");
    closeBtn.removeClass("active");
}

$(document).ready(function() {
    $('#summer').summernote();
});