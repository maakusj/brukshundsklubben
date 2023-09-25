/* Create a key, give it a name and what value that keyname will hold; and set that key to localStorage (stored in web browser).
Set keyName (called it userName) and keyValue (in our case Bella). I set next keyName (passWord) and keyValue (qwe123) */
localStorage.setItem("userName", "Bella");
localStorage.setItem("passWord", "qwe123");

/* Get the form (loginForm) by Id , add an eventlistener to that form; which fires when the form is submitted.
Created a function that gets the values of the HTML text fields, as well as the "setItems" and then compared those values inside an if statement.
*/
document.getElementById("loginForm").addEventListener("submit", function () {
	const inputUserName = document.getElementById("inputUserName").value; //value that is written from the first textfield
	const inputPassWord = document.getElementById("inputPassWord").value; //value that is written from the second textfield

	const userName = localStorage.getItem("userName"); //gets the item that is set (Bella) outside the function and assigned it to a const called userName
	const passWord = localStorage.getItem("passWord"); //gets the item that is set (qwe123) outside the function and assigned it to a const called passWord

	/* Here I created an if statement that test if the written "inputUserName" from the first text field is equal to the already set userName (Bella).
    And similarly we test the password against each other; both must be true. If true then we alert "välkommen...", if not then alert "ogiltigt..." */
	if (inputUserName == userName && inputPassWord == passWord) {
		alert("välkommen, du är nu inloggad");
	} else {
		alert("Ogiltigt användarnamn eller lösenord");
	}
});
