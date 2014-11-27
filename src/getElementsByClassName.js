// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

	var result = [];

	//helper function to convert object to an array
	function O2A(obj){
		var arr=[];
		for(var key in obj){if (key!="length") arr.push(obj[key]);}
		return arr;
	}

	//recursion function
	function getDown(element){
		if(element.classList != undefined){
			if((O2A(element.classList)).indexOf(className) != -1) result.push(element);
		}
		for(var i=0;i<element.childNodes.length;i++){
			getDown(element.childNodes[i]);
		}
	}

	getDown(document.body);
	return result;
};