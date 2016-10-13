$(function(){
	//用获取Cookie的用户名密码
	var psw = getCookie("psw");
	var user= getCookie('users');
	var username;
	var password;
	
	//用户数据判断
	if(psw){
		$('.vtxt').val(psw);
		$('.vtxt-m').val(user);		
	};
	
	//提交的时候判断
	$('#btn-login').on('click',function(){
		username=$('.vtxt').val();
		passward=$('.vtxt-m').val();
		
		//用户名不存在时
		if(!$('.vtxt').val()|| !$('.vtxt-m').val())
		{
			alert('请输入用户名或者密码！');
			return;
			
//			用户没有选中记住密码时
		}else if($('#chkrememberMe').prop('checked') !=true)
		{
			setCookie('user',username,-10);
			setCookie('psw',passward,-10);
		}
		
		//提交后 跳转到首页
		window.location.href='../index.html';		
	});
});
