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
    localStorage.setItem('cars', JSON.stringify(cars));
}

function printCarsFromLSAfterReload() {
    cars = JSON.parse(localStorage.getItem('cars'));
    console.log(cars);
}

theForm.addEventListener('submit', addCarAndSaveLS);
window.addEventListener('load', printCarsFromLSAfterReload);