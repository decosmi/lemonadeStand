"use strict";
function startLemonadeStand(){
	console.log(document.weather);
}

function simulate(){
	var days=document.getElementById("days").value;
	var numberPeople=document.getElementById("people").value;
	var pricePerCup=document.getElementById("price").value;
	var costPerCup=document.getElementById("cost").value;
	var theWeather = new Weather();
	theWeather.retrieveWeather(days);
	var theBestStand = new LemonadeStand();
	theBestStand.countEveryLastPerson(days,numberPeople,theWeather.Forecast[0],pricePerCup);
	theBestStand.getGlassesSold();
	console.log(glassesSoldPerDay);
	//theBestStand.calculateProfit(pricePerCup,costPerCup);
	//theBestStand.makeOutputTable(days,numberPeople,numberOfGlassesSold,profit);
}

function Weather(){ 	
	this.Forecast=[];
	this.retrieveWeather= function(days){  //get days from user input 
		for(var i=0; i<days; i++){
			var todaysHigh=document.weather.forecast[i].high;
			this.Forecast.push(todaysHigh);
			//console.log(todaysHigh);
		}
	}
}

function Person() {
	this.purchased=Math.random();
	this.doIBuy=function(temperature,pricePerCup){
		var likelihood = temperature> 75 ? (temperature%75)*this.purchased/pricePerCup : this.purchased/pricePerCup;
		this.purchased=likelihood>0.5;
		return likelihood>0.5;
	}
}
	
function LemonadeStand(){
	this.countEveryLastPerson=function(days,numberPeople,temperature,pricePerCup){
		this.everybody=[];
		for(var i=0; i<days; i++){
			this.peopleArray=[];
				for (var d=0;d<numberPeople; d++){  
					var newIndividual=new Person(); //create an instance of the person class
					newIndividual.doIBuy(temperature,pricePerCup);					
					this.peopleArray.push(newIndividual);//then push that instance into the peopleArray
				}
			this.everybody.push(this.peopleArray);	
		}
	}

	this.getGlassesSold=function (){
		this.glassesSoldPerDay=[];
		for(var i=0;i<this.everybody.length;i++){
			var x=everybody[i].filter;
			var y=x.length;
			glassesSoldPerDay.push(y);
		}
	}
	

	this.calculateProfit=function(pricePerCup,costPerCup){
		this.profit=pricePerCup-costPerCup;//this is only taking the profit from selling one cup
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


	//this.peopleArray=[];
	/*
	this.customersArray=[];//should only include people who actually bought lemonade
	
	this.addCustomers= function(theWeather,pricePerCup){
		for(var i=0; i<this.peopleArray.length; i++){
		var likelihood = theWeather.Forecast[i]> 75 ? (theWeather%75)*this.peopleArray[i].purchased/pricePerCup : this.peopleArray[i].purchased/pricePerCup;
		//console.log(likelihood);
		var customer= likelihood> 0.5 
		this.customersArray.push(customer);
		//console.log(this.customersArray);
		}
	}	
*/
	/*this.addIndividuals=function(numberPeople,temperature,pricePerCup){ 
		for (var i=numberPeople; i>0; i--){  
			//create an instance of the person class
			var newIndividual=new Person();
			newIndividual.doIBuy(temperature,pricePerCup);

			//then push that instance into the peopleArray
			this.peopleArray.push(newIndividual);
		}
	}*/

/*function countEveryLastPerson(days,numberPeople,temperature,pricePerCup){
	this.everybody=[];
	for(var=0, i<days,i++){
		this.peopleArray=[];
		this.addIndividuals=function(numberPeople,temperature,pricePerCup){ 
			for (var d=numberPeople; d>0; d--){  
				//create an instance of the person class
				var newIndividual=new Person();
				newIndividual.doIBuy(temperature,pricePerCup);

				//then push that instance into the peopleArray
				this.peopleArray.push(newIndividual);
				var thisDaysPeople=this.PeopleArray;
			}
		}
	this.everybody.push(thisDaysPeople);//this variable should be an array of the people for that day
	}
}*/

/*var individual=new Person();
var stand=new LemonadeStand();
stand.addIndividuals(3);
console.log(stand.peopleArray);
stand.addCustomers(75,1);*/

