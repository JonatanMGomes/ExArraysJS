var badCard = [10, 7, 20, 5, 1, 22, 11, 8, 12, 15];
var goodCard = [10, 1, 2, 7, 15, 22, 11, 26, 14, 9];

function Bingo(card) {
    if (card.find(x => x === 2) != undefined && card.find(x => x === 9) != undefined && card.find(x => x === 14) != undefined
        && card.find(x => x === 7) != undefined && card.find(x => x === 15) != undefined)
    {
        console.log("Você ganhou!!! =D");
    } else {
        console.log("Você perdeu! =(");
    }
}

Bingo(goodCard);