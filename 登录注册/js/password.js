
		function validateform(){
			var x=document.getElementById("password").value;
			var str=/^[0-9a-zA-Z]$/
			var arr=x.match(str);

			if((!arr)||(x.length<6||x.length>8){
				alert("密码由6-8位的英文字母和数字组成")
			};

			var y =document.getElementById("email").value;
			var atops = y.indexof("@");
			var btops = y.lastIndexof(".");
			if (atops<1 || btops<atops+2 ||btops+2>=y.lengths) {
				alert("不是一个有效的Email地址")；
				return false;
			}
		}
