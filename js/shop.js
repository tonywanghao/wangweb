$(function(){
	var arr = JSON.parse(getCookie("arr"));
	//console.log(arr);
	if(!arr){
		$(".shopping_nothing").show();
	}else{
			$(".shop_list").append('<div class="buy_shopping">');
			$('.buy_shopping').append("<h2>商品清单(2)</h2><div class='shoping_detail'><div><ul class = 'shopping_item person_item1'><li>全选</li><li>订单商品</li><li>单价</li><li>数量</li><li>优惠</li><li>小计</li><li>操作</li>");
			$.each(arr,function(index,obj){
				
			var $price=(obj.price);			
			$price=$price.slice(1)
			
			var $number=obj.number;					
			var endPri=$price*$number;
			

			$('.shoping_detail').append("</ul><ul class = 'shopping_item person_content'><li><input type='checkbox' class='chek'></li><li><img src='../img/xpPic2.jpg' alt=''><div class='shopping_introduce'><p><a href='#''>"+obj.title+"</a></p><p><span>"+obj.color+"</span></p></div></li><li>"+obj.price+"</li><li><em id='addM'>-</em><span>"+obj.number+"</span><i id='addN'>+</i></li><li><p>¥0</p><p>优惠促销∧</p></li><li>￥<em class='endPri'>"+endPri+"</em></li><li><em>移入收藏夹</em><em class='delBtn'>删除</em></li></ul></div></div>");
			
			})
			$('.buy_shopping').append("<div class='result'><ul class='choose'><li><input type='checkbox' id='all'></li><li>全选</li><li>删除</li><li>移入收藏夹</li></ul><ul class='calc'><li><em >商品总额</em><em  class = 'changeRed'>￥"+0.00+"</em><em> -  商品优惠：</em><em class='changeOrange'>￥0.00</em><em> =  选购金额：</em>	<em class = 'changeRed'>"+0.00+"</em></li><li><em class='changeOrange'>￥"+0.00+"</em><em>-  满减优惠：</em></li></ul><ul class='total_money'><li><p>总计：<em class='zjia'>"+0.00+"</em></p><p> 商品<em class='totNum'>&nbsp;"+0+"&nbsp;</em>件&nbsp;赠品<em>&nbsp;"+0+"&nbsp;</em>件</p></li><li><span>去结算</span></li></ul></div>");
	};
	
	$(".person_content li").find('.delBtn').on('click',function(){
//		console.log($(".delBtn");
		var arr1 = JSON.parse(getCookie("arr"));
		$(this).parents('.person_content').remove();		
	});

	var $checkDiv=$('.chek');	

	var checkedLen = $checkDiv.length;
	
	$('#all').on('click',function(){
		
		console.log($checkDiv);
		$checkDiv.prop('checked',$('#all').prop('checked'));
	});
	
	$checkDiv.click(function(){
		var chekLen=$('.chek:checked').length;
		if(checkedLen==chekLen){
			$('#all').prop('checked',true);
		}else{
			$('#all').prop('checked',false);
		}				
		$('.chek:checked').each(function(idx,val){
			
			var $value=$(this).parent().parent().find(".endPri");
			$value=$value.text()

			var $val=(idx+1)*$value;
			
			$('.zjia').text($val);
			$('.totNum').text(idx+1);
		});
	});
	
	
	
	
	
	
//	$(".person_content li").find('em').on('click',function(){
//		console.log(this);
//		var arr1 = JSON.parse(getCookie("arr"));
//		$(this).parents('.person_content').remove();		
//	});
	
//	$(".person_content li")
});