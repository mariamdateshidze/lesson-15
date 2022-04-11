// 1
const currentDay = new Date().getDay();

switch (currentDay) {
    case 0:
    	console.log("Sunday");
    	break;
    case 1:
    	console.log("Monday");
    	break;
    case 2:
    	console.log("Tuesday");
        break;
    case 3:
    	console.log("Wednesday");
    	break;
    case 4:
    	console.log("Thursday");
    	break;
    case 5:
    	console.log("Friday");
    	break;
    case 6:
    	console.log("Saturday");
    	break;
}

// 2

for (let i = 0; i < 101; i ++) {
 	// console.log(i);
}


// 3
let i = 0;
while (i < 50) {
	i++;
    // console.log(i);
}



// 4
let index=0;
do {
    index++;
	// console.log(index);
} while (index < 150);



// 5
let myArr =[];
let j=0;
do{
    j++;
    myArr.push(j*j);
}
while (j<1000);
// console.log(myArr);




