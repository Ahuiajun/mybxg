define(['jquery','cookie'],function($){
	//NProgress.start();
	//NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});


	// 实现退出功能
	$('#logoutBtn').click(function(){
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function(data){
				if(data.code==200){
					location.href = '/main/login'
				}
			}
		});
	});


	// 检测用户是否登录
	var flag = $.cookie('PHPSESSID');
	if(!flag && location.pathname !='/main/login'){
		location.href = '/main/login';
	}

	//设置用户头像登录信息
var loginInfo = $.cookie('loginInfo');
loginInfo = loginInfo && JSON.parse(loginInfo);
console.log(loginInfo)
//设置用户的头像信息
$('.aside .profile img').attr('src',loginInfo.tc_avatar);
$('.aside .profile h4').html(loginInfo.tc_name);
})
