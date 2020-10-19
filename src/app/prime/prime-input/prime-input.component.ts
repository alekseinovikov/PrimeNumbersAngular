import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-prime-input',
  templateUrl: './prime-input.component.html',
  styleUrls: ['./prime-input.component.css']
})
export class PrimeInputComponent implements OnInit {

  @Output() runEmitter = new EventEmitter<number>();
  count: number;

  inputForm: FormGroup = new FormGroup({
    count: new FormControl(1),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const count: number = this.inputForm.get('count').value;
    this.runEmitter.emit(count);
  }

}
