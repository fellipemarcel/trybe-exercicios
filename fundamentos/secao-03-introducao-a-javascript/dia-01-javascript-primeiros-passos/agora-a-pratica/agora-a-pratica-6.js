const chessPiece = 'bishop';

switch (chessPiece.toLowerCase()) {
    
    case 'pawn':
        console.log("If it is a pawn's first move, it can move forward one or two squares. If a pawn has already moved, then it can move forward just one square at a time.");
        break;
    case 'bishop':
        console.log("A bishop can move diagonally as many squares as it likes, as long as it is not blocked by its own pieces or an occupied square.");
        break;
    case 'knight':
        console.log("The knight is the only piece in chess that can jump over another piece! It moves one square left or right horizontally and then two squares up or down vertically, OR it moves two squares left or right horizontally and then one square up or down vertically.");
        break;
    case 'rook':
        console.log("It can move as many squares as it likes left or right horizontally, or as many squares as it likes up or down vertically (as long as it isn't blocked by other pieces).");
        break;
    case 'queen':
        console.log("It can move as many squares as it likes left or right horizontally, or as many squares as it likes up or down vertically (like a rook). The queen can also move as many squares as it likes diagonally (like a bishop).");
        break;
    case 'king':
        console.log("It can only move (or capture) one square in any direction. Please note that the king cannot be captured! When a king is attacked, it is called 'check'");
    default:
        console.log("Invalid Piece!");
}