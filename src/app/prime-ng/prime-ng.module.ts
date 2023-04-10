import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  exports: [
    ButtonModule,
    CheckboxModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
