window.addEventListener("DOMContentLoaded", function(){

function $(x){
	var element = document.getElementById(x);
	return element;
}

function getType() {
	var itemType = document.forms[0].type;
	for(var i=0; i < itemType.length; i++){
		if(itemType[i].checked) {
			typeValue = itemType[i].value;
		}
	}
}

function getQuality() {
	var itemQuality = document.forms[0].quality;
	for(var i=0; i < itemQuality.length; i++){
		if(itemQuality[i].checked) {
			typeQuality = itemQuality[i].value;
		}
	}
}


function saveData(){
	var storeNumber = Math.floor(Math.random()*100000001);
	getType();
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

function pullData () {
	var displayDiv = document.createElement("div");
	displayDiv.setAttribute("number", "item");
	var createList = document.createElement("ul");
	displayDiv.appendChild(createList);
	document.body.appendChild(displayDiv);
	for(var i=0, j=localStorage.length; i<j; i++){
		var createLi = document.createElement("li");
		createList.appendChild(createLi);
		var storageKey = localStorage.key(i);
		var storageValue = localStorage.getItem(storageKey);
		var listObject = JSON.parse(storageValue);
		var createSubList = document.createElement("ul");
		createLi.appendChild(createSubList);
		for(var n in listObject){
			var createSubLi = document.createElement("li");
			createSubList.appendChild(createSubLi);
			var objSubText = listObject[n][0]+" "+listObject[1];
			createSubLi.innerHTML = objSubText;
		}	
	}
}

//Global Variables
var typeValue,
	typeQuality
;

var submit = $("submit");
submit.addEventListener("click", saveData);
var displayData = $("displayData");
displayData.addEventListener("click", pullData);

});