var extend = function(obj,prop){
	if(prop === null) {
		prop = obj; obj = this;
	}
	for(var i in prop){
		obj[i] = prop[i];
	}
	
	return obj;
}

var subClass = function (){
	var F = function() {};
	
	var subClass = function(obj){
		var Child = function(){
		var parent = Child.super.constructor;
		if(parent && parent !== Function){
			parent.apply(this);
		}
		if(Child.prototype.hasOwnProperty("_init")){
			Child.prototype._init.apply(this);
		}
		};	

		var parent = this === window ? Function : this;	

		F.prototype = parent.prototype;
		Child.prototype = new F();
		Child.super = F.prototype;
		Child.prototype.constructor = Child;
		parent.prototype.constructor = parent;
		Child.subClass = arguments.callee;

		extend(Child.prototype,obj);	

		return Child;	
	}
	
	return subClass;
}();

var person = function(){
	var _name=undefined;
	return{
		_init : function(arg){
			_name = arg;
		},
		
		getName : function(){
			return _name;
		},

		setName : function(name){
			_name = name;
		}
			
	};
};

var student_obj = {
	_init : function(){
		console.log("student init");
	},
	
	getName : function(){
		return "student name " + this._name;
	}	
};


var Person = subClass(person());
var p = new Person();

console.dir(p);
console.log(p);
p.setName("zoon");
console.log(p.getName());


var Student = Person.subClass(student_obj);
var student = new Student();
student.setName("stu");
console.log(student.getName());

console.log(Person.toString());