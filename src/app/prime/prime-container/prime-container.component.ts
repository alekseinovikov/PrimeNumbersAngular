import {Component, OnInit} from '@angular/core';
import {PrimeCalculatorService} from '../prime-calculator.service';

@Component({
  selector: 'app-prime-container',
  templateUrl: './prime-container.component.html',
  styleUrls: ['./prime-container.component.css'],
  providers: [PrimeCalculatorService]
})
export class PrimeContainerComponent implements OnInit {

  count = 0;
  gridValues: Array<boolean> = [];

  constructor(private calculator: PrimeCalculatorService) {
  }

  ngOnInit(): void {
  }

  onRun(count: number): void {
    this.count = count;
    this.runCalculation();
  }

  private runCalculation(): void {
    const values = this.calculator.calculate(this.count);
    this.gridValues = values;
  }

}
