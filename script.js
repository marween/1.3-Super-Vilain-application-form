
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

// reset et display
document.querySelector("#display").addEventListener("click", () => {
	var text1 = document.getElementById("nom").value;
	var text2 = document.getElementById("power").value;
	var text3 = document.getElementById("motivation").value;

	
	document.querySelector("#form").style.display = "none";
	document.querySelector("#texte").innerHTML = "<h3>" +text1+ "</h3>" + "<h3>" +text2+ "</h3>" +"<h3>" +text3+ "</h3>";

});


console.log("Hey look in your browser console. It works!");


