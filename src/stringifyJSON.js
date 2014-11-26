// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

	var type = typeof(obj);

	switch(type){
		case "undefined":{return undefined};
		case "null":{return null};
		case "boolean":{return obj ? "true" : "false"};
		case "number":{return obj.toString()};
		case "string":{return "\""+obj+"\""};
		case "array":{
			//undefined or function type elements are stored in array as null
			
		};
		case "object":{
			//undefined or function type property values are skipped


		};
	}
};
