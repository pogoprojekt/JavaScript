const boardWidth = 50;
const boardHeight = 20;
let board = [];
let interval = null;

document.addEventListener("DOMContentLoaded", () => {
    const boardElement = document.getElementById('board');

    for (let y = 0; y < boardHeight; y++) {
        let row = [];
        for (let x = 0; x < boardWidth; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => toggleCell(cell, x, y));
            boardElement.appendChild(cell);
            row.push(cell);
        }
        board.push(row);
    }

    document.getElementById('start').addEventListener('click', startGame);
    document.getElementById('stop').addEventListener('click', stopGame);
});

function toggleCell(cell, x, y) {
        if (cell.classList.contains('alive')) {
        cell.classList.remove('alive');
    } else {
        cell.classList.add('alive');
    }
}

function startGame() {
    if (interval) return;
    interval = setInterval(() => {
        let newBoard = [];

        for (let y = 0; y < boardHeight; y++) {
            let newRow = [];
            for (let x = 0; x < boardWidth; x++) {
                const cell = board[y][x];
                const isAlive = cell.classList.contains('alive');
                const neighbors = countNeighbors(x, y);

                if (isAlive) {
                    if (neighbors < 2 || neighbors > 3) {
                        newRow.push(false);
                    } else {
                        newRow.push(true);
                    }
                } else {
                    if (neighbors === 3) {
                        newRow.push(true);
                    } else {
                        newRow.push(false);
                    }
                }
            }
            newBoard.push(newRow);
        }

        for (let y = 0; y < boardHeight; y++) {
            for (let x = 0; x < boardWidth; x++) {
                if (newBoard[y][x] === true) {
                    board[y][x].classList.add('alive');
                } else {
                    board[y][x].classList.remove('alive');
                }
            }
        }
    }, 100);
}

function stopGame() {
    clearInterval(interval);
    interval = null;
}

function countNeighbors(x, y) {
    let count = 0;
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const newX = x + dx;
            const newY = y + dy;
            if (newX >= 0 && newX < boardWidth && newY >= 0 && newY < boardHeight) {
                if (board[newY][newX].classList.contains('alive') === true) {
                    count++;
                }
            }
        }
    }
    return count;
}