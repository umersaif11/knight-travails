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
console.log(getValidMoves([3,3]));