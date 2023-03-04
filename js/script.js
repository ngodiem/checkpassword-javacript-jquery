// viết bằng javscript
// var formTags = document.getElementsByTagName("form");
// var formTag = formTags[0];


// var formTag = document.querySelector("form");
// formTag.onsubmit = function() {
// 	var passwrodTag = document.querySelector("[name=password]");
// 	var confirmpasswordTag = document.querySelector("[name=confirm-password]");
// 	password = passwrodTag.value;
// 	confirmpassword = confirmpasswordTag.value;
// 	if(password != confirmpassword) {
// 		$(".error").html('password không trùng khớp');
// 		return false;
// 	}
// 	if(password.length < 8) {
// 		$(".error").html("password phải có ít nhất 8 ký tự")
// 		return false;
// 	}
// 	 var pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// 	 if(!pattern.test(password)) {
// 	 		$(".error").html("password phải bao gồm số, ký tự đặc biệt, chữ thường, chữ hoa");
// 	return false;
// 	 }
// 	 return true;
// }

// viết bằng javacript tóm gọn
var formTag = document.querySelector("form"); // lấy form đầu tiên trừ trên xuống dưới
formTag.onsubmit = function() {
	var password = document.querySelector("[name=password]").value;
	var confirmpassword = document.querySelector("[name=confirm-password]").value;
	if(password != confirmpassword) {
		errorTag = document.querySelector(".error");
		errorTag.innerHTML = "password không trùng khớp ";

		return false; // ngăn không cho submit form
	}

	if(password.length < 8 ) {
	errorTag = document.querySelector(".error");
	errorTag.innerHTML = "password phải ít nhất 8 kí tự ";

		return false;
	
	}
	var pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	if(!pattern.test(password)) {
	errorTag = document.querySelector(".error");
	errorTag.innerHTML = "password phải bao gồm số, ký tự đặc biệt, chữ thường, chữ hoa ";

		return false;
	}
	return true;
}



// $("form").submit(function(event) {
// 	/* Act on the event */
// 	var password = $("[name = password]").val();
// 	var confirm_password = $("[name = confirm-password]").val();
// 	if(password != confirm_password ) {
// 		$(".error").html("password không trùng khớp");
// 		return false;
// 	}
// 	if(password.length < 8) {
// 		$(".error").html("password phải có ít nhất 8 ký tự")
// 		return false;
// 	}
// var pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// if(!pattern.test(password)) {
// 	$(".error").html("password phải bao gồm số, ký tự đặc biệt, chữ thường, chữ hoa");
// 	return false;
// }
// return true;
// });

