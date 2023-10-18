let selectedCar;
let price = 0;
let option;
function CalcularCosto(carro, days){
    return carro.precio * days
}
function ImprimirPresupuesto(carro, days, cost){
    alert(`Has seleccionado el modelo ${carro.nombre} y vas a rentarlo por ${days} dias. El costo total sería de: $${cost}`)
}
const autos = [
    { id: 1, nombre: "Sedan", precio: 250 },
    { id: 2, nombre: "SUV", precio: 300 },
    { id: 3, nombre: "Deportivo", precio: 400 },
    { id: 4, nombre: "Camioneta", precio: 250 },
];

do {
    do {
        let input = prompt(
            "Selecciona un modelo de automóvil:\n1.- Sedán -$10\n2.- SUV -$25\n3.- Deportivo -$40\n4.- Camioneta -$55\n5.- Salir"
        );
        option = parseInt(input);
        selectedCar = autos.find(coche => coche.id === option);
        if(selectedCar || option === 5){
            break;
        }
        alert("Elige una opcion correcta")
    } while (selectedCar === undefined)
    if (option !== 5 && selectedCar) {
        let days = parseInt(prompt("Ingresa la cantidad de días para rentar el " + selectedCar));
        if (!isNaN(days)) {
            let cost =CalcularCosto(selectedCar, days)
            ImprimirPresupuesto(selectedCar, days, cost)
        } else {
            alert("Por favor, ingresa una cantidad válida de días.");
        }
    }
} while (option !== 5); 