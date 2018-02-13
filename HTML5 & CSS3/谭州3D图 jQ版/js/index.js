

(function(){
	var $Ul = $('#box ul');
	for (var i = 0; i < 125; i++) {
		$Ul.append('<li></li>');
	}
	var $Box = $('#box');
	var $Li = $('#box ul li');
	var xS,yS,xM,yM,timer,xO,yO,xL,yL,xD,yD,nowDate=0;
	var xRo=0,yRo=0,zRo=-3000;

	$Li.each(function(i){
		this.x = i%5;
		this.y = parseInt( i/5 ) % 5;
		this.z = parseInt(i/25);

		//摆放
		$(this).css('transform','translate3d('+( Math.round(Math.random()*(3400-(-3400))+(-3400)) )+'px,'+( Math.round(Math.random()*(2000-(-1500))+(-1500)) )+'px,'+( Math.round(Math.random()*(3000-0)+0) )+'px)');
	});

	setTimeout(Grid,1000);
	
	function Grid(){
		$Li.each(function(){
			$(this).css('transform','translate3d('+( (this.x-2)*(250+120) )+'px,'+(this.y-2)*(160+250)+'px,'+(this.z-2)*1000+'px)');
		});
			//拖拽旋转、缩放
		$(document).mousedown(function(e){
			clearInterval(timer);
			$(this).off('mouseup');

			xS = e.pageX;
			yS = e.pageY;
			$(this).mousemove(function(e){
				xM = e.pageX;
				yM = e.pageY;
				xD = xM-xL;
				yD = yM-yL;
				$Box.css('transform',' translateZ('+zRo+'px) rotateX('+ (xRo-(yM-yS)*0.2) +'deg) rotateY('+ (yRo+(xM-xS)*0.2) +'deg)');
				xL = e.pageX;
				yL = e.pageY;
			});
			$(this).mouseup(function(){
				$(this).off('mousemove');
				xRo = xRo-(yM-yS)*0.15;
				yRo = yRo+(xM-xS)*0.15;
				timer = setInterval(function(){
					xD *= 0.95;
					yD *= 0.95;
					xRo -= yD*0.1;
					yRo += xD*0.1;
					if (Math.abs(xD) <= 0.1 && Math.abs(yD) <= 0.1) {
						clearInterval(timer);
					}
					$Box.css('transform','translateZ('+zRo+'px) rotateX('+ (xRo) +'deg) rotateY('+ (yRo) +'deg)');
				},13);
			});
		}).mousewheel(function(e,d){
			if (new Date - nowDate >= 500) {
				nowDate = new Date;
				var x=0,val,timerW,max = 1000;
				if (d<0) {
					if (zRo <= -8000) {
						return;
					}
					timerW = setInterval(function(){
						x+=40;
						val = zRo - x;
						if (x >= max) {
							x = max;
							clearInterval(timerW);
							val = zRo -= max;
						}
						$Box.css('transform','translateZ('+val+'px) rotateX('+ (xRo) +'deg) rotateY('+ (yRo) +'deg)');
					},13);
				}else{
					if (zRo >= 0) {
						return;
					}
					timerW = setInterval(function(){
						x+=40;
						val = zRo + x;
						if (x >= max) {
							x = max;
							clearInterval(timerW);
							val = zRo += max;
						}
						$Box.css('transform','translateZ('+val+'px) rotateX('+ (xRo) +'deg) rotateY('+ (yRo) +'deg)');
					},13);
				};
			};
				
		});
	}	
		
})();