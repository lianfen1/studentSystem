<?php
header("Access-control-Allow-Origin:*");
header("Access-control-Allow-Credentials:true");
header("Access-control-Allow-Headers:Origin,X-Requerted-With,Content-Type,Accept,Platform,token");
header("Access-control-Allow-Methods:GET,POST,PUT,DELETE,OPTIONS,PATCH");
if($_SERVER['REQUEST_METHOD']=='OPTIONS'){
	exit();
}
$conn=mysqli_connect("localhost","root","123456","stusys");
if(!$conn){
	die("数据库链接失败");
}
$pageSize=$_POST['pageSize'];
$pageNow=$_POST['pageNow'];
$rowCount=0;
$pageCount=0;

$res=mysqli_query($conn,'select count(*) as total from student');
$r=mysqli_fetch_array($res);
$rowCount=$r['total'];

$pageCount=ceil($rowCount/$pageSize);
$sql="select * from student order by id asc limit ".($pageNow-1)*$pageSize.",$pageSize";
mysqli_query($conn,"set names 'utf8'");
$result=mysqli_query($conn,$sql);
$arr=[];
if(mysqli_num_rows($result)>0){
	while($row=mysqli_fetch_array($result)){
		array_push($arr,$row);
	}
}
echo json_encode($arr);
mysqli_close($conn);
?>