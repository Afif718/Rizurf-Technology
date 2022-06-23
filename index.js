

function valide() {
	
var usrname = document.getElementById("username").value;
var pass = document.getElementById("pass").value;

if(usrname === "" && pass === ""){
	alert("Usrname or password can't be empty!")
	window.open("index.html");
} else{

	if(usrname === "afif@gmail.com" && pass === "1234"){
		alert("Login Successful");

		//if username and password is correct it will open the below page
		window.open("customer.html");
		//return false;
	}else{
		alert("Username or password is wrong!")
		window.open("index.html");
	}

}

 
}