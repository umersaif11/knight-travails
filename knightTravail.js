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
function knightMoves(initialVertex, targetVertex) {
    if(!initialVertex || !targetVertex) {
        return 'Arrays are required';
    }
    if(
        !Array.isArray(initialVertex) ||
        !Array.isArray(targetVertex) 
    ) {
        return 'Arguments should be array';
    }
    if(
        getValidMoves(initialVertex).length === 0 ||
        getValidMoves(targetVertex).length === 0
    ) {
        return 'Insert valid array within bounds';
    }
     if(
        initialVertex.length !==
        targetVertex.length
    ) {
        return 'Both arrays should have equal lengths';
    }
    let queue = [[initialVertex]];
    let visitedVertices = [];
    while(queue.length > 0) {
        
        
       

        
    }
}
