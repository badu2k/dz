class Car {
  #make;
  #model;
  #mileage;
  constructor(make, model, mileage ) {
    this.#make =  make;
    this.#model = model;
    this.#mileage = mileage;
  }

  get mileage() {
    return this.#mileage;
  }

  set mileage(newMileage) {
    this.#mileage = newMileage;
  }
  
  info() {
    console.log(this.#make, this.#model, this.#mileage);
  }

}