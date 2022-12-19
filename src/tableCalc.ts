var table: number[] = [];

function TableCalc(num: number) {
    for (let index = 0; index <= 10; index++) {
        table.push(num * index);
    }
    for (let index = 0; index <= 10; index++) {
        table.push((num+1) * index);
        table.push((num+2) * index);
    }
    console.log(table);
}

TableCalc(1);