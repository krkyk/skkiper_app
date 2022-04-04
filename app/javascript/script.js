let title="javascriptが使えました";
alert(title);

$(document).ready(function(){
  $(".jquery").on("click",function(){
    $(this).css("color","red");
  });
});

$(document).ready(function(){
  $("#theTarget").skippr({
    transition:"slide",
    speed:1000,
    easing:"easeOutQuart",
    navType:"bubble",
    childrenElementType:"div",
    arrows:true,
    autoPlay:true,
    autoPlayDuration:3000,
    keybordOnAlways:true,
    hidePrevious:false
  })
})