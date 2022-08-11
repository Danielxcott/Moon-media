$(".burger-nav").click(function(){
    $("aside").toggleClass("shrink");
    $("main").toggleClass("expand");
    $(".box-one").toggleClass("expand");
    $(".box-two").toggleClass("expand");
    $(".chart-wrapper").toggleClass("expand");
})
//dropbox-btn
$("#dropbox-btn").click(function(){
    $(".profile-dropbox").toggleClass("show");
});

$(".noti-group .noti-bell").click(function(){
    $(".noti-nav").toggleClass("active");
    $("body").toggleClass("hide");
})
$(".noti-close").click(function(){
    $(".noti-nav").toggleClass("active");
    $("body").toggleClass("hide");
})

//owl carousel
$('.trend-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    autoplay:true,
    touchDrag:true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        800:{
            items:2
        }
    }
})

//slick
$('.user-profile-left').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
    autoplay: true,
    autoplaySpeed: 900,
    accessibility: false,
    useTransform: false,
  });
  $('.user-profile-box').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
    autoplay: true,
    autoplaySpeed: 500,
    accessibility: false,
    useTransform: false,
  }); 

//weather
const weatherContainer = document.querySelector(".weather-container");
let apiKey = "5701276a9398a92040240a2437ce1148";
let api ;

function requestApi(city="yangon")
{
   api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
   fetchData();
}

function fetchData()
{
    fetch(api)
    .then(response=>response.json())
    .then(json=>weatherDetails(json));
}
function weatherDetails(info)
{
    console.log(info);  
    if(info.cod == "400"){
        weatherContainer.style.backgroundImage = "url('/assets/img/dwarf.gif')";
        weatherContainer.style.backgroundSize = "cover";
        weatherContainer.style.backgroundPosition = "center";
        $(".text-container").remove();
        console.warn("the weather location is not a valid city name");
    }else{
        let {description,id} = info.weather[0];
        let city = info.name;
        let country = info.sys.country;
        let {feels_like,humidity,temp} = info.main;
        let location = city+","+country;
        $(".number").text(Math.floor(temp));
        $(".weather").text(description);
        $(".location").text(location);
        $(".feel-like .temp").text(Math.floor(feels_like)+"°C");
        $(".humidity .percent").text(humidity+"%") 
        if(id == 800){
          weatherContainer.style.backgroundImage  = "url('/assets/img/Weather\ Icons/clear.svg')";
        }else if(id >=200 && id <= 232){
            weatherContainer.style.backgroundImage  = "url('/assets/img/Weather\ Icons/storm.svg')";
        }else if(id >= 300 && id <= 321){
            weatherContainer.style.backgroundImage  = "url('/assets/img/Weather\ Icons/drizzle.svg')";
        }else if(id >= 500 && id<= 531){
            weatherContainer.style.backgroundImage  = "url('/assets/img/Weather\ Icons/rain.svg')";
        }else if(id >= 600 && id<= 622){
            weatherContainer.style.backgroundImage  = "url('/assets/img/Weather\ Icons/snow.svg')";
        }else if(id >= 701 && id<= 781){
            weatherContainer.style.backgroundImage  = "url('/assets/img/Weather\ Icons/haze.svg')";
        }else if(id >= 801 && id<= 804){
            weatherContainer.style.backgroundImage  = "url('/assets/img/Weather\ Icons/cloud.svg')";
        }
    }
}

requestApi();

