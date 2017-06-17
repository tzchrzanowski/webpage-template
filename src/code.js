$(window).load(function (){
	console.log("window load works!");
});

$(document).ready(function (){
	console.log("document ready works!");

	// js 
	document.getElementById("demoJS").innerHTML = "js works!";
	// jquery
	$("#demoJQ").html("jquery works!");
	$('.scrollspy').scrollSpy();

});

// $(document).ready(function(){
//   $('.scrollspy').scrollSpy();
// });