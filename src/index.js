// You should implement your task here.

module.exports = function towelSort(matrix) {
    let ArrayAll = [];
    let swap = 0;
    if (!matrix || matrix.length < 1) return [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (swap % 2 == 0) {
                ArrayAll.push(matrix[i][j]);
            } else {
                ArrayAll.push(matrix[i][matrix[i].length - j - 1]);
            }
        }
        swap++;
    }
    return ArrayAll;
}