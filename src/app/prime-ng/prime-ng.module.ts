import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  exports: [
    ButtonModule,
    CheckboxModule
  ]
})
export class PrimeNgModule { }
