/* Hamburger Menu */
$(document).ready(function(){
  $(".hamburger").click(function() {
    $(".nav-menu").show();
    $(".hamburger").hide();
    $(".ham-x").show();
  });
  $(".ham-x").on('click', () => {
    $(".nav-menu").hide();
    $(".ham-x").hide();
    $(".hamburger").show();
});
  $(".nav-menu").on('mouseleave', () => {
    $(".nav-menu").hide();
    $(".ham-x").hide();
    $(".hamburger").show();
  });
});


/* Articles, interactive lessons toggle */

$(document).ready(function(){
  $("#prefer").click(function(){
    $("[id^=show]").hide();
    $("[id^=no]").show();
    $("#quiz").hide();
    $(".quizheader").hide();
    $("#prefer").hide();
    $("#back").show();
  });  
});

$(document).ready(function(){
  $("#back").click(function(){
    $("[id^=show]").show();
    $("[id^=no]").hide();
    $("#no1").show();
    $("#quiz").show();
    $(".quizheader").show();
    $("#prefer").show();
    $("#back").hide();
  });  
});

/*Show and hide sections */


$(document).ready(function(){
  $("#hide").click(function(){
    $("#no2").hide();
  });
  $("#show").click(function(){
    $("#no2").fadeIn(1000);
    $("#break2").hide();
  });
});
$(document).ready(function(){
  $("#hide2").click(function(){
    $("#no3").hide();
  });
  $("#show2").click(function(){
    $("#no3").fadeIn(1000);
    $("#break3").hide();
  });
});
$(document).ready(function(){
  $("#hide3").click(function(){
    $("#no4").hide();
  });
  $("#show3").click(function(){
    $("#no4").fadeIn(1000);
  });
});
$(document).ready(function(){
  $("#hide4").click(function(){
    $("#no5").fadeIn(1000);
  });
  $("#show4").click(function(){
    $("#no5").fadeIn(1000);
  });
});
$(document).ready(function(){
  $("#show5").click(function(){
    $("#no6").fadeIn(1000);
  });
});


