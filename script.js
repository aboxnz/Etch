
function generate() {
  var squares = prompt("Number of squares? ( 0 < X < 120 )")
  var mainContainer = document.getElementById("container");
  var width = 960;
  var size = width / squares;



  for (i = 0; i < squares; i++) {
  	$('#container').append("<div class='row'>");
  	for (j = 0; j < squares; j++) {
	  $('#container').append("<div class='square'></div>");
  	};
  	$('#container').append("</div>");
  };

  $('.square').css("width", size);
  $('.square').css("height", size);


  $('.square').hover(function(){
    $(this).addClass("black");
  });
  $('.clearButton').click(function() {
    $("div").remove('.square');
  })
}
