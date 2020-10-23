import {Component, OnDestroy, OnInit} from '@angular/core';
import {PrimeCalculatorService} from '../prime-calculator.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-prime-container',
  templateUrl: './prime-container.component.html',
  styleUrls: ['./prime-container.component.css'],
  providers: [PrimeCalculatorService]
})
export class PrimeContainerComponent implements OnInit, OnDestroy {

  count = 0;
  gridValues: Array<boolean> = [];
  subscription: Subscription;

  constructor(private calculator: PrimeCalculatorService) {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
  }

  onRun(count: number): void {
    this.count = count;
    this.runCalculation();
  }

  private runCalculation(): void {
    this.gridValues = this.createPrimeArray(this.count);
    this.subscription = this.calculator.calculateNotPrimeNumbersAsync(this.count).subscribe(next => {
        const index = this.getIndexFromNumber(next, this.gridValues);
        this.gridValues[index] = false;
      },
      error => {

      },
      () => {
      });
  }

  private createPrimeArray(count: number): Array<boolean> {
    const arr: boolean[] = [];
    for (let i = 0; i <= count - 1; i++) {
      arr[i] = true;
    }

    return arr;
  }

  private getIndexFromNumber(num: number, arr: Array<any>): number {
    const index = num - 1;
    if (index > arr.length - 1) {
      throw new Error('Number is not available in the array!');
    }

    return index;
  }

}
