const snakeArray = () => {
    let array = [];
    let row = 6;
    let col = 7;
    let rowStart = 0;
    let rowEnd = row - 1;
    let colStart = 0;
    let colEnd = col - 1;
    let number = 1;
    for (let i = 0; i < row; i++) {
        array.push([]);
    }

    const fillSnake = () => {
        for (let i = colStart; i < colEnd + 1; i++) {
            array[rowStart][i] = number++;
        }
        for (let i = rowStart; i < rowEnd; i++) {
            array[i + 1][colEnd] = number++;
        }
        for (let i = colEnd - 1; i >= colStart; i--) {
            array[rowEnd][i] = number++;
        }
        for (let i = rowEnd - 1; i > rowStart; i--) {
            array[i][colStart] = number++;
        }

        rowStart++
        colStart++
        rowEnd--
        colEnd--
    }

    fillSnake();
    fillSnake();
    fillSnake();

    return array;
}

module.exports = snakeArray;
