let points: number[][] = [[7,0],[3,5],[27,10]];

function busPoint(points: number[][]): number {
    let passengers: number = 0;
    points.forEach(x => {
        passengers = passengers + x[0] - x[1];
    });
    console.log(passengers);
    return passengers;
}

busPoint(points);