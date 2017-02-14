var fruits = ["apple", "banana", "cherry"];

function outputFruitOld (array) {
	for(i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
}

outputFruitOld(fruits);

function outputFruits (element, index, array) {
	console.log(element);
	console.log("array[" + index + "] " + array[i]);
}
fruits.forEach(outputFruis);

fruits.forEach(function(element){
	console.log(element);
});

function backwardFruitsold(array) {
	var backwardsFruit = [];
	for (i = 0; i < array.length; i++){
		backwardsFruit.push(array[i].split("").reverse().join(""));
	}
	console.log(backwardsFruit);
}

backwardFruitsOld(fruits);

var backwardsFruit = fruits.map(function(fruit){
	return fruit.split("").reverse(join("");

});
console.log(backwardsFruit);

function fiveLettersOnlyOld (array){
	var filteredFruits = [];
	for (var i = 0; i < array.length; i++){
		if(array[i].length === 5){
			filteredFruits.push(array[i]);
		}
	}
	console.log(filteredFruits);
}

fiveLettersOnlyOld(fruits);

function filterIt (cat){
	if (cat.length === 5){
		return.cat;
	}
}

var filteredFruits = fruits.filter(filterIt);
console.log(filteredFruits);

var numbers = [0, 1, 2, 3, 4];



function addzOld(array){
	var sum = 0;
	for(var i = 0; i < array.length; i++){
		sum += array[i];
	}
	console.log(sum);
}
addzOld(numbers);

var sum = [0,1,2,3,4].reduce(function(previousValue, currentValue, index){
	console.log("current index " + index);
	console.log("previousValue ", previousValue);
	console.log("currentValue ", currentValue);
	return previousValue + currentValue;
});
console.log(sum);































