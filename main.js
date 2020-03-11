const cars = [
  new Car("Volkswagen", "Jetta", "Sedan", 2800),
  new Car("Renault", "Logan", "Sedan", 1400),
  new Car("Peugeot", "307", "Hatchback", 3800),
  new Car("Ford", "Mondeo", "Sedan", 2000),
  new Car("BMW", "X7", "SUV", 6000)
];

function Car(brand, model, type, cc) {
  let _brand = brand;
  let _model = model;
  let _type = type;
  let _cc = cc;

  this.getBrand = function() {
    return _brand;
  };
  this.getModel = function() {
    return _model;
  };
  this.getType = function() {
    return _type;
  };
  this.getCC = function() {
    return _cc;
  };

  this.setBrand = function(value) {
    _brand = value;
  };
  this.setModel = function(value1) {
    _model = value1;
  };
  this.setType = function(value2) {
    _type = value2;
  };
  this.setCC = function(value3) {
    _cc = value3;
  };
}

function consoleLog() {
  return `${this.getBrand()} ${this.getModel()} is ${this.getType()} and can do wroom-wroom with ${this.getCC()} cc`;
}

function check(arr) {
  arr.forEach(element => {
    if (element.getCC() > 3000) {
      console.log(consoleLog.call(element));
    }
  });
}

check(cars);
