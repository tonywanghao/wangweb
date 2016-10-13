$(function(){
	
	//商品主图切换
	
	$('.simg').on('click','li',function(){
		var idx=$(this).index();
		var src = $(this).find('img').attr('src');
		console.log
		$('#box').find('img').attr({src,src})
	});
	
	//商品详情页 
	$('.data-sao').on('mouseenter',function(){
		$('.dstelma').show();
	}).on('mouseleave',function(){
		$('.dstelma').hide();
	});
		
	var $top=$(".xpgood_top").offset().top;		
	var $height = $(document).height();
	$(document).on('scroll',function(){	
		//商品详情页 固定的fixed操作
		
		var $scrollTop=$(window).scrollTop();
		if($scrollTop>=$top)
		{
			$('.xpgood_top').css({"position":"fixed",'background':'#ccc'});
			$('.xpgood_sh').css({'display':'block'});
		}else{
			$('.xpgood_top').css({"position":"static"});
			$('.xpgood_sh').css({'display':'none'})
		}
	});
	
	
	var iconut=0;
	$('#buyAdd').on('click',function(){
		console.log(iconut)
		iconut++;
		$(this).closest('div').prev().find('input').val(iconut);
	});
	
	$('#buyReduce').on('click',function(){
//		console.log(10)
		iconut--;
		if(iconut <= 0){
			iconut=0;
		};
		$(this).closest('div').prev().find('input').val(iconut);
	});
	
	//商品点击切换
	var $LGbtn = $('.s-zb');
	var $LGpic = $('#xpLast_c').children("ul");
	var flag =true;
	$LGbtn.click(function(e){
		e.preventDefault();
		if(flag){
			$LGpic.fadeOut();
			$LGpic.eq(1).fadeIn();
			flag = false;

		}else{
			$LGpic.fadeOut();
			$LGpic.eq(0).fadeIn();
			flag =true;
		}
	});
	
	
//	var $ul=$('<ul/>').addClass(".cart-list");
//	$('#addCart').click(function(){
//		var $li= $('<li/>');
//		var $img=$('<img/>').attr({
//			
//		});
//		var $p=$('<p/>');
//		var $span=$('<span/>');
//		
//	});
//	

});

// 加入购物车
$(function(){
	flyFn();
	function flyFn(){
	var offset = $(".Rtlist").position();  //结束的地方的元素
	offset.top =300;
	var left = $('body').width() - $('.Rtlist').width();
	var n = 0;
	var arr = [];

		$("#addCart").click(function(event){
			 n+=1;
			var addcar = $(this);
			// addcar.css('background','#eeeeee');
			var img = $('.lxzoom img').attr('src');
			// console.log(2);
			$('.rightT1_2 b').html(n);
			$('.shopNum').html(n);
			var flyer = $('<img class="u-flyer" src="'+img+'">');
			flyer.fly({
					start: {
						left: event.clientX,
						top: event.clientY
					},
					end: {
						left: left,
						top: offset.top,
						width: 0,
						height: 0
					},
					onEnd: function(){
						flyer.remove();
						
					}
				});
			commit();
	  		 function commit(){
	  		 	var color = $('.xqCont_col em').html();
				var size  = $('.xqCont_siz em').html();
				var number = $('#buyNum').val();
				// console.log(color);
				// console.log(number);
				var obj = {};
				obj.color  = color;
				obj.number = number;
				obj.price  = $('.xqCont_pri em').html();
				console.log(obj.price);
				obj.title  = $('.xqCont_bti i').html();
				obj.imgSrc = $('.lxzoom  img').attr('src');
				console.log(obj);
	 			arr.push(obj);
	 		
	 			setCookie('arr',JSON.stringify(arr),5 * 24 * 60);	
	 		}
		});
	}
});
