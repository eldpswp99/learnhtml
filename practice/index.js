
function runClock(){
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	
	h = addPreZero(h);
	m = addPreZero(m);
	s = addPreZero(s);
	
	const clock = document.getElementsByClassName("clock")[0];
	
	clock.innerHTML = h + ":" + m + ":" + s;
	
	var t = setTimeout(function(){runClock()},1000);
}

function addPreZero(arg){
	if(arg < 10) arg = "0" + arg;
	return arg;
}

function isSubmit(){
	if(event.keyCode === 13){
		controlName();
		controlTodo();
	}
}

function controlName(){
	const getName = document.getElementsByName("name")[0];
	if(getName == null || getName.value === "") return;
	
	const helloName = document.createElement("span");
	helloName.className = "helloName";		
	const helloNameContent = document.createTextNode("Hello "+getName.value+"!");
	helloName.appendChild(helloNameContent);
	
	const parent = getName.parentNode;
	
	parent.replaceChild(helloName,getName);
}

function controlTodo(){
	const getTodo = document.getElementsByName("todo")[0];
	if(getTodo == null || getTodo.value === "") return;
	
	const todoList = document.getElementsByClassName("todoList")[0];
	const newli = document.createElement("li");
	newli.className = "todoElem";
	todoList.appendChild(newli);
	
	const doneImg = document.createElement("img");
	doneImg.src = "images/x-removebg.png";
	doneImg.className = "hasDone";
	doneImg.addEventListener("click",imgOnClick,false);
	doneImg.status = "notChecked";
	newli.appendChild(doneImg);
	
	const todoElem = document.createElement('p');
	todoElem.class = "todoElem";
	const todoText = document.createTextNode(getTodo.value);
	
	todoElem.appendChild(todoText);
	newli.appendChild(todoElem);
	
	getTodo.value = "";
}

function imgOnClick(){
	
	if(event.target.status === "notChecked"){
		event.target.src = "images/check-removebg.png";
		event.target.status = "checked";
	}else if(event.target.status === "checked"){
		const imgGrandParent = event.target.parentNode.parentNode;
		imgGrandParent.removeChild(event.target.parentNode);
	}
}

function addLoadEvent(func){
	const oldonload = window.onload;
	if(typeof window.onload !== "function"){
		window.onload = func;
	}else{
		window.onload() = function(){
			oldonload();
			func();
		}
	}
}


addLoadEvent(runClock());