function checkFname()
		{
			var f=document.frm.fname.value;
			var reg=/^[A-Za-z]+$/;
			if(f=="")
			{
				//alert("Please Enter First Name");
                document.getElementById("fname").innerHTML="Please Enter First Name";
                document.getElementById("btn").disabled="true";
			}
			else if(!reg.test(f))
			{
				document.getElementById("fname").innerHTML="Please Enter Alphabets Only";
				document.getElementById("btn").disabled="true";
			}
			else
			{
				document.getElementById("fname").innerHTML="";
				document.getElementById("btn").disabled="";	
			}
		}
		function checkEmail()
		{
			var f=document.frm.email.value;
			var reg=/^[A-Za-z0-9-_.]+@[A-Za-z]+\.[A-Za-z]{2,4}$/;
			if(f=="")
			{
				//alert("Please Enter First Name");
                document.getElementById("email").innerHTML="Please Enter Email";
				document.getElementById("btn").disabled="true";
			}
			else if(!reg.test(f))
			{
				document.getElementById("email").innerHTML="Please Enter Valid Email";
				document.getElementById("btn").disabled="true";
			}
			else
			{
				document.getElementById("email").innerHTML="";
				document.getElementById("btn").disabled="";	
			}
		}
		function checkMobile()
		{
			var f=document.frm.mobile.value;
			var reg=/^\d{10}$/;
			if(f=="")
			{
				//alert("Please Enter First Name");
                document.getElementById("mobile").innerHTML="Please Enter Mobile Number";
				document.getElementById("btn").disabled="true";
			}
			else if(!reg.test(f))
			{
				document.getElementById("mobile").innerHTML="Please Enter 10 Digits Only";
				document.getElementById("btn").disabled="true";
			}
			else
			{
				document.getElementById("mobile").innerHTML="";
				document.getElementById("btn").disabled="";	
			}
		}
		function checkPassword()
		{
			var f=document.frm.password.value;
			var reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
			if(f=="")
			{
				//alert("Please Enter First Name");
                document.getElementById("password").innerHTML="Please Enter Password";
				document.getElementById("btn").disabled="true";
			}
			else if(!reg.test(f))
			{
				document.getElementById("password").innerHTML="Min 1 Upper, Lower,Digit & Special(8,15)";
				document.getElementById("btn").disabled="true";
			}
			else
			{
				document.getElementById("password").innerHTML="";
				document.getElementById("btn").disabled="";	
			}
		}
		function checkCPassword()
		{
			var p1=document.frm.cpassword.value;
			var p2=document.frm.password.value;
			
			if(p2=="")
			{
				//alert("Please Enter First Name");
                document.getElementById("cpassword").innerHTML="Please Enter Confirm Password";
				document.getElementById("btn").disabled="true";
			}
			else if(p2!=p1)
			{
				document.getElementById("cpassword").innerHTML="Password & Confirm Password Does not Matched";
				document.getElementById("btn").disabled="true";
			}
			else
			{
				document.getElementById("cpassword").innerHTML="";
				document.getElementById("btn").disabled="";	
			}
		}