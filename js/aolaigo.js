$(function(){
	//搜索筛选
	var namelist ="茵曼,Bees do（蜂行）,欧莎OSAO,THERMIX七格格,米莱达,背景色,lavidione 拉维迪欧,盛放,伊芙丽,初语,沐羊MUYANG,PRICH,Candie's,MURIEAL.K 玛蕊凯,La Chapelle,Duoyi朵以,LAGOGO,粉蓝衣橱,Donoratico达衣岩,Five Plus,凡释FASHONERY,Puella普埃拉,La Babite 拉贝缇,L.T.E（朗婷儿）,FA LOUINA法路易娜,KAVON卡汶,PEINAXI培娜,LuckyFriend ,大嘴猴,Betu/百图幻走moveup,BOSIDENG波司登,第五街,Y.miss,G2000,鸭鸭PLORY,艾格 WEEKEND,艾格 ES,艾格 ETAM";
	namelist = namelist.split(',');

	var $datalist = $('.datalist');
	var $keyword = $('#keyword');

	// 1)根据名单生成html结构，并写入.datalist
	var $ul = $('<ul/>');
	$.each(namelist,function(idx,val){
		$('<li/>').text(val).appendTo($ul);
	});
	$ul.appendTo($datalist);

	// 2）#keyword获得焦点时,显示.datalist
	$keyword.focus(function(){
		var keywork = $keyword.val();
		$datalist.find('li').hide().filter(':contains('+keywork+')').show();

		$datalist.slideDown();
	})

	// 3）失去焦点,隐藏.datalist
	.blur(function(){
		$datalist.slideUp();
	})

	// 4）根据输入显示过滤结果
	.on('input',function(){
		var keywork = $keyword.val();

		// 先全部隐藏，然后显示包含keyword的li

		$datalist.find('li').hide().filter(':contains('+keywork+')').show();
	});

	// 5）点击名字写入输入框
	$datalist.find('li').click(function(){
		$keyword.val($(this).text());

		var keywork = $keyword.val();
		$datalist.find('li').hide().filter(':contains('+keywork+')').show();
	})
	
//	topBar hover切换
	$('.rightArea').on('mouseenter','li',function(){
		$(this).find('ul').css('display','block');
	}).on('mouseleave','li',function(){
		$(this).find('ul').css('display','none');
	});
	
	$(".shop").on('mouseenter','li',function(){
		$(this).find('dl').css('display','block');
	}).on('mouseleave','li',function(){
		$(this).find('dl').css('display','none');
	});
	
	$('.shopClass_show').on('mouseenter','li',function(){
		$(this).find('div').css('display','block');
	}).on('mouseleave','li',function(){
		$(this).find('div').css('display','none');
	});
//	今日特价tab切换页
	var btn = $('.Sale_btn');
	var picArr = $('.Sale_a');
	var flag =true;
	btn.click(function(){
		if(flag){
			picArr.hide();
			picArr.eq(1).show();
			flag = false;

		}else{
			picArr.hide();
			picArr.eq(0).show();
			flag =true;
		}
	});
	
	//奢侈区切换
	$('.luxury_tab').on('mouseenter','span',function(){
		var idx=$(this).index();
		$('.luxury').children().eq(idx).css('display','block').siblings().css('display','none');
	})
	
	//华盛商城大图动态切换
	$('.mallTab').on('mouseenter','span',function(){
		var idx=$(this).index();
		$('.mallcontent').children().eq(idx).css('display','block').siblings().css('display','none');
	})
	
	//华盛商城小图动态切换
	$('.mallBk_num').on('mouseenter','li',function(){
		var idx=$(this).index();
		$('.mallBk_item').children().eq(idx).css('display','block').siblings().css('display','none');
		clearInterval(timer);
	});
	
	var timer;
	myMove();
	$('.mallBk_item').on('mouseenter','li',function(){
		var idx=$(this).index();
		$(this).children().eq(idx).css('display','block').siblings().css('display','none');
		clearInterval(timer);
	}).on('mouseleave',function(){
		myMove();
	});
	function myMove(){
		var iconut=0;
		timer=setInterval(function(){		
			iconut++;			
			if(iconut>3){
				iconut=0;
			}
			$('.mallBk_item').children().eq(iconut).css('display','block').siblings().css('display','none');
			$('.mallBk_num li').eq(iconut).css('background','#666').siblings().css('background','#cbcbcb');
		},1000);
	}
	//华盛商城LOGO点击切换
	var $LGbtn = $('#logoBtn');
	var $LGpic = $('.logoTab').children("ul");
	var flag =true;
	$LGbtn.click(function(e){
		e.preventDefault();
		if(flag){
			$LGpic.slideUp();
			$LGpic.eq(1).slideDown();
			flag = false;

		}else{
			$LGpic.slideUp();
			$LGpic.eq(0).slideDown();
			flag =true;
		}
	});
	
	//	品牌上新手风琴效果
	$('.New_list li').eq(0).css({width:400})
	$('.New_list').on('mouseenter','li',function(){
		// 鼠标移入
		// 让当前的li宽度改为400,其他li它改成200
		$(this).stop().animate({width:400}).siblings('li').stop().animate({width:200})/*.find('.NewList_x').find('img').animate({width:200,height:440})*///10s,6个li
		// 当前隐藏LOGO文字 ，其他的显示
		$(this).find('.NewList_logo').hide().closest('li').siblings('li').find('.NewList_logo').show();
		// 让当前的img宽度改为400  高800,其他img它改成宽 200 高440
		$(this).find('.NewList_x img').stop().animate({width:400,height:880}).closest('li').siblings('li').find('.NewList_x img').stop().animate({width:200,height:440});
		//让当前的文字div的宽为400 ，其他的为200
		$(this).find('.NewList_d').show().stop().animate({width:400}).closest('li').siblings('li').find('.NewList_d').hide().stop().animate({width:200});		
	})
	
//	侧边悬浮栏鼠标放上去效果
	$('.rightT1_1').on('mouseenter','li',function(){
		$(this).find('div').show();
	}).on('mouseleave','li',function(){
		$(this).find('div').hide();
	});
	
	
	var lastIndex;
	$('.rightTop').on('click','li',function(){
		var idx=$(this).index();
		var rightc = parseInt($('.rightTab').css('right'));
		
		$('.rightContent').children().eq(idx).css('display','block').siblings().css('display','none');
		if(rightc == 0 && idx == lastIndex){
			$('.rightTab').animate({right:'-270px'});				
		}else{
			$('.rightTab').animate({right:0});		
		}
		lastIndex=idx;
	});
	
	//跨境汇商品点击切换
	var $overBtn = $('#over_b').children();
	var $overPic = $('.overR').children("ul");
	var flag =true;
	$overBtn.click(function(e){
		e.preventDefault();
		if(flag){
			$overPic.fadeOut();
			$overPic.eq(1).fadeIn();
			flag = false;

		}else{
			$overPic.fadeOut();
			$overPic.eq(0).fadeIn();
			flag =true;
		}
	});
	
//	回到顶部
	$('.rightBot').children().eq(1).on('click',function(){

		$('html,body').animate({"scrollTop":0},300);
	});
	
	$('.rightBot').children().eq(2).on('click',function(){
		//console.log(1)
		$('.rightTab').css({'display':'none'});
	});
			
})