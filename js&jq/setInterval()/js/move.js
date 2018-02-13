function move( obj, attr, target, speed ){
	var startval = parseInt(getstyle(obj,attr));
	speed = startval<target?speed:-speed;
	obj.timer = setInterval(function(){
		startval += speed;
		if (startval>=target&&speed>0||startval<=target&&speed<0){
			clearInterval( obj.timer );
			startval = target;
		};
		obj.style[attr] = startval+'px';

	},13);

};
function getstyle( obj , attr ){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
};