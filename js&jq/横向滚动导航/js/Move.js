function move( obj,speed,target,attr,fnEnd){
		speed = parseInt(getStyle(obj,attr))<target?speed:-speed;               //判断元素的top值或者别的值小于目标值 那么给 ++ 正值反之负
		clearInterval(obj.Timer)                                          // 上来就清除定时 可以解决累加定时
		obj.Timer = setInterval( function(){                              // 这里可以不用var 回收内存 可以理解为把定时给对象的一个Timer属性
			var s = parseInt(getStyle(obj,attr))+ speed;                        // 属性累加 ++
			if (s > target && speed > 0 || s<target && speed <0)s=target   														  //判断s累加后是否大于或小于目标值并且累加基数是否为正或者负
				obj.style[attr] = s +"px";                                // 写入样式
			if (s == target){                                             // 累加后等于传入值 停止定时
				clearInterval(obj.Timer);
				fnEnd && fnEnd();										  // 判断是否有传入值，有则执行
			};
		},13 );
	};

function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
};