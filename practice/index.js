
function runClock(){
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	
	h = addPreZero(h);
	m = addPreZero(m);
	s = addPreZero(s);
	
	document.getElementsByClassName("clock")[0].innerHTML = 
		h + ":" + m + ":" + s;
	
	var t = setTimeout(function(){runClock()},1000);
}

function addPreZero(arg){
	if(arg < 10) arg = "0" + arg;
	return arg;
}

function isSubmit(){
	if(event.keyCode === 13){
		document.getElementsByName("getInput")[0].submit();
	}
}

function controllInput(){
	var name = document.getElementsByName("name")[0].value;
	var todo = document.getElementsByName("todo")[0].value;
	
	console.log(name,todo);
}