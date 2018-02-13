$(function(){

	var $nav = $('#nav');

	// 初始化 生成导航图片
	for (var i = 0; i < 19; i++) {
		$nav.append('<div class="heart img'+(i+1)+'"></div>');
		var $heart = $('#nav .heart');
		$heart.eq(i).append('<ul><li><img src="" alt=""></li><li><img src="" alt=""></li><li><img src="" alt=""></li></ul>');
		$('')
		var $ul = $nav.find('.heart').eq(i).find('ul');
		$ul.find('li img').each(function(j){
			$ul.find('li img').eq(j).attr({
				src : 'images/nav/'+(i+1 +'-'+ j)+'.jpg'
			}).parent().css({
				width : $heart.eq(i).width()+'px',
				height : $heart.eq(i).height()+'px'
			});
		})
		$ul.css({
			width : '500%',
			left : '-100%'
		});
	};

	var $heart = $('#nav .heart');
	var $ul = $('#nav .heart ul');
	var $heartBtn = $('#nav .btn');
	var $bRight = $('#nav .right');
	var $list = $('#team .list');
	var $listUl = $('#team .list ul');
	var $listLi = $('#team .list ul li');
	var $btn = $('#team .btn');
	var $caseImg = $('#case img');
	var $border = $('#team .list .border');
	var $photo = $('#detailed .photo');
	var $subNavLeft = $('#subNav .s-left>div');
	var $previous = $('#subNav .s-right>ul .previous');
	var $next = $('#subNav .s-right>ul .next');
	var $nextLi = $('#subNav .s-right>ul li');
	var $subNavDiv = $('#subNav .s-right .s-r-text');
	var $subNavText = $('#subNav .s-right .s-r-text p');
	var $teacher = $('#detailed .text .teacher');
	var $detailed = $('#detailed .text').children();
	var nowTime = 0;
	var time = 0;
	var arrText1 = [];
	var arrText2 = [];
	var index = 0;

	$ul.each(function(i){
		$ul.eq(i).prepend('<li><img src="images/nav/'+(i+1+"-"+2)+'.jpg" alt="" /></li>');
		$ul.eq(i).append('<li><img src="images/nav/'+(i+1+"-"+0)+'.jpg" alt="" /></li>');
		$ul.eq(i).children().css({
			width : $(this).parent().width()+'px',
			height : $(this).parent().height()+'px'
		});
	})

		

	for (var i = 0; i < $subNavDiv.length; i++) {
		arrText1.push( $subNavDiv[i].getElementsByTagName('p')[0].innerHTML );
		arrText2.push( $subNavDiv[i].getElementsByTagName('p')[1].innerHTML )
	}
	// 心形导航
	$heartBtn.click(function(){
		if (time - new Date <= -500) {
			time = new Date;
			if ($(this).index()) {
				$ul.each(function(i){
					$ul.eq(i).stop().animate({
						left : $ul.eq(i).position().left-$heart.eq(i).width()+'px'
					},function(){
						if( $(this).position().left <= -$heart.eq(i).width()*4 ){
							$ul.eq(i).css({
								left : -$heart.eq(i).width()+'px'
							});
						};
					});
				});
			}else{
				$ul.each(function(i){
					$ul.eq(i).stop().animate({
						left : $ul.eq(i).position().left+$heart.eq(i).width()+'px'
					},function(){
						if( $(this).position().left >= 0 ){
							$ul.eq(i).css({
								left : -$heart.eq(i).width()*3+'px'
							});
						};
					});
				});
			};
		};
	});

	// 会员信息
	$subNavLeft.click(function(){
		$subNavLeft.css({borderColor : '#9169ff'});
		cText();
		$(this).css({borderColor : '#fff'});
	});
	function cText(){
		$subNavText.stop().fadeOut('fast',function(){
			$subNavDiv.each(function(i){
				$subNavDiv.eq(i).find('.p1').html( arrText1[parseInt( Math.random()*6)] );
				$subNavDiv.eq(i).find('.p2').html( arrText2[parseInt( Math.random()*6)] );
			});
			$subNavText.stop().fadeIn('fast');
		});
	}
	function cTextNext(){
		$subNavText.html('');
		$subNavDiv.each(function(i){
			$subNavDiv.eq(i).find('.p1').html( arrText1[parseInt( Math.random()*6)] );
			$subNavDiv.eq(i).find('.p2').html( arrText2[parseInt( Math.random()*6)] );
		});
	}

	//下一页
	$next.click(function(){
		cTextNext()
		index++;
		index%=$nextLi.length;
		for (var i = 0; i < $nextLi.length; i++) $nextLi[i].style.borderColor = '#ddc5ff';
		$nextLi.eq(index).css({borderColor : '#fff'})
	}).hover(function(){
		$(this).css({borderColor : '#fff'})
	},function(){
		$(this)
		.css({borderColor : '#ddc5ff'})
	})

	// 上一页
	$previous.click(function(){
		cTextNext()
		index--;
		if (index < 0) index = $nextLi.length-1;
		for (var i = 0; i < $nextLi.length; i++) $nextLi[i].style.borderColor = '#ddc5ff';
		$nextLi.eq(index).css({borderColor : '#fff'})
	}).hover(function(){
		$(this).css({borderColor : '#fff'})
	},function(){
		$(this).css({borderColor : '#ddc5ff'})
	});

	// 指定页
	$nextLi.click(function(){
		index = $(this).index();
		cTextNext();
		for (var i = 0; i < $nextLi.length; i++)$nextLi[i].style.borderColor = '#ddc5ff';
		$(this).css({borderColor : '#fff'})
	});

	// 团队信息
	$btn.click(function(){
		if( nowTime - new Date <= -500 ){
			nowTime = new Date;
			var mLeft = parseInt($listUl.css('margin-left'));
			if ($(this).index()-1) {
				$listUl.stop().animate({
					marginLeft : mLeft+(-260-15)+'px'
				},function(){
					if (mLeft <= -1925)$(this).css({marginLeft : '-1100px'});
				});
			}else{
				$listUl.stop().animate({
					marginLeft : mLeft-(-260-15)+'px'
				},function(){
					if (mLeft >= -275)$(this).css({marginLeft : '-1100px'});
				});
			};
		};
	});

	// 团队信息详情
	$listLi.hover(function(){
		var This = $(this);
		$border.stop().animate({
			left : This.position().left-5+'px'
		},200);
	}).click(function(){
		var index = $(this).index();
		var url = $(this).find('img').attr('src');
		var text = $(this).find('p').html();
		$photo.find('img').stop().fadeOut('fast',function(){
			$(this).attr({
				src : url
			});
			$teacher.html( text );
			$(this).stop().fadeIn('fast');
		});
		$detailed.stop().fadeOut('fast',function(){
			$detailed.stop().fadeIn('fast');
		});
	});

	// 成功案例
	$caseImg.hover(function(){
		$(this).stop().animate({
			width : '110%',
			height : '110%',
			left : '-5%',
			top : '-5%'
		});
	},function(){
		$(this).stop().animate({
			width : '100%',
			height : '100%',
			left : '0%',
			top : '0%'
		});
	});
})