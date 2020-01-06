function callLater(obj, a, b){
	return (function(){
		obj["sum"] = a+b;
		console.log(obj["sum"]);
	});
}

var sumObj ={
	
}