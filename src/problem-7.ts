class Car {
  constructor(public make: string, public model: string, public year: number) {}

  getCarAge(currentYear: number = new Date().getFullYear()): number {
    return currentYear - this.year;
  }
}

const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge(2024) === 6);
