 class City {
     constructor() {
         this._buildings = [];
     }
 }

class Building extends City {

 }

 class Hospital extends Building {
 }

 class PoliceDepartment extends Building {

 }

 class Car extends City {

 }

class PoliceCar extends PoliceDepartment {

 }

 class AmbulanceCar extends Hospital {

 }

 const city = new City();
const nairiHospital = new Hospital();

 console.log(city._buildings)

