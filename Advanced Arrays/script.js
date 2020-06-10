const array = [2,4,6,8,10];
//map
const mapArray = array.map(num => num * 3);

console.log('Original',array);
console.log('Mapped',mapArray);

//filter
const filterArray = array.filter(num => num > 5);
console.log("Filtered", filterArray);

//reduce
const reduceArray = array.reduce((accumulator,num) => {
	return accumulator + num;
},10
);
console.log("Reduced",reduceArray);