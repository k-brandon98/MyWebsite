$("#sewerImg").click( function(){
  $("#sewerTxt").removeClass("hidden");
  $("#petTxt, #filtersTxt, #bankTxt").addClass("hidden");
  $("#closeButton").removeClass("hidden");
  $("#petsImg, #filtersImg, #bankImg").addClass("hidden");
  $("#gallery").addClass("row");
  $("#sewerImg").addClass("fullwidth");
  $("#sewerImg").removeClass("quarterwidth");
})

$("#petsImg").click(function(){
  $("#petTxt").removeClass("hidden");
  $("#sewerTxt, #filtersTxt, #bankTxt").addClass("hidden");
  $("#closeButton").removeClass("hidden");
  $("#sewerImg, #filtersImg, #bankImg").addClass("hidden");
  $("#gallery").addClass("row");
  $("#petsImg").addClass("fullwidth");
  $("#petsImg").removeClass("quarterwidth");
});

$("#filtersImg").click(function(){
  $("#filtersTxt").removeClass("hidden");
  $("#sewerTxt, #petTxt, #bankTxt").addClass("hidden");
  $("#closeButton").removeClass("hidden");
  $("#sewerImg, #petsImg, #bankImg").addClass("hidden");
  $("#gallery").addClass("row");
  $("#filtersImg").addClass("fullwidth");
  $("#filtersImg").removeClass("quarterwidth");
});

$("#bankImg").click(function(){
  $("#bankTxt").removeClass("hidden");
  $("#sewerTxt, #petTxt, #filtersTxt").addClass("hidden");
  $("#closeButton").removeClass("hidden");
  $("#sewerImg, #petsImg, #filtersImg").addClass("hidden");
  $("#gallery").addClass("row");
  $("#bankImg").addClass("fullwidth");
  $("#bankImg").removeClass("quarterwidth");
});

$('#closeButton').click(function(){
  $("#sewerImg, #petsImg, #filtersImg, #bankImg").removeClass("hidden");
  $("#sewerTxt, #petTxt, #filtersTxt, #bankTxt").addClass("hidden");
  $("#closeButton").addClass("hidden");
  $("#sewerImg, #petsImg, #filtersImg, #bankImg").removeClass("fullwidth");
  $("#sewerImg, #petsImg, #filtersImg, #bankImg").addClass("quarterwidth");
})
