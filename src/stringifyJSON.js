// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

	var type = Array.isArray(obj) ? "array": typeof(obj);
	var objString = "";	
	var p = "\"";

	switch(type){
		case "undefined":{return undefined};
		case "null":{return "null"};
		case "boolean":{return obj ? "true" : "false"};
		case "number":{return obj.toString()};
		case "string":{return p+obj+p};
		case "array":{
			//undefined or function type elements are stored in array as null
			var eType;
			obj.forEach(function(element){
				eType = typeof(element);
				if(eType!="undefined" && eType!="function"){
					objString += stringifyJSON(element) + ",";
				} else {
					objString += "null" + ",";
				}
			})
			return "["+objString.slice(0,-1)+"]";
		};
		case "object":{
			//undefined or function type property values are skipped
			//jasmine expects {} to equal null
			if (obj == null) return "null";
			var val;
			for(var prop in obj){
				val = obj[prop];
				var eType = typeof(val);
				if(eType != "undefined" && eType != "function"){
					objString += p+prop+p+":"+stringifyJSON(val)+",";
				}
			}
			return "{"+objString.slice(0,-1)+"}";
		};
	}
};

