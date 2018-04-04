import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from './button/button.module';

@NgModule({
  imports: [
    FormsModule
  ],
  exports: [
    ButtonModule
  ]
})
export class PatternFlyNgModule {
}
