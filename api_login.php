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
$stu_name=$_POST['stu_name'];
$password=$_POST['password'];
$sql="select count(*) from student where stu_name='$stu_name' and password='$password'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_array($result);
if($row[0]==1){
	echo "yes";
}else{
	echo "no";
}
mysqli_close($conn);
?>