$(function(){
	// 表单验证
	//新用户注册事件
	var username;
	var usernameflag = true;
	
	$('#txtUserName').focus(function(){
		usernameflag=true;
	});
	$('#txtUserName').blur(function(){
		// 手机验证
		var reg  = /^[1][34578]\d{9}$/; 
		
		username=$(this).val();
		
		var $next = $(this).parent().next();
		
		if(reg.test(username))
		{
			$next.css('color','#fff');
		}else{
			$next.css('color',"red");
			
			usernameflag=false;
		}	
	});
	
	var password;
	var passwordflag=true;
	
	$('#txtPassword').focus(function(){
		usernameflag=true;
	});
	$('#txtPassword').blur(function(){
		
		password = $(this).val();
		
		var $next = $(this).parent().next();
		
		if(password =="" || password.length<6){
			
			$next.show().css('color','red');
			
			passwordflag = false;
		}else{
			$next.css('color','#fff');
		}
	});
	
	var confirmPass;
	
	var confirmPassflag = true;
	
	$('#txtRePassword').focus(function(){
		usernameflag=true;
	});
	$('#txtRePassword').blur(function(){
		
		confirmPass = $(this).val();
		var $next = $(this).parent().next();
		
		if(confirmPass =="" || confirmPass != password){
			
			$next.show().css('color','red');
				confirmPassflag = false;
				 $(this).val(' ');
				 
		}else{
			$next.css('color','#fff');
		}
	});
	
	var flag=false;
	$('#yanz').on('click',function(){
		//console.log(num);
		var num=randomNum();
		$(this).text(num);
		flag=true;
	});
	$('#txtValidationCode1').focus(function(){
		if(!flag){
		console.log(55);
			$(this).parent().next().text("请刷新验证码").css('color','red');					
		}		
	}).blur(function(){
		var val=$('#txtValidationCode1').val();
		if(val != $('#yanz').html()){
			$(this).parent().next().text("验证码有误请重新输入").css('color','red');
		}else{
			$(this).parent().next().css('color','#fff');
		}
	});
	
	$('.zhuce').on('click',function(){
		
		if($('.chkrememberMe').prop('checked')!=true){
			alert('请仔细阅读会员协议！');
		}else if(confirmPassflag && passwordflag &&usernameflag){
			var res = window.confirm('需要记住密码吗,亲?')
			if(res){
				setCookie('users',username,7*24*60);
				setCookie('psw',password,7*24*60);
				
			}
			window.location.href = 'LonIn.html';
		}else{
			alert('请仔细核对好资料！');
		}
	});
});

function randomNum(){
	var result = '';
	for(var i=0;i<6;i++){
		var num = parseInt(Math.random()*9)+1;
		result += num;
	}
	return result;
};
