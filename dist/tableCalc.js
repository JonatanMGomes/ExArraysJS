"use strict";
var table = [];
function TableCalc(num) {
    for (let index = 0; index <= 10; index++) {
        table.push(num * index);
    }
    for (let index = 0; index <= 10; index++) {
        table.push((num + 1) * index);
        table.push((num + 2) * index);
    }
    console.log(table);
}
TableCalc(1);
//# sourceMappingURL=tableCalc.js.map