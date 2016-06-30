"use strict";
function startLemonadeStand(){
	console.log(document.weather);
}

function simulate(){
	var days=document.getElementById("days").value;
	var numberPeople=document.getElementById("people").value;
	var pricePerCup=document.getElementById("price").value;
	var costPerCup=document.getElementById("cost").value;
	console.log(days,numberPeople,pricePerCup,costPerCup);
	var theBestStand = new LemonadeStand();
	var theWeather = new Weather();
	theWeather.retrieveWeather(days);
	var individual=new Person();
	individual.addIndividuals(numberPeople);
	console.log(individual.peopleArray);
	//theBestStand.determineBuyers(this.todaysHigh);//doesn't work yet// will closure take care of finding todaysHigh?
	theBestStand.getGlassesSold();
	theBestStand.calculateProfit(pricePerCup,costPerCup);
	theBestStand.makeOutputTable(days,numberPeople,100,10);

}

function Weather(){ 	
	this.getForecast=[];
	this.retrieveWeather= function(days){  //get days from user input 
		for(var i=0; i<days; i++){
			var todaysHigh=document.weather.forecast[i].high;
			this.getForecast.push(todaysHigh);
		}
	}
}

function Person() {
	this.peopleArray=[];
	this.addIndividuals=function(numberPeople){ //we get numberPeople from the user input
		for (var i=numberPeople; i>0; i--){  
		//create an instance of the person class
		var newIndividual=new Person();

		//then push that instance into the peopleArray
		this.peopleArray.push(newIndividual);
		}
	}
}	


function LemonadeStand(){
	this.likelihoodArray=[];
	
	/*this.determineBuyers=function(){

	peopleArray.forEach(function Buy(currentValue)//it won't know where to find peopleArray

		this.inclination=function(){
			Math.random()};//will this work? Test it! 

		function(pricePerCup, todaysHigh){	
		var likelihood = todaysHigh > 75 ? (todaysHigh%75)*this.inclination/pricePerCup : this.inclination/pricePerCup;
		this.inclination = likelihood;
		this.likelihoodArray.push(likelihood > 0.50);
		});*/

	this.getGlassesSold=function (){
		function isTrue(value){
			return value==true;
		}

		var glassesSold=this.likelihoodArray.filter(isTrue);//doesn't know where to find this likelihood array
		var numberOfGlassesSold= glassesSold.length;
	}

	this.calculateProfit=function(pricePerCup,costPerCup){
		var profit=pricePerCup-costPerCup;
	}

	this.makeOutputTable=function(days,numberPeople,numberOfGlassesSold,profit){
		var OutputHTML="<table>"
		OutputHTML+="<th><td>Day</td><td>Number of Passersby</td><td>Glasses Sold</td><td>Profit</td></th>";
			for(var i=0; i<days; i++){
				OutputHTML+="<tr>";
				for (var d=0; d<4; d++){
				OutputHTML+="<td>"+i+"</td><td>"+numberPeople+"</td><td>"+numberOfGlassesSold+"</td><td>"+profit+"</td></tr>";
				}
				OutputHTML+="</tr>";
			}
		OutputHTML+="</table>";
		var findIDforOutputTable=document.getElementById("outputTable");
		findIDforOutputTable.innerHTML=OutputHTML;

	}
}			




	
