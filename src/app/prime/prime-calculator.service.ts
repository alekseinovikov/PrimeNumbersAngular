import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimeCalculatorService {

  constructor() {
  }

  calculate(count: number): Array<boolean> {
    if (count <= 0) {
      return [];
    }

    const arr = this.createArrayForMaxNumber(count);
    this.setNumberNotPrime(1, arr);
    if (count <= 2) {
      return arr;
    }

    for (let i = 2; i < count / 2; i++) {
      let iter = 2;
      let curr = i * iter;
      while (curr <= count) {
        if (curr % i === 0 && this.isNumberPrime(curr, arr)) {
          this.setNumberNotPrime(curr, arr);
        }

        curr = i * iter;
        iter++;
      }
    }

    return arr;
  }

  private setNumberNotPrime(num: number, arr: Array<boolean>): void {
    const index = this.getIndexFromNumber(num, arr);
    arr[index] = false;
  }

  private isNumberPrime(num: number, arr: Array<boolean>): boolean {
    const index = this.getIndexFromNumber(num, arr);
    return arr[index];
  }

  private getIndexFromNumber(num: number, arr: Array<any>): number {
    const index = num - 1;
    if (index > arr.length - 1) {
      throw new Error('Number is not available in the array!');
    }

    return index;
  }

  private createArrayForMaxNumber(num: number): Array<boolean> {
    const arr = new Array<boolean>(num);
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = true;
    }

    return arr;
  }

}
