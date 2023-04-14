function chessboard() {
    var chessboard = document.getElementById("chessboard");
    const numberChar = ["a", "b", "c", "d", "e", "f", "g", "h"];

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
        var element = document.createElement("div");
        let position = `[${col + 1}-${numberChar[row]}]`;
            element.setAttribute("id", position);

        if (position === blackKing.position) {
        element.style.backgroundImage = `url(${blackKing.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === blackQueen.position) {
        element.style.backgroundImage = `url(${blackQueen.src})`;
        element.style.backgroundSize = 'cover';
        }
        
        if (position === blackBishop1.position) {
        element.style.backgroundImage = `url(${blackBishop1.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === blackBishop2.position) {
        element.style.backgroundImage = `url(${blackBishop2.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === blackKnight1.position) {
        element.style.backgroundImage = `url(${blackKnight1.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === blackKnight2.position) {
        element.style.backgroundImage = `url(${blackKnight2.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === blackRook1.position) {
        element.style.backgroundImage = `url(${blackRook1.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === blackRook2.position) {
        element.style.backgroundImage = `url(${blackRook2.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === blackPawn1.position ) {
        element.style.backgroundImage = `url(${blackPawn1.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === blackPawn2.position ) {
        element.style.backgroundImage = `url(${blackPawn2.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === blackPawn3.position ) {
        element.style.backgroundImage = `url(${blackPawn3.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === blackPawn4.position ) {
        element.style.backgroundImage = `url(${blackPawn4.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === blackPawn5.position ) {
        element.style.backgroundImage = `url(${blackPawn5.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === blackPawn6.position ) {
        element.style.backgroundImage = `url(${blackPawn6.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === blackPawn7.position ) {
        element.style.backgroundImage = `url(${blackPawn7.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === blackPawn8.position ) {
        element.style.backgroundImage = `url(${blackPawn8.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whiteKing.position) {
        element.style.backgroundImage = `url(${whiteKing.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whiteQueen.position) {
        element.style.backgroundImage = `url(${whiteQueen.src})`;
        element.style.backgroundSize = 'cover';
        }
        
        if (position === whiteBishop1.position) {
        element.style.backgroundImage = `url(${whiteBishop1.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whiteBishop2.position) {
        element.style.backgroundImage = `url(${whiteBishop2.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whiteKnight1.position) {
        element.style.backgroundImage = `url(${whiteKnight1.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whiteKnight2.position) {
        element.style.backgroundImage = `url(${whiteKnight2.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whiteRook1.position) {
        element.style.backgroundImage = `url(${whiteRook1.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whiteRook2.position) {
        element.style.backgroundImage = `url(${whiteRook2.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whitePawn1.position ) {
        element.style.backgroundImage = `url(${whitePawn1.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whitePawn1.position ) {
        element.style.backgroundImage = `url(${whitePawn1.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whitePawn2.position ) {
        element.style.backgroundImage = `url(${whitePawn2.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whitePawn3.position ) {
        element.style.backgroundImage = `url(${whitePawn3.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whitePawn4.position ) {
        element.style.backgroundImage = `url(${whitePawn4.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whitePawn5.position ) {
        element.style.backgroundImage = `url(${whitePawn5.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whitePawn6.position ) {
        element.style.backgroundImage = `url(${whitePawn6.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whitePawn7.position ) {
        element.style.backgroundImage = `url(${whitePawn7.src})`;
        element.style.backgroundSize = 'cover';
        }

        if (position === whitePawn8.position ) {
        element.style.backgroundImage = `url(${whitePawn8.src})`;
        element.style.backgroundSize = 'cover';
        }
    
        element.className = "element";
        chessboard.appendChild(element);
    }
  }
}

function Chess(key, src, position) {
    this.type = key;
    this.src = src;
    this.position = position;
}


// var blk = "[5-a]";

// black chess
const blackKing = new Chess ("black_king","./assests/images/blackking.png", "[5-a]");
const blackQueen = new Chess ("black_queen","./assests/images/blackqueen.png", "[4-a]");
const blackBishop1 = new Chess ("black_bishop1","./assests/images/blackbishop.png", "[3-a]");
const blackBishop2 = new Chess ("black_bishop2","./assests/images/blackbishop.png", "[6-a]");
const blackKnight1 = new Chess ("black_knight1","./assests/images/blackknight.png", "[2-a]");
const blackKnight2 = new Chess ("black_knight2","./assests/images/blackknight.png", "[7-a]");
const blackRook1 = new Chess ("black_rook1","./assests/images/blackrook.png", "[1-a]");
const blackRook2 = new Chess ("black_rook2","./assests/images/blackrook.png", "[8-a]");
const blackPawn1 = new Chess ("black_pawn1","./assests/images/blackpawn.png", "[1-b]");
const blackPawn2 = new Chess ("black_pawn2","./assests/images/blackpawn.png", "[2-b]");
const blackPawn3 = new Chess ("black_pawn3","./assests/images/blackpawn.png", "[3-b]");
const blackPawn4 = new Chess ("black_pawn4","./assests/images/blackpawn.png", "[4-b]");
const blackPawn5 = new Chess ("black_pawn5","./assests/images/blackpawn.png", "[5-b]");
const blackPawn6 = new Chess ("black_pawn6","./assests/images/blackpawn.png", "[6-b]");
const blackPawn7 = new Chess ("black_pawn7","./assests/images/blackpawn.png", "[7-b]");
const blackPawn8 = new Chess ("black_pawn8","./assests/images/blackpawn.png", "[8-b]");

// white chess
const whiteKing = new Chess ("white_king","./assests/images/whiteking.png", "[5-h]");
const whiteQueen = new Chess ("white_queen","./assests/images/whitequeen.png", "[4-h]");
const whiteBishop1 = new Chess ("white_bishop1","./assests/images/whitebishop.png", "[3-h]");
const whiteBishop2 = new Chess ("white_bishop2","./assests/images/whitebishop.png", "[6-h]");
const whiteKnight1 = new Chess ("white_knight1","./assests/images/whiteknight.png", "[2-h]");
const whiteKnight2 = new Chess ("white_knight2","./assests/images/whiteknight.png", "[7-h]");
const whiteRook1 = new Chess ("white_rook1","./assests/images/whiterook.png", "[1-h]");
const whiteRook2 = new Chess ("white_rook2","./assests/images/whiterook.png", "[8-h]");
const whitePawn1 = new Chess ("white_pawn1","./assests/images/whitepawn.png", "[1-g]");
const whitePawn2 = new Chess ("white_pawn2","./assests/images/whitepawn.png", "[2-g]");
const whitePawn3 = new Chess ("white_pawn3","./assests/images/whitepawn.png", "[3-g]");
const whitePawn4 = new Chess ("white_pawn4","./assests/images/whitepawn.png", "[4-g]");
const whitePawn5 = new Chess ("white_pawn5","./assests/images/whitepawn.png", "[5-g]");
const whitePawn6 = new Chess ("white_pawn6","./assests/images/whitepawn.png", "[6-g]");
const whitePawn7 = new Chess ("white_pawn7","./assests/images/whitepawn.png", "[7-g]");
const whitePawn8 = new Chess ("white_pawn8","./assests/images/whitepawn.png", "[8-g]");

chessboard();

const rowChar = ["a", "b", "c", "d", "e", "f", "g", "h"];
const rowCharlength = rowChar.length;
const colChar = ["1","2","3","4","5","6","7","8"];


// let status = "" // unselect / selected / moved
// let thisTurn = 'black'; // white;
// const handleSelect = (chess) => {
//     switch (chess.type) {
//         case 'black_pawn1':
//             return ['[1-c]', '[1-d]']
            
//         case 'black_pawn2':
//             return ['[2-c]', '[2-d]']

//         case 'black_pawn3':
//             return ['[3-c]', '[3-d]']
            
//         case 'black_pawn4':
//             return ['[4-c]', '[4-d]']

//         case 'black_pawn5':
//             return ['[5-c]', '[5-d]']
            
//         case 'black_pawn6':
//             return ['[6-c]', '[6-d]']

//         case 'black_pawn7':
//             return ['[7-c]', '[7-d]']
            
//         case 'black_pawn8':
//             return ['[8-c]', '[8-d]']
        
//         case 'black_knight1':
//             return ['[1-c]', '[3-c]']
            
//         case 'black_knight2':
//             return ['[8-c]', '[6-c]']
//         default:
//             break;
//     }
// }


// click chesss
var allchess = document.getElementsByClassName('element');
const clickedElement = [];
for (const chess of allchess) {
    function clickchess() {

        // click all chess
        if (clickedElement.length > 0) {
            clickedElement[0].style.backgroundColor = '';
            clickedElement.length = 0;
        }

        // click pawn turn 1
        if (canmovePawnTurn1.length > 0) {
        canmovePawnTurn1[0].style.backgroundColor = '';
        canmovePawnTurn1[1].style.backgroundColor = '';
        canmovePawnTurn1.length = 0;
        }

        // click pawn next turn
        if (pawnNextTurn.length > 0) {
        pawnNextTurn[0].style.backgroundColor = '';
        pawnNextTurn.length = 0;
        }

        if ((chess.style.backgroundImage).includes('black') ||
            (chess.style.backgroundImage).includes('white')) {
            const idOfElement = chess.getAttribute('id');
            var push = document.getElementById(idOfElement);
            document.getElementById(idOfElement).style.backgroundColor = 'pink'; 
            clickedElement.push(push);
        }
    }
    chess.addEventListener('click', clickchess)
}

// pawn position

// pawn position turn 1
const canmovePawnTurn1 = [];
const arrayblackPawn = [];
const arraywhitePawn = [];
for (const i of colChar) {
    arrayblackPawn.push(document.getElementById(`[${i}-b]`));
}
for (const blackpawn of arrayblackPawn) {
    blackpawn.addEventListener('click', () => {
    if (canmovePawnTurn1.length > 0) {
        canmovePawnTurn1[0].style.backgroundColor = '';
        canmovePawnTurn1[1].style.backgroundColor = '';
        canmovePawnTurn1.length = 0;
        }
    const idmove = blackpawn.getAttribute('id');
    const rowCharlength = rowChar.length;
    let change = idmove[3];
    for (let i = 0 ; i <= rowCharlength ; i++) {
        if (change==rowChar[i]) {
            for (let i = 0; i < 2; i++) {
                var newchange = (rowChar[i+2]);
                var hightlihgtPawn = document.getElementById(`[${idmove[1]}-${newchange}]`);
                hightlihgtPawn.style.backgroundColor = 'lightgreen';
                canmovePawnTurn1.push(hightlihgtPawn);               
            }
            
            const hightlihgtPawn1 = canmovePawnTurn1[0];
            const hightlihgtPawn2 = canmovePawnTurn1[1];
            function pawnmove1() {
        hightlihgtPawn1.style.backgroundImage = "url('./assests/images/blackpawn.png')";
        hightlihgtPawn1.style.backgroundSize = 'cover';
        hightlihgtPawn2.style.backgroundImage = "unset";
        blackpawn.style.backgroundImage = 'unset';
        blackpawn.addEventListener('click', function() {
        canmovePawnTurn1[0].style.backgroundColor = 'transparent';
        canmovePawnTurn1[1].style.backgroundColor = 'transparent';
                    })
        hightlihgtPawn2.removeEventListener('click',pawnmove2)
                    }
            function pawnmove2() {
        hightlihgtPawn2.style.backgroundImage = "url('./assests/images/blackpawn.png')";
        hightlihgtPawn2.style.backgroundSize = 'cover';
        hightlihgtPawn1.style.backgroundImage = "unset";
        blackpawn.style.backgroundImage = 'unset';
        blackpawn.addEventListener('click', function() {
        canmovePawnTurn1[0].style.backgroundColor = 'transparent';
        canmovePawnTurn1[1].style.backgroundColor = 'transparent';
            })
        hightlihgtPawn1.removeEventListener('click',pawnmove1)

                    }
            hightlihgtPawn1.addEventListener('click', pawnmove1)
            hightlihgtPawn2.addEventListener('click', pawnmove2)
        }
    }
    })
}
for (const i of colChar) {
    arraywhitePawn.push(document.getElementById(`[${i}-g]`));
}
for (const whitepawn of arraywhitePawn) {
    whitepawn.addEventListener('click', () => {
    if (canmovePawnTurn1.length > 0) {
        canmovePawnTurn1[0].style.backgroundColor = '';
        canmovePawnTurn1[1].style.backgroundColor = '';
        canmovePawnTurn1.length = 0;
        }
    const idmove = whitepawn.getAttribute('id');
    let change = idmove[3];
    for (let i = 0 ; i <= rowCharlength ; i++) {
        if (change==rowChar[i]) {
            for (let j = 0; j < 2; j++) {
                var newchange = (rowChar[i-1]);
                i--;
                var hightlihgtPawn = document.getElementById(`[${idmove[1]}-${newchange}]`);
                hightlihgtPawn.style.backgroundColor = 'lightgreen';
                canmovePawnTurn1.push(document.getElementById(`[${idmove[1]}-${newchange}]`));
            }
            const hightlihgtPawn1 = canmovePawnTurn1[0];
            const hightlihgtPawn2 = canmovePawnTurn1[1];
            function pawnmove1() {
        hightlihgtPawn1.style.backgroundImage = "url('./assests/images/whitepawn.png')";
        hightlihgtPawn1.style.backgroundSize = 'cover';
        hightlihgtPawn2.style.backgroundImage = "unset";
        whitepawn.style.backgroundImage = 'unset';
        whitepawn.addEventListener('click', function() {
        canmovePawnTurn1[0].style.backgroundColor = 'transparent';
        canmovePawnTurn1[1].style.backgroundColor = 'transparent';
                    })
        hightlihgtPawn2.removeEventListener('click',pawnmove2)
                    }
            function pawnmove2() {
        hightlihgtPawn2.style.backgroundImage = "url('./assests/images/whitepawn.png')";
        hightlihgtPawn2.style.backgroundSize = 'cover';
        hightlihgtPawn1.style.backgroundImage = "unset";
        whitepawn.style.backgroundImage = 'unset';
        whitepawn.addEventListener('click', function() {
        canmovePawnTurn1[0].style.backgroundColor = 'transparent';
        canmovePawnTurn1[1].style.backgroundColor = 'transparent';
            })
        hightlihgtPawn1.removeEventListener('click',pawnmove1)

                    }
            hightlihgtPawn1.addEventListener('click', pawnmove1)
            hightlihgtPawn2.addEventListener('click', pawnmove2)
        if (i==4) { break }
        }
    }
})
}

// pawn postion next turn
const pawnNextTurn = [];
for (const chess of allchess) {
    chess.addEventListener('click', () => {
        
        //black Pawn

        if ((chess.style.backgroundImage).includes('blackpawn')) {
            var idPawn = chess.getAttribute('id');
            var selectPawn = document.getElementById(idPawn);
            let changeIdpawn = idPawn[3];
            for (let i = 0 ; i <= rowCharlength ; i++) {
                if (changeIdpawn == rowChar[i]) {
                var newchangeIdPawn = (rowChar[i+1]);
                var hightlihgtIdPawn = document.getElementById(`[${idPawn[1]}-${newchangeIdPawn}]`);
                function hightlightIdPawn() {
                    hightlihgtIdPawn.style.backgroundColor = 'lightgreen';
                }
                hightlightIdPawn()
                pawnNextTurn.push(hightlihgtIdPawn)         
                function pawnMove1Cell() {
                    hightlihgtIdPawn.style.backgroundImage = "url('./assests/images/blackpawn.png')";
                    hightlihgtIdPawn.style.backgroundSize = 'cover';
                    selectPawn.style.backgroundImage = "unset";
                }
                hightlihgtIdPawn.addEventListener('click', pawnMove1Cell)
                }
            }
        }

        // white Pawn

        if ((chess.style.backgroundImage).includes('whitepawn')) {
            var idPawn = chess.getAttribute('id');
            var selectPawn = document.getElementById(idPawn);
            let changeIdpawn = idPawn[3];
            for (let i = 0 ; i <= rowCharlength ; i++) {
                if (changeIdpawn == rowChar[i]) {
                var newchangeIdPawn = (rowChar[i-1]);
                var hightlihgtIdPawn = document.getElementById(`[${idPawn[1]}-${newchangeIdPawn}]`);
                function hightlightIdPawn() {
                    hightlihgtIdPawn.style.backgroundColor = 'lightgreen';
                }
                hightlightIdPawn()
                console.log(hightlihgtIdPawn);
                pawnNextTurn.push(hightlihgtIdPawn) 
                function pawnMove1Cell() {
                    hightlihgtIdPawn.style.backgroundImage = "url('./assests/images/whitepawn.png')";
                    hightlihgtIdPawn.style.backgroundSize = 'cover';
                    selectPawn.style.backgroundImage = "unset";
                }
                hightlihgtIdPawn.addEventListener('click', pawnMove1Cell)      
                }
            }
        }

    })
}









