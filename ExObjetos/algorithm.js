const theForm = document.getElementById("theForm");

var cars = [];

function addCarAndSaveLS() {
    let car = {
        brand: document.getElementById("brand").value,
        model: document.getElementById("model").value,
        year: document.getElementById("year").value,
        value: document.getElementById("value").value,
        color: document.getElementById("color").value,
        gear: document.getElementById("gear").value
    }
    cars.push(car);
    window.localStorage.setItem('cars', JSON.stringify(cars));
}

function printCarsFromLSAfterReload() {
    cars = JSON.parse(localStorage.getItem('cars'));
    console.log(cars);
}

function searchACarForBrand(arrayReceived, desiredBrand) {
    let arrayResult = arrayReceived.filter(function(i){
        if (i.brand === desiredBrand) {
            return i;
        }
    })
    console.log(arrayResult);
    return arrayResult;
}

function searchBrandsOfCars(arrayReceived) {
    let arrayResult = [];
    arrayReceived.forEach(function(i){
        if (!arrayResult.includes(i.brand)) {
            arrayResult.push(i.brand);
        }
    })
    console.log(arrayResult);
    return arrayResult;
}

theForm.addEventListener('submit', addCarAndSaveLS);
window.addEventListener('load', printCarsFromLSAfterReload);