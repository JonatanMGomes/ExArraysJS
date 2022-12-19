"use strict";
let points = [[7, 0], [3, 5], [27, 10]];
function busPoint(points) {
    let passengers = 0;
    points.forEach(x => {
        passengers = passengers + x[0] - x[1];
    });
    console.log(passengers);
    return passengers;
}
busPoint(points);
//# sourceMappingURL=busPoint.js.map