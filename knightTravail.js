function getValidMoves(array) {
    let knightPossibleMoves = [
        [2,1],[2,-1],[-2,1],[-2,-1],   
        [1,2],[-1,2],[1,-2],[-1,-2]
    ];
    let validMovesArray = [];
    for(let i = 0; i < 8; i++) {
        let currentElement =
        knightPossibleMoves[i].map((num, index) => {
            return num + array[index];
        });
        if(
            currentElement[0] >= 0 &&
            currentElement[0] <= 7 &&
            currentElement[1] >= 0 &&
            currentElement[1] <= 7       
        ) {
            validMovesArray.push(currentElement);
        }
    }
    return validMovesArray;
}
function areArraysEqual(array1, array2) {
    if(array1 === array2) return true;
    if(array1 == null || array2 == null) return false;
   if(array1.length !== array2.length) return false;

   for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) return false;
   }

   return true;
}

