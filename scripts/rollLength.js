/*
Author: Eric Stevenson
Class: INF651VA
Date: 12/1/2019

This script calculates the length of a material on a roll.
The user is prompted for three measurements:
The outside diameter of the roll, The inside diameter of the roll (core), and the thickness of the material.
Any input is accepted, but calculations throwing a non-numerical value will register as a zero.
Input is not otherwise sanitized, though future versions will include error handling to prevent negatives and non-numerical entry.
The lengths are converted into an approximation of feet and inches.
Input is taken from user with prompt after clicking button. HTML is changed using Javascript to provide results.
The user may calculate as many rolls as they wish. Logging of results may be added in future version.

Anecdotes:
This program was inspired by my own work experience. I developed this formula to estimate conveyor belt lengths.
Supervisory assumptions were often made that there was enough belt provided for a given project.
Striving for greater accuracy, I managed to greatly simplify the process of calculating belt lengths.
This formula also works for various materials (such as how much toilet paper is left on a roll).
*/

document.getElementById("button1").addEventListener("click", function rollDiameter(){
	//The outside diameter of the roll
    var diameterOfRoll = prompt("Enter the diameter of the roll (inches): ");
    //The diameter of the inside diameter of the roll	
    var diameterOfCore = prompt("Enter the diameter of the core (inches): ");	
	//The roll thickness is the radial measurement from the core to the surface.
	var rollThickness = (diameterOfRoll - diameterOfCore)/2;
	//The average lap is the average of the outside circumference and the inside circumference.
	var averageLap = (diameterOfRoll * 3.14159 + diameterOfCore * 3.14159) / 2;
    var thicknessOfMaterial = prompt("Enter the material thickness (decimal/inches): ");
	//The number of layers are counted by dividing the radial measurement by the thickness of the material.
	var layers = rollThickness/thicknessOfMaterial;
	/*
    Multiplying the circumferential average by the number of layers gives an accurate approximation of length.
    Since measurements were provided in inches, length is first returned in inches.
    Since this is an estimate, an integer approximation will suffice.
    */
	var rollInInches = Math.round(averageLap * layers);
	//The length in feet can be obtained by dividing inches by 12. Since inches are recorded separately, inches are truncated.
	var rollInFeet = Math.trunc(rollInInches/12);
	if(isNaN(rollInFeet)){
		rollInFeet = 0;
	}
	//The remaining inches can be obtained with modulo 12, since feet are obtained from dividing by 12.
	var remainingInches = rollInInches % 12;
	if(isNaN(remainingInches)){
		remainingInches = 0;
	}
	document.getElementById("title").innerHTML = "Final Results";
	document.getElementById("answer").innerHTML = "The length of the roll is approximately " + rollInFeet + " feet " + remainingInches + " inches.";
	document.getElementById("p1").innerHTML = "The length of your roll has been calculated. Click the button below if you would like to calculate another roll.";
	document.getElementById("button1").innerHTML = "Calculate Another Roll";
});