$(document).ready(function(){
	$('#btn1').on('click', function(){	
		const width = $('#width').val();		
		const amount = $('#amount').val();		
		const growRate = $('#growRate').val();		
		const numCircle = $('#numCircle').val();		

		let circles = [];
		for (let i = 0; i < numCircle; i++) {
			circles.push( $("<div>", {class: "circle"}));
		}

		$("#content").append(...circles);

		$('.circle').click(function() {
			$(this).remove();
		});

		setInterval(() => $('.circle').css('width', '+='+amount), growRate);
    setInterval(() => $('.circle').css('height', '+='+amount), growRate);
	});
});