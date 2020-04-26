import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayFunctionsService {

  constructor() { }

  public compareValues(key, order = 'asc') {
    console.log('compare '+key+' order '+order);
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
  
  public addIdToArrayOfObjects(myArray) {
    if (!Array.isArray(myArray)) { return []; }
  
    let counter: any = 0;
    console.log(JSON.stringify(myArray));
    myArray.forEach(function (item) {
      item.id = myArray.length - counter;
      counter++;
    });
    return myArray;
  }


}


