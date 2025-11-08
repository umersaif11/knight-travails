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
    }
}