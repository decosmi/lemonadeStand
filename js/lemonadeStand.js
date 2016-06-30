"use strict";
function startLemonadeStand(){
	console.log(document.weather);
}

function simulate(){
	this.days=document.getElementById("days").value;
	this.numberPeople=document.getElementById("people").value;
	this.pricePerCup=document.getElementById("price").value;
	this.costPerCup=document.getElementById("cost").value;
	var theBestStand = new LemonadeStand();
	var theWeather = new Weather();
	theWeather.retrieveWeather(this.days);

	console.log(days,numberPeople,pricePerCup,costPerCup);
}

function Weather(){ 	
	this.getForecast=[];
	this.retrieveWeather= function(days){  //get days from user input 
		for(var i=0; i<days; i++){
			var todaysHigh=document.weather.forecast[i].high;
			this.getForecast.push(todaysHigh);
			console.log(this.getForecast);
		}
	}
}

function Person() {
	this.peopleArray=[];
	this.likelihoodArray=[];

	this.addIndividuals=function(numberPeople,pricePerCup,todaysHigh){ //we get numberPeople from the user input
		for (var i=numberPeople; i>0; i--){  
		//create an instance of the person class
		var newIndividual=new Person();

		//then push that instance into the peopleArray
		this.peopleArray.push(newIndividual);

		//find out whether that person will buy or not
		this.inclination=Math.random();

		this.buy=function(pricePerCup, todaysHigh){	//get pricePerCup from user input, not sure how I am going to link to weather function
		var likelihood = todaysHigh > 75 ? (todaysHigh%75)*this.inclination/pricePerCup : this.inclination/pricePerCup;
		this.inclination = likelihood;
		this.likelihoodArray.push(likelihood > 0.50);
		}
		}	
	}
}

function LemonadeStand(){
	this.getGlassesSold=function (){
		function isTrue(value){
			return value==true;
		}

		var glassesSold=this.likelihoodArray.filter(isTrue);
		var numberOfGlassesSold= glassesSold.length;
	}

	this.calculateProfit=function(pricePerCup,costPerCup){
		var profit=pricePerCup-costPerCup;
	}

	this.makeOutputTable=function(days){
		var OutputHTML="<table>"
		OutputHTML+="<th><td>Day</td><td>Number of Passersby</td><td>Glasses Sold</td><td>Profit</td></th>";
			for(var i=0; i<days; i++){
				OutputHTML+="<tr>";
				for (var d=0; d<4; d++){
				OutputHTML+="<td>i</td><td>numberPeople</td><td>numberOfGlassesSold(from function getGlassesSold)</td><td>Profit(from function calculateProfit)</td></tr>";
				}
				OutputHTML+="</tr>";
			}
		OutputHTML+="</table>";
		var findIDforOutputTable=document.getElementById("outputTable");
		findIDforOutputTable.innerHTML=OutputHTML;

	}
// i need a button function that upon clicking the button, it first takes the user's values and stores them in variables. 
	
}			




	
