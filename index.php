<?php
//默认目录名称
$dir = 'main';
//默认文件吗名称
$filename = 'index';

if(array_key_exists('PATH_INFO', $_SERVER)){
	//属性存在

	$path = $_SERVER['PATH_INFO'];// /main/index

	//去掉第一个斜杠
	$str = substr($path, 1);  // /main/index
	$ret = explode('/', $str);
	if(count($ret) == 2) {
		$dir = $ret[0];
		$filename = $ret[1];
	}else{
		$filename = 'login';
    }
}
include './views/' . $dir . '/' . $filename . '.html'; 
?>
