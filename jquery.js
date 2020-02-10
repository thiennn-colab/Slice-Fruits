// click on start/reset button
	// are we playing
		// yes
			// reload page
		// no
			// show trials left 
			// change button text to reset game
			// 1. create random fruit
			// define a random step
			// 2. move fruit down one step every 30sec
				// is fruit too low?
					// no -> repeat (2)
					// yes -> any trials left?
						// yes: remove 1 heart and repeat (1)
						// no: show game over, button text -> start game.

// slice a fruit 
	// play sound 
	// explode fruit
var playing = 0;
var fruits = [
	"image/apple.png",
	"image/banana.png",
	"image/grape.png",
	"image/orange.png"
];
var score = 0;
$(document).ready(function(){
	$("#startreset").click(function(){
		if(playing == 0){
			$(this).text("Reset Game");
			$("#gameover").hide();
			playing = 1;
			score = 0;
			// show trials left
			$("#trialLeft").show();
			var trials = 3;
			
			
			
			//1 create random fruit
			$("#target").css("display","block");
			$("#target").css("left",Math.round(Math.random()*480 + 400)+"px");
			$("#target").attr("src",fruits[Math.round(Math.random()*3)]);
			// random step
			var step = Math.round(Math.random()*5+5);
			var pos = 90;
			var x = setInterval(function(){
			pos +=step;
			$("#target").css("top",pos+"px");
			if(pos >= 400){
				trials--;
				$("#trials").text(trials);
				if(trials == 0){
					clearInterval(x);
					$("#target").hide();
					$("#gameover").show();
					$("#gameoverScore").text($("#scoreVal").text());
					$("#trialLeft").hide();
					playing = 0;
					$("#startreset").text("Start Game");
				}
				else{
					pos = 90;
					$("#target").css("left",Math.round(Math.random()*480 + 400)+"px");
					$("#target").attr("src",fruits[Math.round(Math.random()*3)]);
					$("#target").css("top",pos+"px");
					step = Math.round(Math.random()*5+5);
				}
				
				
			}
			},25);
			
			$("#target").mouseover(function(){
				score++;
				$("#scoreVal").text(score);
//				document.getElementById("slidesound").play();
				$("#slidesound")[0].play();
				
				// stop fruit
				clearInterval(x);
				$("#target").hide("explode",500);
				
				// send a new fruit
				setTimeout(function(){
					$("#target").css("left",Math.round(Math.random()*480 + 400)+"px");
					$("#target").attr("src",fruits[Math.round(Math.random()*3)]);
					// random step
					step = Math.round(Math.random()*5+5);
					pos = 90;
					$("#target").css("display","block");
					x = setInterval(function(){
					pos +=step;
					$("#target").css("top",pos+"px");
					if(pos >= 400){
						trials--;
						$("#trials").text(trials);
						if(trials == 0){
							clearInterval(x);
							$("#target").hide();
							$("#gameover").show();
							$("#gameoverScore").text($("#scoreVal").text());
							$("#trialLeft").hide();
							playing = 0;
							$("#startreset").text("Start Game");
						}
						else{
							pos = 90;
							$("#target").css("left",Math.round(Math.random()*480 + 400)+"px");
							$("#target").attr("src",fruits[Math.round(Math.random()*3)]);
							$("#target").css("top",pos+"px");
							step = Math.round(Math.random()*5+5);
						}


					}
					},25);
				},500);
				
				
			});
					
		
			
			
//			playing = 0;
//			$("#startreset").text("Start Game");
//			$("#gameover").css("display","block");
//			$("#gameoverScore").text($("#scoreVal").text());
		}else{
			location.reload();
			playing = 0;
			score = 0;
		}
	});
});