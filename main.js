// --------- CHESSBROAD  --------- \\
function chessboard() {
  var chessboard = document.getElementById("chessboard");
  const numberChar = ["a", "b", "c", "d", "e", "f", "g", "h"];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      let element = document.createElement("div");
      let position = `${col + 1}${numberChar[row]}`;
      element.setAttribute("id", position);

      if (position === blackKing.position) {
        element.style.backgroundImage = `url(${blackKing.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === blackQueen.position) {
        element.style.backgroundImage = `url(${blackQueen.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === blackBishop1.position) {
        element.style.backgroundImage = `url(${blackBishop1.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === blackBishop2.position) {
        element.style.backgroundImage = `url(${blackBishop2.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === blackKnight1.position) {
        element.style.backgroundImage = `url(${blackKnight1.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === blackKnight2.position) {
        element.style.backgroundImage = `url(${blackKnight2.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === blackRook1.position) {
        element.style.backgroundImage = `url(${blackRook1.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === blackRook2.position) {
        element.style.backgroundImage = `url(${blackRook2.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === blackPawn1.position) {
        element.style.backgroundImage = `url(${blackPawn1.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === blackPawn2.position) {
        element.style.backgroundImage = `url(${blackPawn2.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === blackPawn3.position) {
        element.style.backgroundImage = `url(${blackPawn3.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === blackPawn4.position) {
        element.style.backgroundImage = `url(${blackPawn4.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === blackPawn5.position) {
        element.style.backgroundImage = `url(${blackPawn5.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === blackPawn6.position) {
        element.style.backgroundImage = `url(${blackPawn6.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === blackPawn7.position) {
        element.style.backgroundImage = `url(${blackPawn7.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === blackPawn8.position) {
        element.style.backgroundImage = `url(${blackPawn8.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whiteKing.position) {
        element.style.backgroundImage = `url(${whiteKing.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whiteQueen.position) {
        element.style.backgroundImage = `url(${whiteQueen.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whiteBishop1.position) {
        element.style.backgroundImage = `url(${whiteBishop1.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whiteBishop2.position) {
        element.style.backgroundImage = `url(${whiteBishop2.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whiteKnight1.position) {
        element.style.backgroundImage = `url(${whiteKnight1.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whiteKnight2.position) {
        element.style.backgroundImage = `url(${whiteKnight2.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whiteRook1.position) {
        element.style.backgroundImage = `url(${whiteRook1.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whiteRook2.position) {
        element.style.backgroundImage = `url(${whiteRook2.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whitePawn1.position) {
        element.style.backgroundImage = `url(${whitePawn1.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whitePawn1.position) {
        element.style.backgroundImage = `url(${whitePawn1.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whitePawn2.position) {
        element.style.backgroundImage = `url(${whitePawn2.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whitePawn3.position) {
        element.style.backgroundImage = `url(${whitePawn3.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whitePawn4.position) {
        element.style.backgroundImage = `url(${whitePawn4.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whitePawn5.position) {
        element.style.backgroundImage = `url(${whitePawn5.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whitePawn6.position) {
        element.style.backgroundImage = `url(${whitePawn6.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whitePawn7.position) {
        element.style.backgroundImage = `url(${whitePawn7.src})`;
        element.style.backgroundSize = "cover";
      }

      if (position === whitePawn8.position) {
        element.style.backgroundImage = `url(${whitePawn8.src})`;
        element.style.backgroundSize = "cover";
      }

      element.className = "element";
      chessboard.appendChild(element);
    }
  }
}

// --------- OBJ CONSTRUCTOR  --------- \\
function Chess(key, src, position) {
  this.type = key;
  this.src = src;
  this.position = position;
}

// --------- KHAI BÁO QUÂN CỜ  --------- \\

// black chess
let blackKing = new Chess("black_king", "./assests/images/blackking.png", "5a");
let blackQueen = new Chess(
  "black_queen",
  "./assests/images/blackqueen.png",
  "4a"
);
let blackBishop1 = new Chess(
  "black_bishop1",
  "./assests/images/blackbishop.png",
  "3a"
);
let blackBishop2 = new Chess(
  "black_bishop2",
  "./assests/images/blackbishop.png",
  "6a"
);
let blackKnight1 = new Chess(
  "black_knight1",
  "./assests/images/blackknight.png",
  "2a"
);
let blackKnight2 = new Chess(
  "black_knight2",
  "./assests/images/blackknight.png",
  "7a"
);
let blackRook1 = new Chess(
  "black_rook1",
  "./assests/images/blackrook.png",
  "1a"
);
let blackRook2 = new Chess(
  "black_rook2",
  "./assests/images/blackrook.png",
  "8a"
);
let blackPawn1 = new Chess(
  "black_pawn1",
  "./assests/images/blackpawn.png",
  "1b"
);
let blackPawn2 = new Chess(
  "black_pawn2",
  "./assests/images/blackpawn.png",
  "2b"
);
let blackPawn3 = new Chess(
  "black_pawn3",
  "./assests/images/blackpawn.png",
  "3b"
);
let blackPawn4 = new Chess(
  "black_pawn4",
  "./assests/images/blackpawn.png",
  "4b"
);
let blackPawn5 = new Chess(
  "black_pawn5",
  "./assests/images/blackpawn.png",
  "5b"
);
let blackPawn6 = new Chess(
  "black_pawn6",
  "./assests/images/blackpawn.png",
  "6b"
);
let blackPawn7 = new Chess(
  "black_pawn7",
  "./assests/images/blackpawn.png",
  "7b"
);
let blackPawn8 = new Chess(
  "black_pawn8",
  "./assests/images/blackpawn.png",
  "8b"
);

// white chess
let whiteKing = new Chess("white_king", "./assests/images/whiteking.png", "5h");
let whiteQueen = new Chess(
  "white_queen",
  "./assests/images/whitequeen.png",
  "4h"
);
let whiteBishop1 = new Chess(
  "white_bishop1",
  "./assests/images/whitebishop.png",
  "3h"
);
let whiteBishop2 = new Chess(
  "white_bishop2",
  "./assests/images/whitebishop.png",
  "6h"
);
let whiteKnight1 = new Chess(
  "white_knight1",
  "./assests/images/whiteknight.png",
  "2h"
);
let whiteKnight2 = new Chess(
  "white_knight2",
  "./assests/images/whiteknight.png",
  "7h"
);
let whiteRook1 = new Chess(
  "white_rook1",
  "./assests/images/whiterook.png",
  "1h"
);
let whiteRook2 = new Chess(
  "white_rook2",
  "./assests/images/whiterook.png",
  "8h"
);
let whitePawn1 = new Chess(
  "white_pawn1",
  "./assests/images/whitepawn.png",
  "1g"
);
let whitePawn2 = new Chess(
  "white_pawn2",
  "./assests/images/whitepawn.png",
  "2g"
);
let whitePawn3 = new Chess(
  "white_pawn3",
  "./assests/images/whitepawn.png",
  "3g"
);
let whitePawn4 = new Chess(
  "white_pawn4",
  "./assests/images/whitepawn.png",
  "4g"
);
let whitePawn5 = new Chess(
  "white_pawn5",
  "./assests/images/whitepawn.png",
  "5g"
);
let whitePawn6 = new Chess(
  "white_pawn6",
  "./assests/images/whitepawn.png",
  "6g"
);
let whitePawn7 = new Chess(
  "white_pawn7",
  "./assests/images/whitepawn.png",
  "7g"
);
let whitePawn8 = new Chess(
  "white_pawn8",
  "./assests/images/whitepawn.png",
  "8g"
);

chessboard();

const X = ["1", "2", "3", "4", "5", "6", "7", "8"];
const Y = ["a", "b", "c", "d", "e", "f", "g", "h"];

const clickChess = [];
const moveChessTurn = [];
const movePawnTurn = [];
const cellPawnEatAR = [];


const displayBlockCanJump = (chess, toggle) => {
  // --------- GET ID AND GET INDEX --------- \\

  const idmove = chess.getAttribute("id");
  let x = idmove[0];
  let y = idmove[1];
  let xindex = X.findIndex(checkindexx);
  let yindex = Y.findIndex(checkindexy);

  // get index X
  function checkindexx(indexx) {
    // let x = idmove[0];
    return indexx == x;
  }
  // get index Y
  function checkindexy(indexy) {
    // let y = idmove[1];
    return indexy == y;
  }

  function hightlightchess(toggle) {
    
    // --------- PAWN --------- \\
    {
      if (chess.style.backgroundImage.includes(`${toggle}pawn`)) {
        // chess.style.backgroundColor = 'pink';
        // clickChess.push(chess)
        // black pawn
        if (chess.style.backgroundImage.includes(`blackpawn`)) {
          function hightlightReturn() {
            if (y === "b")
              return [
                `${X[xindex]}${Y[yindex + 1]}`,
                `${X[xindex]}${Y[yindex + 2]}`,
              ];
            else return [`${X[xindex]}${Y[yindex + 1]}`];
          }

          function hightlightPawn() {
            let hightlightPawn = hightlightReturn();
            for (let i = 0; i < hightlightPawn.length; i++) {
              let cell = document.getElementById(hightlightPawn[i]);
              cell.style.backgroundColor = "lightgreen";
              movePawnTurn.push(cell);
              if (cell.style.backgroundImage.includes("black")) break;
              if (cell.style.backgroundImage.includes("white")) break;
            }
          }

          function cellPawnEat() {
            if (0 < xindex && xindex < 7 && 0 < yindex && yindex < 7) {
              let cell1 = document.getElementById(
                `${X[xindex - 1]}${Y[yindex + 1]}`
              );
              let cell2 = document.getElementById(
                `${X[xindex + 1]}${Y[yindex + 1]}`
              );
              if (cell1.style.backgroundImage.includes("white")) {
                cell1.style.backgroundColor = "red";
                cellPawnEatAR.push(cell1);
              }
              if (cell2.style.backgroundImage.includes("white")) {
                cell2.style.backgroundColor = "red";
                cellPawnEatAR.push(cell2);
              }
            } else {
              if (xindex == 0) {
                let cell1 = document.getElementById(
                  `${X[xindex + 1]}${Y[yindex + 1]}`
                );
                if (cell1.style.backgroundImage.includes("white")) {
                  cell1.style.backgroundColor = "red";
                  cellPawnEatAR.push(cell1);
                }
              } else {
                let cell1 = document.getElementById(
                  `${X[xindex - 1]}${Y[yindex + 1]}`
                );
                if (cell1.style.backgroundImage.includes("white")) {
                  cell1.style.backgroundColor = "red";
                  cellPawnEatAR.push(cell1);
                }
              }
            }
          }
          cellPawnEat();
          hightlightPawn();
        }

        // white pawn
        if (chess.style.backgroundImage.includes(`whitepawn`)) {
          function hightlightReturn() {
            if (y === "g")
              return [
                `${X[xindex]}${Y[yindex - 1]}`,
                `${X[xindex]}${Y[yindex - 2]}`,
              ];
            else return [`${X[xindex]}${Y[yindex - 1]}`];
          }

          function hightlightPawn() {
            let hightlightPawn = hightlightReturn();
            for (let i = 0; i < hightlightPawn.length; i++) {
              let cell = document.getElementById(hightlightPawn[i]);
              cell.style.backgroundColor = "lightgreen";
              movePawnTurn.push(cell);
              if (cell.style.backgroundImage.includes("black")) break;
              if (cell.style.backgroundImage.includes("white")) break;
            }
          }

          function cellPawnEat() {
            if (0 < xindex && xindex < 7 && 0 < yindex && yindex < 7) {
              let cell1 = document.getElementById(
                `${X[xindex - 1]}${Y[yindex - 1]}`
              );
              let cell2 = document.getElementById(
                `${X[xindex + 1]}${Y[yindex - 1]}`
              );
              if (cell1.style.backgroundImage.includes("black")) {
                cell1.style.backgroundColor = "red";
                cellPawnEatAR.push(cell1);
              }
              if (cell2.style.backgroundImage.includes("black")) {
                cell2.style.backgroundColor = "red";
                cellPawnEatAR.push(cell2);
              }
            } else {
              if (xindex == 0) {
                let cell1 = document.getElementById(
                  `${X[xindex + 1]}${Y[yindex - 1]}`
                );
                if (cell1.style.backgroundImage.includes("black")) {
                  cell1.style.backgroundColor = "red";
                  cellPawnEatAR.push(cell1);
                }
              } else {
                let cell1 = document.getElementById(
                  `${X[xindex - 1]}${Y[yindex - 1]}`
                );
                if (cell1.style.backgroundImage.includes("black")) {
                  cell1.style.backgroundColor = "red";
                  cellPawnEatAR.push(cell1);
                }
              }
            }
          }
          hightlightPawn();
          cellPawnEat();
        }

        // break higthlight
        const breakhightlight = (chess) => {
          if (chess.style.backgroundImage.length !== 0) {
            movePawnTurn.forEach((cell) => {
              if (cell.style.backgroundImage.length !== 0) {
                cell.style.backgroundColor = "";
              }
            });
          }
        };
        breakhightlight(chess);
      }
    }

    // --------- KNIGHT -------- \\
    {
      if (chess.style.backgroundImage.includes(`${toggle}knight`)) {
      // chess.style.backgroundColor = 'pink';
      // clickChess.push(chess)
        function hightlightKnight() {
          if (xindex < 6 && yindex < 7) {
            let cell = document.getElementById(
              `${X[xindex + 2]}${Y[yindex + 1]}`
            );
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
          }

          if (xindex < 6 && yindex > 0) {
            let cell = document.getElementById(
              `${X[xindex + 2]}${Y[yindex - 1]}`
            );
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
          }

          if (xindex > 1 && yindex < 7) {
            let cell = document.getElementById(
              `${X[xindex - 2]}${Y[yindex + 1]}`
            );
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
          }

          if (xindex > 1 && yindex > 0) {
            let cell = document.getElementById(
              `${X[xindex - 2]}${Y[yindex - 1]}`
            );
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
          }

          if (xindex < 7 && yindex < 6) {
            let cell = document.getElementById(
              `${X[xindex + 1]}${Y[yindex + 2]}`
            );
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
          }

          if (xindex > 0 && yindex < 6) {
            let cell = document.getElementById(
              `${X[xindex - 1]}${Y[yindex + 2]}`
            );
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
          }

          if (xindex < 7 && yindex > 1) {
            let cell = document.getElementById(
              `${X[xindex + 1]}${Y[yindex - 2]}`
            );
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
          }

          if (xindex > 0 && yindex > 1) {
            let cell = document.getElementById(
              `${X[xindex - 1]}${Y[yindex - 2]}`
            );
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
          }
        }
        hightlightKnight();
      }
    }

    // --------- ROOK --------\\
    {
      if (chess.style.backgroundImage.includes(`${toggle}rook`)) {
      // chess.style.backgroundColor = 'pink';
      // clickChess.push(chess)
        function hightlightRook() {
          for (let i = yindex - 1; i > -1; i--) {
            let cell = document.getElementById(`${X[xindex]}${Y[i]}`);
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
            if (cell.style.backgroundImage.includes("black")) break;
            if (cell.style.backgroundImage.includes("white")) break;
          }

          for (let i = yindex + 1; i < 8; i++) {
            let cell = document.getElementById(`${X[xindex]}${Y[i]}`);
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
            if (cell.style.backgroundImage.includes("black")) break;
            if (cell.style.backgroundImage.includes("white")) break;
          }

          for (let i = xindex - 1; i > -1; i--) {
            let cell = document.getElementById(`${X[i]}${Y[yindex]}`);
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
            if (cell.style.backgroundImage.includes("black")) break;
            if (cell.style.backgroundImage.includes("white")) break;
          }

          for (let i = xindex + 1; i < 8; i++) {
            let cell = document.getElementById(`${X[i]}${Y[yindex]}`);
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
            if (cell.style.backgroundImage.includes("black")) break;
            if (cell.style.backgroundImage.includes("white")) break;
          }
        }
        hightlightRook();
      }
    }

    // --------- BISHOP --------\\
    {
      if (chess.style.backgroundImage.includes(`${toggle}bishop`)) {
      // chess.style.backgroundColor = 'pink';
      // clickChess.push(chess)
        function hightlightBishop1() {
          if (yindex >= 1) {
            for (let i = xindex + 1; i < 8; i++) {
              yindex--;
              let cell = document.getElementById(`${X[i]}${Y[yindex]}`);
              cell.style.backgroundColor = "lightgreen";
              moveChessTurn.push(cell);
              if (yindex == 0) break;
              if (cell.style.backgroundImage.includes("black")) break;
              if (cell.style.backgroundImage.includes("white")) break;
            }
          }
        }

        function hightlightBishop2() {
          let yindex = Y.findIndex(checkindexy);
          if (yindex == 7) {
            for (let i = xindex + 1; i < 8; i++) {
              yindex--;
              let cell = document.getElementById(`${X[i]}${Y[yindex]}`);
              cell.style.backgroundColor = "lightgreen";
              moveChessTurn.push(cell);
              if (cell.style.backgroundImage.includes("black")) break;
              if (cell.style.backgroundImage.includes("white")) break;
            }
          } else {
            for (let i = xindex + 1; i < 8; i++) {
              yindex++;
              let cell = document.getElementById(`${X[i]}${Y[yindex]}`);
              cell.style.backgroundColor = "lightgreen";
              moveChessTurn.push(cell);
              if (yindex == 7) break;
              if (cell.style.backgroundImage.includes("black")) break;
              if (cell.style.backgroundImage.includes("white")) break;
            }
          }
        }

        function hightlightBishop3() {
          let yindex = Y.findIndex(checkindexy);
          if (yindex >= 1)
            for (let i = xindex - 1; i > -1; i--) {
              yindex--;
              let cell = document.getElementById(`${X[i]}${Y[yindex]}`);
              cell.style.backgroundColor = "lightgreen";
              moveChessTurn.push(cell);
              if (yindex == 0) break;
              if (cell.style.backgroundImage.includes("black")) break;
              if (cell.style.backgroundImage.includes("white")) break;
            }
        }

        function hightlightBishop4() {
          let yindex = Y.findIndex(checkindexy);
          if (yindex != 7)
            for (let i = xindex - 1; i > -1; i--) {
              yindex++;
              let cell = document.getElementById(`${X[i]}${Y[yindex]}`);
              cell.style.backgroundColor = "lightgreen";
              moveChessTurn.push(cell);
              if (yindex == 7) break;
              if (cell.style.backgroundImage.includes("black")) break;
              if (cell.style.backgroundImage.includes("white")) break;
            }
        }

        hightlightBishop1();
        hightlightBishop2();
        hightlightBishop3();
        hightlightBishop4();
      }
    }

    //--------- KING --------\\
    {
      if (chess.style.backgroundImage.includes(`${toggle}king`)) {
      // chess.style.backgroundColor = 'pink';
      // clickChess.push(chess)
        function hightlightReturn() {
          if (xindex == 0 && yindex == 0) {
            return [
              `${X[xindex]}${Y[yindex + 1]}`,
              `${X[xindex + 1]}${Y[yindex]}`,
              `${X[xindex + 1]}${Y[yindex + 1]}`,
            ];
          }

          if (xindex == 0 && yindex == 7) {
            return [
              `${X[xindex]}${Y[yindex - 1]}`,
              `${X[xindex + 1]}${Y[yindex]}`,
              `${X[xindex + 1]}${Y[yindex - 1]}`,
            ];
          }

          if (xindex == 7 && yindex == 0) {
            return [
              `${X[xindex]}${Y[yindex + 1]}`,
              `${X[xindex - 1]}${Y[yindex]}`,
              `${X[xindex - 1]}${Y[yindex + 1]}`,
            ];
          }

          if (xindex == 7 && yindex == 7) {
            return [
              `${X[xindex]}${Y[yindex - 1]}`,
              `${X[xindex - 1]}${Y[yindex]}`,
              `${X[xindex - 1]}${Y[yindex - 1]}`,
            ];
          }

          if (xindex == 0 && 0 < yindex < 7) {
            return [
              `${X[xindex]}${Y[yindex + 1]}`,
              `${X[xindex]}${Y[yindex - 1]}`,
              `${X[xindex + 1]}${Y[yindex]}`,
              `${X[xindex + 1]}${Y[yindex + 1]}`,
              `${X[xindex + 1]}${Y[yindex - 1]}`,
            ];
          }

          if (xindex == 7 && 0 < yindex < 7) {
            return [
              `${X[xindex]}${Y[yindex + 1]}`,
              `${X[xindex]}${Y[yindex - 1]}`,
              `${X[xindex - 1]}${Y[yindex]}`,
              `${X[xindex - 1]}${Y[yindex + 1]}`,
              `${X[xindex - 1]}${Y[yindex - 1]}`,
            ];
          }

          if (yindex == 0 && 0 < xindex < 7) {
            return [
              `${X[xindex + 1]}${Y[yindex]}`,
              `${X[xindex - 1]}${Y[yindex]}`,
              `${X[xindex]}${Y[yindex + 1]}`,
              `${X[xindex + 1]}${Y[yindex + 1]}`,
              `${X[xindex - 1]}${Y[yindex + 1]}`,
            ];
          }

          if (yindex == 7 && 0 < xindex < 7) {
            return [
              `${X[xindex + 1]}${Y[yindex]}`,
              `${X[xindex - 1]}${Y[yindex]}`,
              `${X[xindex]}${Y[yindex - 1]}`,
              `${X[xindex + 1]}${Y[yindex - 1]}`,
              `${X[xindex - 1]}${Y[yindex - 1]}`,
            ];
          }

          if (0 < xindex < 7 && 0 < yindex < 7) {
            return [
              `${X[xindex]}${Y[yindex + 1]}`,
              `${X[xindex]}${Y[yindex - 1]}`,
              `${X[xindex + 1]}${Y[yindex]}`,
              `${X[xindex - 1]}${Y[yindex]}`,
              `${X[xindex + 1]}${Y[yindex + 1]}`,
              `${X[xindex - 1]}${Y[yindex - 1]}`,
              `${X[xindex + 1]}${Y[yindex - 1]}`,
              `${X[xindex - 1]}${Y[yindex + 1]}`,
            ];
          }
        }

        function hightlightKing() {
          let hightlightKing = hightlightReturn();
          for (let i = 0; i < hightlightKing.length; i++) {
            let cell = document.getElementById(hightlightKing[i]);
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
          }
        }

        hightlightKing();
      }
    }

    //--------- QUEEN --------\\
    {
      if (chess.style.backgroundImage.includes(`${toggle}queen`)) {
      // chess.style.backgroundColor = 'pink';
      // clickChess.push(chess)
        function hightlightQueen() {
          for (let i = yindex - 1; i > -1; i--) {
            let cell = document.getElementById(`${X[xindex]}${Y[i]}`);
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
            if (cell.style.backgroundImage.includes("black")) break;
            if (cell.style.backgroundImage.includes("white")) break;
          }

          for (let i = yindex + 1; i < 8; i++) {
            let cell = document.getElementById(`${X[xindex]}${Y[i]}`);
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
            if (cell.style.backgroundImage.includes("black")) break;
            if (cell.style.backgroundImage.includes("white")) break;
          }

          for (let i = xindex - 1; i > -1; i--) {
            let cell = document.getElementById(`${X[i]}${Y[yindex]}`);
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
            if (cell.style.backgroundImage.includes("black")) break;
            if (cell.style.backgroundImage.includes("white")) break;
          }

          for (let i = xindex + 1; i < 8; i++) {
            let cell = document.getElementById(`${X[i]}${Y[yindex]}`);
            cell.style.backgroundColor = "lightgreen";
            moveChessTurn.push(cell);
            if (cell.style.backgroundImage.includes("black")) break;
            if (cell.style.backgroundImage.includes("white")) break;
          }
        }
        hightlightQueen();

        function hightlightQueen1() {
          if (yindex >= 1) {
            for (let i = xindex + 1; i < 8; i++) {
              yindex--;
              let cell = document.getElementById(`${X[i]}${Y[yindex]}`);
              cell.style.backgroundColor = "lightgreen";
              moveChessTurn.push(cell);
              if (yindex == 0) break;
              if (cell.style.backgroundImage.includes("black")) break;
              if (cell.style.backgroundImage.includes("white")) break;
            }
          }
        }

        function hightlightQueen2() {
          let yindex = Y.findIndex(checkindexy);
          if (yindex == 7) {
            for (let i = xindex + 1; i < 8; i++) {
              yindex--;
              let cell = document.getElementById(`${X[i]}${Y[yindex]}`);
              cell.style.backgroundColor = "lightgreen";
              moveChessTurn.push(cell);
              if (cell.style.backgroundImage.includes("black")) break;
              if (cell.style.backgroundImage.includes("white")) break;
            }
          } else {
            for (let i = xindex + 1; i < 8; i++) {
              yindex++;
              let cell = document.getElementById(`${X[i]}${Y[yindex]}`);
              cell.style.backgroundColor = "lightgreen";
              moveChessTurn.push(cell);
              if (yindex == 7) break;
              if (cell.style.backgroundImage.includes("black")) break;
              if (cell.style.backgroundImage.includes("white")) break;
            }
          }
        }

        function hightlightQueen3() {
          let yindex = Y.findIndex(checkindexy);
          if (yindex >= 1)
            for (let i = xindex - 1; i > -1; i--) {
              yindex--;
              let cell = document.getElementById(`${X[i]}${Y[yindex]}`);
              cell.style.backgroundColor = "lightgreen";
              moveChessTurn.push(cell);
              if (yindex == 0) break;
              if (cell.style.backgroundImage.includes("black")) break;
              if (cell.style.backgroundImage.includes("white")) break;
            }
        }

        function hightlightQueen4() {
          let yindex = Y.findIndex(checkindexy);
          if (yindex != 7)
            for (let i = xindex - 1; i > -1; i--) {
              yindex++;
              let cell = document.getElementById(`${X[i]}${Y[yindex]}`);
              cell.style.backgroundColor = "lightgreen";
              moveChessTurn.push(cell);
              if (yindex == 7) break;
              if (cell.style.backgroundImage.includes("black")) break;
              if (cell.style.backgroundImage.includes("white")) break;
            }
        }

        hightlightQueen();
        hightlightQueen1();
        hightlightQueen2();
        hightlightQueen3();
        hightlightQueen4();
      }
    }

    //--------- BREAK HIGHTLIGHT --------\\
    {
      if (
        chess.style.backgroundImage.includes("white") &&
        chess.style.backgroundColor !== "red"
      ) {
        moveChessTurn.forEach((cell) => {
          if (cell.style.backgroundImage.includes("white")) {
            cell.style.backgroundColor = "";
          }
          if (cell.style.backgroundImage.includes("black")) {
            cell.style.backgroundColor = "red";
          }
        });
      }

      if (
        chess.style.backgroundImage.includes("black") &&
        chess.style.backgroundColor !== "red"
      ) {
        moveChessTurn.forEach((cell) => {
          if (cell.style.backgroundImage.includes("black")) {
            cell.style.backgroundColor = "";
          }
          if (cell.style.backgroundImage.includes("white")) {
            cell.style.backgroundColor = "red";
          }
        });
      }
    }
  }
  hightlightchess(toggle);
};

const handleSelectChess = (chess) => {

  function chessMove(chess) {
    id = chess.getAttribute("id");
    img = chess.style.backgroundImage;
    document.querySelectorAll(".element").forEach((cellmove) => {
      if (moveChessTurn.length > 0) {
        moveChessTurn.forEach((cell) => {
          cell.style.backgroundColor = "";
        });
        moveChessTurn.length = [];
      }

      if (movePawnTurn.length > 0) {
        movePawnTurn.forEach((chess) => {
          chess.style.backgroundColor = "";
        });
        movePawnTurn.length = [];
      }

      if (cellPawnEatAR.length > 0) {
        cellPawnEatAR.forEach((chess) => {
          chess.style.backgroundColor = "";
        });
        cellPawnEatAR.length = [];
      }

      if (clickChess.length > 0) {
        clickChess.forEach((cell) => {
          cell.style.backgroundColor = "";
        });
        clickChess.length = [];
      }
      cellmove.addEventListener("click", () => move(cellmove));
    });
  }

  function move(cellmove) {
    if (
      cellmove.style.backgroundColor === "lightgreen" ||
      cellmove.style.backgroundColor === "red"
    ) {
      document.getElementById(id).style.backgroundImage = "";
      document.getElementById(id).style.backgroundColor = '#4caf50';
      cellmove.style.backgroundImage = img;
      cellmove.style.backgroundSize = "cover";
      // unhightlight pawn
      if (movePawnTurn.length > 0) {
        movePawnTurn.forEach((chess) => {
          chess.style.backgroundColor = "";
        });
        movePawnTurn.length = [];
      }
      //unhightlight chess
      if (moveChessTurn.length > 0) {
        moveChessTurn.forEach((cell) => {
          cell.style.backgroundColor = "";
        });
        moveChessTurn.length = [];
      }
      // unhightlight pawn eat
      if (cellPawnEatAR.length > 0) {
        cellPawnEatAR.forEach((chess) => {
          chess.style.backgroundColor = "";
        });
        cellPawnEatAR.length = [];
      }
      cellmove.style.backgroundColor = '#4caf50';
      moveChessTurn.push(cellmove);
    }
  }

  if (
    chess.style.backgroundImage.length !== 0 &&
    chess.style.backgroundColor !== "red"
  ) {
    chessMove(chess);
    if (chess.style.backgroundImage.length !==0) {
        chess.style.backgroundColor = 'pink'
        clickChess.push(chess)
      }
  }
};

document.querySelectorAll(".element").forEach((chess) => {
  tog = 0;
  chess.addEventListener("click", function () {
    handleSelectChess(chess);

// --------- TOGGLE TURN --------- \\
    {
    if (tog % 2 === 0) 
      displayBlockCanJump(chess, "white");
    
    if (chess.style.backgroundColor === "lightgreen" ||
        chess.style.backgroundColor === "red"
    )
      tog = tog + 1;

    if (tog % 2 !== 0) 
      displayBlockCanJump(chess, "black")
    }

// ---------CHESS WIN --------- \\
    {
// ---------WHITE WIN --------- \\
    if (chess.style.backgroundColor === 'red' &&
        chess.style.backgroundImage.includes('blackking'))
      setTimeout(() => {
        alert('White Win')
        location.reload()
      },100)

// ---------BLACK WIN --------- \\
    if (chess.style.backgroundColor === 'red' &&
        chess.style.backgroundImage.includes('whiteking'))
      setTimeout(() => {
        alert('Black Win')
        location.reload()
      },100)
    }

// ---------REMOVE PINK COLOR --------- \\
    if (chess.style.backgroundColor === "") {
      document.querySelectorAll(".element").forEach((chess) => {
        if (chess.style.backgroundColor = "pink")
          chess.style.backgroundColor = ""
      })
    }
  })
});
