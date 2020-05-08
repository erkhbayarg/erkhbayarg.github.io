$(document).ready(function(){
	var started = false;
	var win = false;

	function lose() {
		if (started) {
			win = false;
			$(".boundary").addClass('youlose');
			$("#status").text("You lose");
		}
		
	}

	$("#start").click(function(){
		started = true;
		win = true;
		$(".boundary").removeClass("youlose");
		$(".boundary").removeClass("youwin");
		$("#status").text("Game Started");
	});

	$("#end").mouseenter(function(){		
		if (started && win) {
			$("#status").text("You win");
			$(".boundary").addClass('youwin');
		}
		started = false;
	})

	$(".boundary").hover(lose);
	$("#maze").mouseleave(lose);

});