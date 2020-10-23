import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrimeCalculatorService {

  constructor() {
  }

  calculateNotPrimeNumbersAsync(count: number): Observable<number> {
    return new Observable<number>((subscriber) => {
      if (count <= 0) {
        subscriber.complete();
        return;
      }

      const arr = this.createArrayForMaxNumber(count);
      this.setNumberNotPrime(1, arr);
      subscriber.next(1);
      if (count <= 2) {
        subscriber.complete();
        return;
      }

      for (let i = 2; i < count / 2; i++) {
        let iter = 2;
        let curr = i * iter;
        while (curr <= count) {
          if (curr % i === 0 && this.isNumberPrime(curr, arr)) {
            this.setNumberNotPrime(curr, arr);
            subscriber.next(curr);
          }

          curr = i * iter;
          iter++;
        }
      }

      subscriber.complete();
      return;
    });
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
    const arr: boolean[] = [];
    for (let i = 0; i <= num - 1; i++) {
      arr[i] = true;
    }

    return arr;
  }

}
