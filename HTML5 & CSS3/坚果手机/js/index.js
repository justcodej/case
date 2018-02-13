var oShow = document.getElementById('show');
var oUl = oShow.getElementsByTagName('ul')[0];
var aLi = oShow.getElementsByTagName('li');
var aImg = oShow.getElementsByTagName('img');


function view(){
	return {
		W : document.documentElement.clientWidth
	}
}
for (var i = 0; i < aLi.length; i++) {
	aLi[i].style.width = view().W/aLi.length/view().W*100+'%';
}

oUl.onmousemove = function(e){
	for (var i = 0; i < aImg.length; i++) {
		var L = oUl.offsetWidth / 7 * 5;
		var mid = aImg[i].clientLeft + aImg[i].clientWidth / 2;
	}
}
	