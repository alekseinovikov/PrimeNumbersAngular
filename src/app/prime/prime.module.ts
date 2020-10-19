import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeContainerComponent } from './prime-container/prime-container.component';
import { PrimeGridComponent } from './prime-grid/prime-grid.component';
import { PrimeInputComponent } from './prime-input/prime-input.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [PrimeContainerComponent, PrimeGridComponent, PrimeInputComponent],
  exports: [
    PrimeContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PrimeModule { }
