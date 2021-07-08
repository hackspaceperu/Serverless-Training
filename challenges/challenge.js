
function backtracking(array, map, sum, ind) {
    if (ind == array.length)
        return;
    if (map[sum - array[ind]] == null)
        map[array[ind]] = 0;
    else
        out.push([sum - array[ind], array[ind]])
    backtracking(array, map, sum, ind + 1);
}

function main() {
    array = [2, 3, -1, 4, 6, 4];
    map = {};
    sum = 8;
    out = [];
    backtracking(array, map, sum, 0);
    console.log(out);
}

main()

