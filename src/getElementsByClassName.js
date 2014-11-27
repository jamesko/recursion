// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

	var result = [];

	//recursion function
	function getDown(element){
		if(element.classList != undefined){
			if(element.classList.contains(className)){
				result.push(element);
			}
		}
		for(var i=0;i<element.childNodes.length;i++){
			getDown(element.childNodes[i]);
		}
	}

	getDown(document.body);
	return result;
};