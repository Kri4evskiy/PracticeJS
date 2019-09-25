var field = [
    ['&nbsp;', '&nbsp;', '&nbsp;'],
    ['&nbsp;', '&nbsp;', '&nbsp;'],
    ['&nbsp;', '&nbsp;', '&nbsp;'],
];

// Задачки на дом:
// Функцию определения победителя
// Вывести кто сейчас ходит
// Неправильный ввод аргументов
// Перечеркивание(очень опционально)

function whoIsWinner() {
    if (field[0][0] == "X" && field[0][1] == "X" && field[0][2] == "X") {
        alert("X - WON");
        return false;
    } else if (field[0][0] == "O" && field[0][1] == "O" && field[0][2] == "O") {
        alert("O - WON");
        return false;
    } else if (field[1][0] == "X" && field[1][1] == "X" && field[1][2] == "X") {
        alert("X - WON");
        return false;
    } else if (field[1][0] == "O" && field[1][1] == "O" && field[1][2] == "O") {
        alert("O - WON");
        return false;
    } else if (field[2][0] == "X" && field[2][1] == "X" && field[2][2] == "X") {
        alert("X - WON");
        return false;
    } else if (field[2][0] == "O" && field[2][1] == "O" && field[2][2] == "O") {
        alert("O - WON");
        return false;
    } else if (field[0][0] == "X" && field[1][0] == "X" && field[2][0] == "X") {
        alert("X - WON");
        return false;
    } else if (field[0][0] == "O" && field[1][0] == "O" && field[2][0] == "O") {
        alert("O - WON");
        return false;
    } else if (field[0][1] == "X" && field[1][1] == "X" && field[2][1] == "X") {
        alert("X - WON");
        return false;
    } else if (field[0][1] == "O" && field[1][1] == "O" && field[2][1] == "O") {
        alert("O - WON");
        return false;
    } else if (field[0][2] == "X" && field[1][2] == "X" && field[2][2] == "X") {
        alert("X - WON");
        return false;
    } else if (field[0][2] == "O" && field[1][2] == "O" && field[2][2] == "O") {
        alert("O - WON");
        return false;
    } else if (field[0][0] == "X" && field[1][1] == "X" && field[2][2] == "X") {
        alert("X - WON");
        return false;
    } else if (field[0][0] == "O" && field[1][1] == "O" && field[2][2] == "O") {
        alert("O - WON");
        return false;
    } else if (field[0][2] == "X" && field[1][1] == "X" && field[2][0] == "X") {
        alert("X - WON");
        return false;
    } else if (field[0][2] == "O" && field[1][1] == "O" && field[2][0] == "O") {
        alert("O - WON");
        return false;
    } else {
        return true;
    };
};

function draw() {
    document.write('<table>');
    for (var r = 0; r < field.length; r++) {
        document.write('<tr>');
        for (var c = 0; c < field[r].length; c++) {
            document.write('<td>' + field[r][c] + '</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}

draw();

var step,
    xIsNext = true;

do {
    if (xIsNext) {
        step = prompt('Введите ваш ход X', '1,1');
    } else {
        step = prompt('Введите ваш ход O', '1,1');
    };
    step = step.split(',');
    if (isNaN(step[0]) || isNaN(step[1])) {
        alert ("Введены не числовые аргументы.");
        continue;
    };
    if (field[+step[0]][+step[1]] !== '&nbsp;') {
        alert("На это поле уже был сделан ход. Попробуйте выбрать другое поле.");
        continue;
    };
    field[+step[0]][+step[1]] = xIsNext ? 'X' : 'O';
    xIsNext = !xIsNext;
    draw();
} while (whoIsWinner());
