import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-prime-grid',
  templateUrl: './prime-grid.component.html',
  styleUrls: ['./prime-grid.component.css']
})
export class PrimeGridComponent implements OnInit {

  @Input() gridValues: Array<boolean> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
