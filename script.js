//Declaring the constants for the name and password we are going to use
const namn = "Bella";
const losenord = "qwe123";

const welcomeDiv = document.createElement("div"); //create a div element that's going to display if we put the correct username and password in
welcomeDiv.setAttribute("id", "welcome"); //set an id to this div so I can grab it in CSS
const welcomeHeading = document.createElement("h2"); //create the heading thats going to include the welcome text
const welcomeText = document.createTextNode(
	"Välkommen " + namn + "! Du är nu inloggad"
); //the heading text, it's appended later

const logOutBtn = document.createElement("button"); //button for the welcome page and the try again page
logOutBtn.setAttribute("id", "logOut"); //set an id for use with CSS and
logOutBtn.setAttribute("type", "button"); //type button so I don't have to deal with prevent.default because of <form>
logOutBtn.innerHTML = "Logga ut"; //changed the text displayed on the button

welcomeHeading.appendChild(welcomeText); //append the text to h2
welcomeDiv.appendChild(welcomeHeading); //append the h2 to the div
welcomeDiv.appendChild(logOutBtn); //append the button to the div

const loginFieldset = document.getElementById("loginFieldset"); //declaring the fieldset; this is going to be invisible when landing on the other "pages"
const loginForm = document.getElementById("loginForm"); //declaring the form that contains the fieldset; this is later used for appending the divs for the other pages

/* this checks if it's already logged in by trying to get the setItem called "keyNamn" (assigning it to variable namnSaved),
 and check it against our constant "namn". If the key is in the localStorage then take us directly to the welcome page.*/

const namnSaved = localStorage.getItem("keyNamn");
if (namnSaved == namn) {
	welcome();
}

/* Get the form (loginForm) by Id , add an eventlistener to that form; which fires when the form is submitted (it is the form that sends the data).
Created a function that gets the values of the HTML text fields, compare it to the constants namn and losenord in an if statement. If true setItems.
*/
document.getElementById("loginForm").addEventListener("submit", function (e) {
	e.preventDefault(); //since "submit" form is used, the default behaviour is that it tries to send the data to an URL via "acion" attribute which results in a full page reload. To overcome this, I used the preventdefault method, which cancels that event so it doesn't actually submit the form trying to make an http request, instead it will use my JavaScript code to get to the next "page".
	const inputUserName = document.getElementById("inputUserName").value; //value that is written from the first textfield
	const inputPassWord = document.getElementById("inputPassWord").value; //value that is written from the second textfield

	/* Here I created an if statement that test if the written "inputUserName" from the first text field is equal to constant namn (Bella).
    And similarly we test the password against each other; both must be true. If true then we display "välkommen..." + button back, if not then display "ogiltigt..."+ button back */
	if (inputUserName == namn && inputPassWord == losenord) {
		localStorage.setItem("keyNamn", inputUserName);
		localStorage.setItem("keyLosenord", inputPassWord);
		welcome();
	} else {
		notWelcome();
	}
});

function welcome() {
	loginFieldset.classList.add("invisible"); //when true this class gets added, which makes the fieldset display none (class invisible is from the CSS file)..
	logOutBtn.onclick = function () {
		localStorage.clear(); //deletes all the keys when we log out
		location.reload(); //reloads the current URL when clicked, meaning we will automatically get to the sign in page again (refresh button does the same).
	};

	loginForm.appendChild(welcomeDiv); //when true the created div displays as a child to the <form>
	const welcomeImage = document.getElementById("dogImg"); //change picture, and set alternative text
	welcomeImage.src = "./images/dog2.jpg";
	welcomeImage.setAttribute(
		"alt",
		"Happy dog standing in the woods with its tounge out"
	);
}

function notWelcome() {
	loginFieldset.classList.add("invisible"); //display none if true
	logOutBtn.onclick = function () {
		location.reload(); //reloads the current URL when clicked, meaning we will automatically get to the sign in page again (refresh button does the same).
	};

	welcomeHeading.innerHTML = "Ogiltigt användarnamn eller lösenord"; //changing already existing welcome landing page to display different text.
	logOutBtn.innerHTML = "Tillbaka"; //same here, changing the welcome landing page button to display different text on it
	loginForm.appendChild(welcomeDiv); //and when this happens we append the div with these few modifications to it
	welcomeDiv.setAttribute("id", "notWelcome"); //set the attribute according to notWelcome instead of welcome id
	const notWelcomeImage = document.getElementById("dogImg");
	notWelcomeImage.src = "./images/dog3.jpg";
	notWelcomeImage.setAttribute(
		"alt",
		"Sad puppy wearing a yellow raincoat looking in to the camera"
	);
}
