
function generate() {
  var gridSize = parseInt(document.getElementById("gridSize").value);

  for (i = 0; i <= gridSize; i++) {
  	var mainContainer = document.getElementById("container");
    var divGrid = document.createElement("div");
    divGrid.className = "grid";
  	mainContainer.appendChild(divGrid);
  }

  $('.grid').mouseenter(function(){
  	$(this).addClass("black");
  });
  $('.clearButton').click(function() {
  	$("div").remove('.grid');
  })  
}
