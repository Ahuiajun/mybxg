define(['jquery','template'],function($,template){
	// 调用接口
	$.ajax({
		type:'get',
		url:'/api/teacher',
		dataType:'json',
		success:function(data){
			// 解析数据，渲染页面
			var html = template('teacherTpl',{list:data.result});
			$('#teacherInfo').html(html);
		}
	})
})