function startLemonadeStand(){
	console.log(document.weather);
}

function Person() {
	var l=Math.random();
	console.log(l);
}

// I need a new class to put this in. 

function addIndividuals(numberPeople){
	this.peopleArray=[];
		for (var i=numberPeople; i>0; i--){  //we get numberPeople from the user input
		//create an instance of the person class
		var newIndividual=new Person();
		//then push that instance into the peopleArray
		this.peopleArray.push(newIndividual);
		}
		console.log(this.peopleArray);
}



var Billy=new Person;
addIndividuals(3);

