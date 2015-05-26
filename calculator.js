//Store all dem' numbas. 
var firstNum;
var nextNum;
var finalNum;
var screenNum = [];
var mathThing;

//Converts the array for the display to a number
function combineNum(array){
	var stringArray = [];
	var number = 0;
	for (var i = 0; i < array.length; i++){
		stringArray.push(array[i].toString());
		number += stringArray[i];
	}
	return (Number(number));
}

$(document).ready(function() { 



	//First number press.
  $("span").not(".operator").click(function() { 
    screenNum.push(Number(this.innerHTML));
    $("#screen").html(screenNum); 
  });
  //Math operator press
  $(".operator").not("#cancel").not("#calc").click(function(){
		if (firstNum){
			nextNum = combineNum(screenNum);			
		}
		else { 
			firstNum = combineNum(screenNum);
		}	
		mathThing = this.innerHTML;	
		$('#screen').html(mathThing);
		screenNum = [];
  });		
  // "=" Operator press
 	$("#calc").click(function(){
		nextNum = combineNum(screenNum);
		if (mathThing === "+"){
			finalNum = firstNum + nextNum;
		}
		else if (mathThing === "-"){
			finalNum = firstNum - nextNum;
		}
		else if (mathThing === "x"){
			finalNum = firstNum * nextNum;
		}
		else {
			finalNum = firstNum / nextNum;
		}
		screenNum = finalNum;
		$("#screen").html(screenNum); 
		mathThing = "";
		firstNum = finalNum;
		nextNum = 0;
		screenNum = [];
  });
  //The cancel button
  $("#cancel").click(function(){
  	firstNum = 0; 
  	nextNum = 0; 
  	finalNum = 0;
  	screenNum = [];
  	mathThing = "";
  	$("#screen").html(screenNum); 
  }); 		




});		  




