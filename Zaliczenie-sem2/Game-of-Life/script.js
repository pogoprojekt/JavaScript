const board = [
  ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', '1', '0', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', '0', '0', '0', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', '0', '0', '0', '0', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', '0', '0', '0', '0', '0', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', '0', '0', '0', '0', '0', '0', 'X', 'X', 'X', 'X', 'X'],
  ['X', '0', '0', '0', '0', '0', '0', '0', 'X', 'X', 'X', 'X'],
  ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
  ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
  ['X', '0', '0', '0', 'X', '0', '0', '0', '0', 'Y', '0', 'X'],
  ['X', '0', '0', 'X', 'X', 'X', '0', '0', '0', '0', '0', 'X'],
  ['X', '0', '0', '0', 'X', '0', '0', '0', '0', '0', '0', 'X'],
  ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
  ['X', '0', '0', 'Y', '0', '0', '0', '0', '0', 'Y', '0', 'X'],
  ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
  ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
];

const directions = [
  { dx: 0, dy: 1 },   // R
  { dx: 1, dy: 0 },   // D
  { dx: 0, dy: -1 },  // L
  { dx: -1, dy: 0 },   // U
  { dx: 1, dy: 1 },
  { dx: -1, dy: -1 }, 
  { dx: 1, dy: -1 },
  { dx: -1, dy: 1 }
];

let ballPosition = { x: 1, y: 1 };
let currentDirection = directions[4];

function createBoard() {
  const table = document.getElementById('board');
  table.innerHTML = '';
  for (let i = 0; i < board.length; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < board[i].length; j++) {
          const cell = document.createElement('td');
         
          switch (board[i][j]) {
            case 'X':
                cell.className = 'X';
                break;
            case 'Y':
                cell.className = 'Y';
                break;
            case '0':
                cell.className = 'zero';
                break;
            default:
                cell.className = 'one';
        }
          if (board[i][j] === '1') {
            cell.textContent = '1';
        } else {
            cell.textContent = '';
        }
          row.appendChild(cell);
      }
      table.appendChild(row);
  }
}

function moveBall() {
  let newX = ballPosition.x + currentDirection.dx;
  let newY = ballPosition.y + currentDirection.dy;

    if (board[newX][newY] === 'X'|| newX < 0 || newX >= board.length || newY < 0 || newY >= board[0].length) {
      if(currentDirection.dx === 0 || currentDirection.dy === 0){
      currentDirection = getOppositeDirection(currentDirection);
      }
       // C U L
      else if (currentDirection.dx === -1 && currentDirection.dy === -1 && board[newX][newY + 1] === 'X' && board[newX + 1][newY] === 'X' || (( newX >= board.length && board[newX + 1][newY] === '0' && board[newX][newY  +1] === '0')))  { 
      currentDirection.dx = 1;
       currentDirection.dy = 1;
       } 
      // C U R
      else if (currentDirection.dx === -1 && currentDirection.dy === 1 && ((board[newX + 1][newY] === 'X' && board[newX][newY  -1] === 'X') || (board[newX + 1][newY] === '0' && board[newX][newY  -1] === '0') )) { 
        currentDirection.dx = 1;
        currentDirection.dy = -1;
      } 
      // C D R
       else if (currentDirection.dx === 1 && currentDirection.dy === 1 && board[newX - 1][newY] === 'X' && board[newX][newY  -1] === 'X' || ((board[newX - 1][newY] === '0' && board[newX][newY  -1] === '0'))) { 
       currentDirection.dx = -1;
      currentDirection.dy = -1;
      }
        // C D L
       else if (currentDirection.dx === 1 && currentDirection.dy === -1 && board[newX - 1][newY] === 'X' && board[newX][newY  + 1] === 'X' || ((board[newX - 1][newY] === '0' && board[newX][newY  +1] === '0'))) { 
      currentDirection.dx = -1;
      currentDirection.dy = 1;
      }  
      //D
     else if (currentDirection.dx === 1 && currentDirection.dy === -1 && board[newX][newY + 1] === 'X') { 
      currentDirection.dx = -1;
      currentDirection.dy = -1;
      } 
      else if (currentDirection.dx === 1 && currentDirection.dy === 1 && board[newX][newY + 1] === 'X') { 
        currentDirection.dx = -1;
        currentDirection.dy = 1;
      } 

      // U
      else if (currentDirection.dx === -1 && currentDirection.dy === 1 && board[newX][newY + 1] === 'X') { 
        currentDirection.dx = 1;
        currentDirection.dy = 1;
      } 
      else if (currentDirection.dx === -1 && currentDirection.dy === -1 && board[newX][newY + 1] === 'X' ) { 
        currentDirection.dx = 1;
        currentDirection.dy = -1;
      } 
      // R
      else if (currentDirection.dx === 1 && currentDirection.dy === 1 && board[newX + 1][newY] === 'X') { 
        currentDirection.dx = 1;
        currentDirection.dy = -1;
      } 
      else if (currentDirection.dx === -1 && currentDirection.dy === 1 && board[newX + 1][newY] === 'X') { 
        currentDirection.dx = -1;
        currentDirection.dy = -1;
      } 
      // L
      else if (currentDirection.dx === -1 && currentDirection.dy === -1 && board[newX + 1][newY] === 'X') { 
        currentDirection.dx = -1;
        currentDirection.dy = 1;
      } 
      else if (currentDirection.dx === 1 && currentDirection.dy === -1 && board[newX + 1][newY] === 'X') { 
        currentDirection.dx = 1;
        currentDirection.dy = 1;
      } 



      newX = ballPosition.x + currentDirection.dx;
      newY = ballPosition.y + currentDirection.dy;

  }

  if (board[newX][newY] === 'Y') {
      board[newX][newY] = '0';
      currentDirection = getRandomDirection();
  }

  board[ballPosition.x][ballPosition.y] = '0';
  ballPosition = { x: newX, y: newY };
  board[ballPosition.x][ballPosition.y] = '1';

  createBoard();
}

function getOppositeDirection(direction) {
  if (direction.dx === 0 && direction.dy === 1) return directions[2]; // R to L
  if (direction.dx === 1 && direction.dy === 0) return directions[3]; // D to U
  if (direction.dx === 0 && direction.dy === -1) return directions[0]; // L to R
  if (direction.dx === -1 && direction.dy === 0) return directions[1]; // U to D
}

function getRandomDirection() {
  const availableDirections = directions.filter(dir => dir !== currentDirection);
  return availableDirections[Math.floor(Math.random() * availableDirections.length)];
}

createBoard();
setInterval(moveBall, 100);