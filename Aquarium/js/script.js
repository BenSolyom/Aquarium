// Implement the aquarium dynamics in this file



//Start animation rotations.

$("#fish1Id").animate({left: "+=100"}, 1200 , function() {movement(this)});
$("#fish2Id").animate({left: "+=100"}, 1200 , function() {movement(this)});

$(".bubbleClass").animate({left: "+=0"}, 1200 , function() {bubbleRandom(this)});





// Orange fish

$(document).click(function(event) {
	
	
	 var leftPos = event.pageX;
     var topPos = event.pageY;

	 $("#fish1Id").animate({ left: leftPos, top: topPos }, 1200); 
});

$("#fish1Id").dblclick(function() {
	
	$("#fish1Id").css("width", 300); 
	$("#fish1Id").css("height", 300); 
	
	setTimeout(function () {
    $("#fish1Id").css("width", 250);
	$("#fish1Id").css("height", 250);
	
   
    }, 3000); 	
    
	});

	// Blue fish
$("#fish2Id").hover(function() {
	
	    var height = $(window).height() - $(this).height(); 
		var width = $(window).width() - $(this).width(); 
        var leftPos = (Math.floor(Math.random() * width));
        var topPos = (Math.floor(Math.random() * height));

        $("#fish2Id").animate({ left: leftPos, top: topPos }, 1200); 
    });
	
function movement(Id) {
	
	var height = $(window).height() - $(Id).height(); 
	var width = $(window).width() - $(Id).width(); 
    var leftPos = (Math.floor(Math.random() * width));
    var topPos = (Math.floor(Math.random() * height));

    $(Id).delay(2000).animate({top: topPos}).delay(1000).animate({left: leftPos}, 1500, function(){movement(Id);});
   	
}

//bubbles

function bubbleMovement(Idref) {
	
	var height = $(window).height();
    $(Idref).fadeIn();
	$(Idref).animate({top: -100}, 5000, function(){bubbleRandom(Idref) ;}); //-100 because the height of the image is 100. This it so it appears to disappear out of the browser window.
	                                                                        //And then reentering at the buttom.
	}

function bubbleRandom(Idref) {
	var height = $(window).height();
	var buttomPos = $(window).width() - $(Idref).width(); 
	$(Idref).fadeOut();
	$(Idref).animate({top: height}).animate({left: (Math.floor(Math.random() * buttomPos))}, 2400, function(){bubbleMovement(Idref);});
	
	}
	
	$("#bubble1Id").click(function() {
	console.log("I clicked Bubble 1");
	
	$("#bubble1Id").fadeOut(); 
	var height = $(window).height();
	var buttomPos = $(window).width() - $("#bubble1Id").width();
	$("#bubble1Id").stop();
	$("#bubble1Id").fadeOut();
	$("#bubble1Id").animate({top: height}).animate({left: (Math.floor(Math.random() * buttomPos))}, 2400, function(){bubbleMovement("#bubble1Id");});
	
}); 

$("#bubble2Id").click(function() {
	console.log("I clicked bubble 2");
	$("#bubble2Id").fadeOut(); 
	var height = $(window).height();
	var buttomPos = $(window).width() - $("#bubble2Id").width(); 
	$("#bubble2Id").stop();
	$("#bubble2Id").fadeOut();
	$("#bubble2Id").animate({top: height}).animate({left: (Math.floor(Math.random() * buttomPos))}, 2400, function(){bubbleMovement("#bubble2Id");});
}); 

$("#bubble3Id").click(function() {
	console.log("I clicked bubble 3");
	$("#bubble3Id").fadeOut(); 
	var height = $(window).height();
	var buttomPos = $(window).width() - $("#bubble3Id").width(); 
	$("#bubble3Id").stop();
	$("#bubble3Id").fadeOut();
	$("#bubble3Id").animate({top: height}).animate({left: (Math.floor(Math.random() * buttomPos))}, 2400, function(){bubbleMovement("#bubble3Id");});
}); 




