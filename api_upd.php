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
$stu_number=$_POST['stu_number'];
$stu_major=$_POST['stu_major'];
$stu_address=$_POST['stu_address'];
$sql="update student set stu_name='$stu_name',stu_number='$stu_number',stu_major='$stu_major',stu_address='$stu_address' where stu_number='$stu_number'";
if(mysqli_query($conn,$sql)){
	echo "yes";
}else{
	echo "no";
}
mysqli_close($conn);
?>