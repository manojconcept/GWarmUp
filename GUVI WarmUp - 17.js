/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	///Your code Starts here 
	let diffX = x1 - x2
	let diffY = y1 - y2
	return Math.floor(Math.sqrt((diffX * diffX) + (diffY * diffY)));
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/