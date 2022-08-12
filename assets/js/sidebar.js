$(".burger-nav").click(function(){
    $("aside").toggleClass("shrink");
    $("main").toggleClass("expand");
})

//dropbox-btn
$("#dropbox-btn").click(function(){
    $(".profile-dropbox").toggleClass("show");
});

//sidebar
$(".noti-group .noti-bell").click(function(){
    $(".noti-nav").toggleClass("active");
    $("body").toggleClass("hide");
})

$(".noti-close").click(function(){
    $(".noti-nav").toggleClass("active");
    $("body").toggleClass("hide");
})

$(".nav-close").click(function(){
    $("aside").toggleClass("active");
    $("body").toggleClass("hide");
})

$("aside .sidebar-head #back-btn").click(function(){
    $("aside").toggleClass("active");
})
function change(){
    $("aside").toggleClass("active");
    $("body").toggleClass("hide");
}

$("#magic-wand").click(function(){
    $("#profile_img").click();
})
$("#cover-icon").click(function(){
    $("#cover_img").click();
})

$(".close-btn").click(function(){
    $(".post-tab .post-detail .close-btn").toggleClass("active");
    $(".post-tab .post-detail .all-reaction").toggleClass("active");
})
$(".like-btn").click(function(){
    $(".post-tab .post-detail .all-reaction").toggleClass("active");
    $(".post-tab .post-detail .close-btn").toggleClass("active");
})

$("#dot").click(function(){
    $(".dropbox-list .dropbox-card").toggleClass("active");
})

