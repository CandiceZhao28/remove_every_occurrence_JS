// This function removes a character every time it appears in a string
/* Parametr: 
   charArr -  an array of the characters to be removed
   txt -  the string to work on
*/
function removeCharAll(charArr, txt) {
	let currentIndex = 0;
	let currentChar = 0;
	while (currentChar != undefined) {
		if (charArr.includes(currentChar)) {
			txt = txt.slice(0, currentIndex) + txt.slice(currentIndex + 1, txt.length);
		} else {
			currentIndex += 1;
		}
		currentChar = txt[currentIndex]
	}
	return txt;
}