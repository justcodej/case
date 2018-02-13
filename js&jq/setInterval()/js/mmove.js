function move( obj, attr, target, speed ){
	obj.timer = setInterval(function(){
		var startval = attr=='opacity'?Math.round(getstyle(obj,attr)*100):parseInt(getstyle(obj,attr));
		speed = startval<target?speed:-speed;
		if (startval>=target&&speed>0||startval<=target&&speed<0){
			clearInterval( obj.timer );
			startval = target;
		};
		if (attr == 'opacity') {
			obj.style[attr] = (startval+speed)/100;
		}else{
			obj.style[attr] = (startval+speed)+'px';
		};
	},13);
};

function getstyle( obj , attr ){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}