const theForm = document.getElementById("theForm");

function addCarAndSaveLS() {
    let cars = JSON.parse(localStorage.getItem('cars')) ?? []; 

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
    let cars = JSON.parse(localStorage.getItem('cars'));
    console.log(cars);
}

function searchCarsByBrand(arrayReceived, desiredBrand) {
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

function customSearch(cars, arrayOfPropDesired) {
    let customList = []

    for (let index = 0; index < cars.length; index++) {
        let currentCar = cars[index];
        let customCar = [] 

        for (let i = 0; i < arrayOfPropDesired.length; i++) {
            let prop = arrayOfPropDesired[i];
            customCar.push(currentCar[prop])
        }
        
        customList.push(customCar)
    }
    return customList;
}

theForm.addEventListener('submit', addCarAndSaveLS);
window.addEventListener('load', printCarsFromLSAfterReload);