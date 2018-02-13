	function move(obj,json,speed,fn){
		clearInterval(obj.timer)
		var n = 0;
		obj.timer = setInterval(function(){
			var onOff = true;
			for(var attr in json){
				var target = json[attr]; // json是属性名，json[attr]是json里的属性值
				if (attr == 'opacity') {
					n = Math.round(getstyle(obj,'opacity')*100);
				}else{
					n = parseInt(getstyle(obj,attr));
				};
				if (n != target) {
					onOff = false;
					if (attr == 'opacity') {
						obj.style.opacity = (n+speed)/100;
						obj.style.filter = 'alpha(opacity='+(n+speed)+')';
					}else{
						obj.style[attr] = n+speed+'px';
					};
				};
			};
			if (onOff) {
				clearInterval(obj.timer)
				fn && fn.call(obj);
			};
		},13)
		
	};

	function getstyle(obj,attr){
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
	};