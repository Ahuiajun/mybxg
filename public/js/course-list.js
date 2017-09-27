define(['jquery','template','util'],function($,template,util){
	// 设置导航菜单选中
	util.setMenu(location.pathname);
	$.ajax({
		type:'get',
		url:'/api/course',
		dataType:'json',
		success:function(data){
			// 解析数据渲染页面
			var html = template('courseTpl',data);
			$('#courseInfo').html(html);
		}
	})
})