const cars = [];

function Car(plate, maker, model, price, color) {
  this.plate = plate;
  this.maker = maker;
  this.model = model;
  this.price = price;
  this.color = color;

  this.discount = function() {
    let discount;
    if (this.price > 20000) {
      discount = this.price * 0.75;
    } else if (this.price < 5000) {
      discount = this.price * 0.9;
    } else {
      discount = this.price * 0.85;
    }
    return discount;
  }
}

function onAddcarClick() {
  let car = new Car(document.getElementById("licence_plate").value,
    document.getElementById("car_maker").value,
    document.getElementById("car_model").value,
    Number(document.getElementById("price").value),
    document.getElementById("color").value);
  cars.push(car);
  document.getElementById("car").reset();
  updateTable(car);
  console.table(cars);
}

function updateTable(n) {
  let plate = `<td>${n.plate}</td>`;
  let maker = `<td>${n.maker}</td>`;
  let model = `<td>${n.model}</td>`;
  let price = `<td>${n.price}</td>`;
  let color = `<td>${n.color}</td>`;
  let discount = `<td>${n.discount()}</td>`;
  document.getElementById("table").innerHTML += `<tr>${plate}${maker}${model}${price}${color}${discount}</tr>`
}

function onSearchClick() {
  let input = document.getElementById("search").value;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].plate === input) {
      document.getElementById("result").innerHTML = `The mark is ${cars[i].maker}. The model is ${cars[i].model}. Discount price is ${cars[i].discount()}.`;
      console.log(cars[i].maker);
      console.log(cars[i].model);
      console.log(cars[i].discount());
    }
  }
}
