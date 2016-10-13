$(function(){
	 var $proDetail=$('.proDetail');
	 create();
	
		// 最新排名
		$('.listSort a').eq(0).on('click',function(){
			if( $(this).find('em').hasClass('list_active') ){
			
		}else{
			$('.listSort a').find('em').removeClass('list_active');
			$(this).find('em').addClass('list_active');
			//移除所有节点
			$('.prod_a li').remove();
					//重新加载元素
					create();
			};
		})



	//销量排名
	$('.listSort a').eq(1).click(function(){
		if( $(this).find('em').hasClass('list_active') ){
			
		}else{
			$('.listSort a').find('em').removeClass('list_active');
			
			$(this).find('em').addClass('list_active');
			console.log($('.prod_a li'))
			$('.prod_a li').remove().sort(function(a,b){
                    var a = parseInt($(a).find('b').text().substring(2));
                    console.log(a);
                    var b = Number($(b).find('b').text().substring(2));
                    return  b - a; //从大到小
                }).each(function(i,e){

                    $('.prod_a').append(e);
                    // $(this).find('.sort').text(i + 1);
                });
		};
	});

	//销量排名 绑定click事件 跟click()效果一样
	$('.listSort a').eq(2).on('click',function(){
		if( $(this).find('em').hasClass('list_active') ){
			
		}else{
			$('.listSort a').find('em').removeClass('list_active');
			
			$(this).find('em').addClass('list_active');
			console.log($('.prod_a li'))
			$('.prod_a li').remove().sort(function(a,b){
                    var a = parseInt($(a).find('em').text().substring(1));
                    console.log(a);
                    var b = Number($(b).find('em').text().substring(1));
                    return  b - a; //从大到小
                }).each(function(i,e){

                    $('.prod_a').append(e);
                    // $(this).find('.sort').text(i + 1);
                });
		};
	});

	

});

//添加创建元素节点
function create(){
	 
    $.ajax({
        url:'../Json/ProList.json',
        dataType:'json',
        success:function(res)
        {
//      	console.log(res)
        	var $ul=$('.prod_a');
            $.each(res,function(idx,val)
            {
             	var $li=$('<li/>');
             	var $A=$('<a/>');
				var $img=$('<img/>').attr({src:val.proImage});
				var $p=$('<p/>').text(val.proTitle);
				var $div=$('<div/>').addClass('proPrice');
				var $i=$('<i/>').html(val.oldPri);
				var $em=$('<em/>').html(val.newPri);
				var $b=$('<b/>').html(val.proNum);

				$img.appendTo($A);
				$p.appendTo($A);
				
				$i.appendTo($div);
				$em.appendTo($div);
				$b.appendTo($div);
				
				$A.appendTo($li);
				$div.appendTo($li);
				
				$li.appendTo($ul);
            })

        }
    });
}
