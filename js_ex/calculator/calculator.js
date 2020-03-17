function add (int1, int2) {
	return int1+int2;
}

function subtract (int1, int2) {
	return int1-int2;
}

function sum (intArr) {
	var total = 0;
	for(i=0;i<intArr.length;i++){
		total+=intArr[i];
	}
	return total;
}

function multiply (intArr) {
	var total = 1;
	for(i=0;i<intArr.length;i++){
		total*=intArr[i];
	}
	return total;	
}

function power(int1, int2) {
	return Math.pow(int1, int2)
}

function factorial(int1) {
	var total = 1;
	for(i=int1;i>0;i--){
		total*=i;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}