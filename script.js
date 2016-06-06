$(document).on('click','.clearButton', function() {
	$('#container').empty();
	generate();
});


function generate() {
var squares = prompt("Number of squares? ( 0 < X < 40 )")
var width = 960;


if (squares == 0) {
	alert("Can't make 0 squares!");
} else if (squares > 40) {
	alert("Too many squares - setting to 40 squares");
	squares = 40;
};

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

};

function defaultMouse() {
  $('.square').hover(function(){
    $(this).addClass('change');
  });
};

function trailMouse() {
  $('.square').mouseenter(function(){
  	$(this).fadeTo('fast', 0.1);
  });
  $('.square').mouseleave(function(){
  	$(this).fadeTo('fast', 1);
  });
};

function fadeMouse() {
  $('.square').on('mouseenter', function() {
  var opacity = $(this).css('opacity');
  $(this).css('opacity', opacity - 0.2);
});
};

function randomColour() {
  $('.square').mouseenter(function() {
    $(this).css('background-color', randomizer());
  });
};

function randomizer() {
  var r = parseInt(Math.random() * 256);
  var g = parseInt(Math.random() * 256);
  var b = parseInt(Math.random() * 256);
  var colourPicker = "rgb" + "(" + r + "," + g + "," + b + ")";
  return colourPicker
};

