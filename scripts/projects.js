$("#sewerImg").click( function(){
  $("#sewerTxt").removeClass("hidden");
  $("#petTxt").addClass("hidden");
  $("#filtersTxt").addClass("hidden");
  $("#bankTxt").addClass("hidden");
})

$("#petsImg").click(function(){
  $("#petTxt").removeClass("hidden");
  $("#sewerTxt, #filtersTxt, #bankTxt").addClass("hidden");
});

$("#filtersImg").click(function(){
  $("#filtersTxt").removeClass("hidden");
  $("#sewerTxt, #petTxt, #bankTxt").addClass("hidden");
});

$("#bankImg").click(function(){
  $("#bankTxt").removeClass("hidden");
  $("#sewerTxt, #petTxt, #filtersTxt").addClass("hidden");
});