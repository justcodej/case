function move(obj,attr,speed,target,endFn ){
	var n = 0;
	clearInterval( obj.timer );
	speed = parseInt( getStyle( obj,attr ) )<target?speed:-speed;
	obj.timer = setInterval(function(){
		n = parseInt( getStyle( obj,attr ) ) + speed;
		if (n > target && speed > 0 || n < target && speed < 0) {
			n = target;
		}
		obj.style[attr] = n + 'px';
		if (n == target) {
			clearInterval(obj.timer);
			endFn && endFn.call(obj);
		}
	},13)
}
function getStyle( obj, attr ){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
};