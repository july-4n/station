import './style.css';
import {opel, Car, PassengerCar, Truck} from './modules/car';
import {Station} from './modules/station';

const open = document.querySelector('.open');
const car = document.querySelector('.car');

const testArray = {
  passengerCar: [
    ['Opel', 'Crossland', 45],
    ['Opel', 'Grandland X', 53],
    ['Mazda', 'cx-5', 55],
    ['BMW', 'M5', 68],
    ['BMW', 'X5', 80],
    ['BMW', 'X5d', 80, 'diesel'],
    ['BMW', 'X3', 65],
    ['BMW', '5', 66],
  ],
  truck: [
    ['MAN', 'TGS', 400],
    ['MAN', 'TGX', 300],
    ['Mercedes-Benz', 'Actros', 450],
    ['Mercedes-Benz', 'Actros L', 650],
    ['Volvo', 'FH16', 700],
    ['Volvo', 'FM', 700],
    ['Volvo', 'FMX', 540],
  ],
};

const getTestCar = () => {
  const typeBool = Math.random() < 0.6;
  const listCar = typeBool ? testArray.passengerCar : testArray.truck;
  const randomCar = listCar[(Math.floor(Math.random() * listCar.length))];
  return typeBool ? new PassengerCar(...randomCar) : new Truck(...randomCar);
};

const station = new Station([
  {
    type: 'petrol',
  },
  {
    type: 'diesel',
  },
  {
    type: 'gas',
  },
], '.app');

open.addEventListener('click', () => {
  station.init();
  console.log(station);
  open.remove();
  car.style.display = 'block';
  car.addEventListener('click', () => {
    station.addCarQueue(getTestCar());
  });
});



// console.log(opel);
// console.log(opel.setModel('Crossland S').getTitle());
// console.log(opel.needPetrol());
// console.log(opel.fillUp().needPetrol());
// console.log(opel);
// console.log(opel.setModel('Crossland Land Lux+').fillUp().getTitle());
// console.log(opel);
// console.log(opel.maxTank);
// opel.maxTank = 50;
// opel.fillUp();
// console.log(opel);

// const opelTwo = new PassengerCar('Opel', 'Crossland', 49);
// console.log(opelTwo);

// const volvo = new Truck('Volvo', 'FH16', 700);
// console.log(volvo);
