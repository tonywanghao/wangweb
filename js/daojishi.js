$(function(){
	var endTime = new Date('2016/10/14 10:00');
	var seconds = endTime.getTime();
	
	setInterval(function(){ 
		var starTime=new Date();
		var preSeconds = starTime.getTime();
		 // console.log(preSeconds);
		var sec = (seconds - preSeconds)/1000;
		var days    = parseInt(sec / 3600 / 24);
		var hours   = parseInt(sec / 60 % 24);
		var minutes = parseInt(sec / 60) % 60;
//		 console.log(sec)
		if(hours < 10){
			hours = '0'+hours;
		}
		if(minutes < 10){
			minutes = '0'+minutes;
		}
		sec =parseInt(sec % 60) ;
		if(sec < 10){
			sec = '0'+sec;
		}
		// console.log(days+hours+ minutes);
		$('.sTime').html('距离本场结束仅剩 : '+days+'天'+hours+'小时'+ minutes+'分'+sec+'秒');
		
		$('.bCon_djs').html('仅剩 : '+days+'天'+hours+'小时'+ minutes+'分'+sec+'秒')
	
	},1000);
});
