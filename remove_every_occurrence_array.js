// This function removes an element every time it appears in an array
/* Parametr: 
   elesToRemove - an array of elements to be removed
   arr - the original arry to work on
*/
function removeEleAll(elesToRemove, arr) {
	let currentInd = 0;
	let currentEle = arr[0]; 
	while (currentEle !== undefined) {
	if (elesToRemove.includes(currentEle)) {
		arr.splice(currentInd, 1);
	} else {
		currentInd += 1;
	}
	currentEle = arr[currentInd];
	}
	return arr;
}



