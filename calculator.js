//Store all dem' numbas. 
var firstNum;
var secondNum;
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
		firstNum = combineNum(screenNum);
		mathThing = this.innerHTML;	
		screenNum = [];
  });		
  // "=" Operator press
 	$("#calc").click(function(){
		secondNum = combineNum(screenNum);
		if (mathThing === "+"){
			finalNum = firstNum += secondNum;
		}
		else if (mathThing === "-"){
			finalNum = firstNum -= secondNum;
		}
		else if (mathThing === "x"){
			finalNum = firstNum *= secondNum;
		}
		else {
			finalNum = firstNum /= secondNum;
		}
		screenNum = finalNum;
		$("#screen").html(screenNum); 
		mathThing = "";
		firstNum = finalNum;
		secondNum = 0;
		screenNum = [];
  });
  //The cancel button
  $("#cancel").click(function(){
  	firstNum = 0; 
  	secondNum = 0; 
  	finalNum = 0;
  	screenNum = [];
  	mathThing = "";
  	$("#screen").html(screenNum); 
  }); 		




});		  




