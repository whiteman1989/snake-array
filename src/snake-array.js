const snakeArray = (snakeStart) => {
    const columns = 7;
    const rows = 6;

    //init matrix
    const matrix = Array(rows).fill().map(()=>[]);
    let horizontalMin = 0;
    let horizontalMax = columns-1;
    let verticalMin = 0;
    let verticalMax = rows-1;

    while (horizontalMin <= horizontalMax && verticalMin <= verticalMax) {
        // Top row
        for (let i = horizontalMin; i <= horizontalMax; i++) {
            matrix[verticalMin][i] = snakeStart;
          snakeStart++;
        }
        verticalMin++;
    // Right column
        for (let i = verticalMin; i <= verticalMax; i++) {
            matrix[i][horizontalMax] = snakeStart;
          snakeStart++;
        }
        horizontalMax--;
    // Bottom row
        for (let i = horizontalMax; i >= horizontalMin; i--) {
            matrix[verticalMax][i] = snakeStart;
          snakeStart++;
        }
        verticalMax--;
    // start column
        for (let i = verticalMax; i >= verticalMin; i--) {
            matrix[i][horizontalMin] = snakeStart;
          snakeStart++;
        }
        horizontalMin++;
    }

    return matrix;
}

module.exports = snakeArray;
