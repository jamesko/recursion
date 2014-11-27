// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var result = [];
	function getDown(element){

		if(element.classList[0] === className) result.push(element);
		//if(element.childNodes.length === 0) return;

		for(var i=0;i<element.childNodes.length;i++){

		}

	};

	getDown(document.body);

	return result;
};
