window.addEventListener("DOMContentLoaded");

function $(x){
	var element = document.getElementById(x);
	return element;
}

function getType() {
	var itemType = document.form.type;
	for(var i=0; i < itemType.length; i++){
		if(itemType[i].checked) {
			typeValue = itemType[i].value;
		}
	}
}

function getQuality() {
	var itemQuality = document.form.quality;
	for(var i=0; i < itemQuality.length; i++){
		if(itemQuality[i].checked) {
			typeQuality = itemQuality[i].value;
		}
	}
}


function saveData(){
	var storeNumber = Math.floor(Math.random()*100000001);
	getType();
	getClassification();
	getQuality();
	var object 				= {};
	object.item 			= ["Item Name:", $("itemName").value];
	object.type 			= ["Type:", typeValue];
	object.classification 	= ["Classification:", $("classification").value];
	object.quality 			= ["Quality:", typeQuality];
	object.sellValue 		= ["Sell Value:", $("sellRange").value];
	object.dateStashed 		= ["Date Stashed:", $("stashDate").value];
	object.droppedFrom 		= ["Dropped From:", $("dropped").value];
	localStorage.setItem(storeNumber, JSON.stringify(object));
	alert("Stash Successful!");
}


//Global Variables
var typeValue,
	typeQuality
;


var submit = $("submit");
submit.addEventListener("click", saveData);