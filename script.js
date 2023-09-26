/* Create a key, give it a name and what value that keyname will hold; and set that key to localStorage (stored in web browser).
Set keyName (called it "namn") and keyValue (in our case Bella). I set next keyName ("losenord") and keyValue (qwe123) */
const namn = "Bella";
const losenord = "qwe123";

// localStorage.setItem("namn", "Bella");
// localStorage.setItem("losenord", "qwe123");

/* Get the form (loginForm) by Id , add an eventlistener to that form; which fires when the form is submitted (it is the form that sends the data).
Created a function that gets the values of the HTML text fields, as well as the "setItems" and then compared those values inside an if statement.
*/
document.getElementById("loginForm").addEventListener("submit", function (e) {
	e.preventDefault(); //since "submit" form is used, the default behaviour is that it tries to send the data to an URL via "acion" attribute which results in a full page reload. To overcome this, I used the preventdefault method, which cancels that event so it doesn't actually submit the form trying to make an http request, instead it will use my JavaScript code to get to the next "page".
	const inputUserName = document.getElementById("inputUserName").value; //value that is written from the first textfield
	const inputPassWord = document.getElementById("inputPassWord").value; //value that is written from the second textfield

	const namn = localStorage.getItem("namn"); //gets the item that is set (Bella) outside the function and assigned it to a const called "namn"
	const losenord = localStorage.getItem("losenord"); //gets the item that is set (qwe123) outside the function and assigned it to a const called "losenord"

	const loginFieldset = document.getElementById("loginFieldset"); //declaring the fieldset
	const loginForm = document.getElementById("loginForm"); //declaring the form that contains the fieldset

	const welcomeDiv = document.createElement("div"); //create a div element that's going to display if we put the correct username and password in
	welcomeDiv.setAttribute("id", "welcome"); //set an id to this div so I can grab it in CSS

	const welcomeHeading = document.createElement("h2"); //create the heading thats going to include the welcome text
	const welcomeText = document.createTextNode("Välkommen, du är nu inloggad"); //the heading text, it's appended below
	const logOutBtn = document.createElement("button"); //button for the welcome page and the try again page
	logOutBtn.setAttribute("id", "logOut"); //set an id for use with CSS and
	logOutBtn.setAttribute("type", "button"); //type button so I don't have to deal with prevent.default because of <form>
	logOutBtn.innerHTML = "Logga ut"; //changed the text displayed on the button

	logOutBtn.onclick = function () {
		location.reload(); //reloads the current URL when clicked, meaning we will automatically get to the sign in page again (refresh button does the same).
	};

	welcomeHeading.appendChild(welcomeText); //append the text to h2
	welcomeDiv.appendChild(welcomeHeading); //append the h2 to the div
	welcomeDiv.appendChild(logOutBtn); //append the button to the div

	/* Here I created an if statement that test if the written "inputUserName" from the first text field is equal to the already set userName (Bella).
    And similarly we test the password against each other; both must be true. If true then we display "välkommen..." + button back, if not then display "ogiltigt..."+ button back */
	if (inputUserName == namn && inputPassWord == losenord) {
		localStorage.setItem;
		loginFieldset.classList.add("invisible"); //when true this class gets added, which makes the fieldset display none (class invisible is from the CSS file)..
		loginForm.appendChild(welcomeDiv); //when true the created div displays as a child to the <form>
	} else {
		loginFieldset.classList.add("invisible"); //display none if false
		welcomeHeading.innerHTML = "Ogiltigt användarnamn eller lösenord"; //changing already existing welcome landing page to display different text.
		logOutBtn.innerHTML = "Testa igen"; //same here, changing the welcome landing page button to display different text on it
		loginForm.appendChild(welcomeDiv); //and when this happens we append the div with these few modifications to it
	}
});
